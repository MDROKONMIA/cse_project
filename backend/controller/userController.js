const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utilities/errorHandler");
const sendEmail = require("../utilities/sendEmail");

exports.sendEmail = catchAsyncErrors( async (req, res, next) => {
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
