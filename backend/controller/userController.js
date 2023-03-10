const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utilities/errorHandler");
const sendEmail = require("../utilities/sendEmail");
const puppeteer = require("puppeteer");

exports.sendEmail = catchAsyncErrors(async (req, res, next) => {
  const { from, to, subject, body } = req.body;

  try {
    await sendEmail({
      from: from,
      to: to,
      subject: subject,
      message: body,
    });

    res.status(200).json({
      success: true,
      message: `Email send to ${to} successully.`,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.getAllNews = catchAsyncErrors(async (req, res, next) => {
  const browser = await puppeteer.launch();
  const url = "https://brur.ac.bd/notices/";
  const page = await browser.newPage();
  await page.goto(url);

  const ProductHandles = await page.$$(
    "div.item.col-sm-12.col-md-6.col-lg-6 >.block-content>.content"
  );

  const allNotice = [];
  for (const productHandle of ProductHandles) {
    try {
      const title = await page.evaluate(
        (el) => el.querySelector("a").textContent,
        productHandle
      );
      const date = await page.evaluate(
        (el) => el.querySelector(".entry-meta>.date>p").textContent,
        productHandle
      );
      const href = await page.evaluate(
        (el) => el.querySelector("a[href]").textContent,
        productHandle
      );
      allNotice.push({ title: title, date: date, url: url });
    } catch (err) {
      return next(new ErrorHandler(err.message, 500));
    }
  }
  await browser.close();

  res.status(200).json({
    success: true,
    data: allNotice,
  });
});

exports.getAllTeachers = catchAsyncErrors(async (req, res, next) => {
  const browser = await puppeteer.launch();
  const url =
    "https://brur.ac.bd/engineering-and-technology/department-of-computer-science-and-engineering/";
  const page = await browser.newPage();
  await page.goto(url);

  const teachers = await page.evaluate(() => {
    const srcs = Array.from(
      document.querySelectorAll(
        "div.team-block>.team-img.posion-related.effect6"
      )
    ).map((teacher) => {
      return {
        profUrl: teacher.querySelector("a").getAttribute('href'),
        img: teacher.querySelector("img").getAttribute("src"),
        name:teacher.querySelector("div.team-content.extension>h4").textContent,
        dagignation: Array.from(teacher.querySelectorAll("div.team-content.extension>p")).at(0).textContent,
        phone:Array.from(teacher.querySelectorAll("div.team-content.extension>p")).at(1).textContent,
        email:Array.from(teacher.querySelectorAll("div.team-content.extension>p")).at(2).textContent,
      };
    });
    return srcs;
  });

  await browser.close();
  res.status(200).json({
    success: true,
    data: teachers,
  });
});
