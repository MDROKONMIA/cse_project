import "./css/style.css";
import "./App.css";
import "./css/themify-icons.css";
import "./css/homePage.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Banner from "./components/Banner.jsx";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import Email from "./components/Email/Email";
import Notice from "./components/Notice&Events/Notice";
import Teachers from "./components/teachers/Teachers";
import OfficeStaffs from "./components/teachers/OfficeStaffs";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* <button
        className="bg-blend-lighten dark:bg-black"
        onClick={handleThemeSwitch}
      >
        Dark
      </button> */}
      <Router>
        <Header />
        <ScrollToTop/>

        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/email/:email" element={<Email />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/staffs" element={<OfficeStaffs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// const cheerio = require("cheerio");
// const axios = require("axios");

// async function performScraping() {
//   // downloading the target web page
//   // by performing an HTTP GET request in Axios
//   const axiosResponse = await axios.request({
//     method: "GET",
//     url: "https://brightdata.com",
//     headers: {
//       "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
//     },
//   });

//   const $ = cheerio.load(axiosResponse.data);

//   // initializing the data structures
//   // that will contain the scraped data
//   const industries = [];
//   const marketLeaderReasons = [];
//   const customerExperienceReasons = [];
// }

// function App() {
//   const [user, setUser] = useState([]);

//   const unurl ="https://brur.ac.bd/engineering-and-technology/department-of-computer-science-and-engineering";
//   const gult = "https://jsonplaceholder.typicode.com/users";
//   const fetchData = () => {
//     return fetch(unurl, {
//       mode: "no-cors",
//       // cache: "default",
//       // headers: {
//       //   "Access-Control-Allow-Headers": "Content-Type",
//       //   "Access-Control-Allow-Origin": "*",
//       // },
//     }).then((response) =>setUser(response.text()));
//       // .then((data) => setUser(data));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(user)

//   return (
//     <main>
//       <h1>User List</h1>
//       <ul>
//         {user &&
//           user.length > 0 &&
//           user.map((userObj, index) => (
//             <li key={userObj.id}>{userObj.name}</li>
//           ))}
//       </ul>
//     </main>
//   );
// }

// export default App;

// import axios from "axios";

// const cheerio = require("cheerio");

// async function App() {
//   // downloading the target web page
//   // by performing an HTTP GET request in Axios
//   const axiosResponse = await axios.request({
//     method: "GET",
//     url: "https://brightdata.com/",
//     headers: {
//       "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
//     },
//   });

//   // parsing the HTML source of the target web page with Cheerio
//   const $ = cheerio.load(axiosResponse.data);

//   console.log($)

//   // initializing the data structures
//   // that will contain the scraped data
//   const industries = [];
//   const marketLeaderReasons = [];
//   const customerExperienceReasons = [];

//   // scraping the "Learn how web data is used in your market" section
//   $(".elementor-element-7a85e3a8")
//     .find(".e-container")
//     .each((index, element) => {
//       // extracting the data of interest
//       const pageUrl = $(element).attr("href");
//       const image = $(element)
//         .find(".elementor-image-box-img img")
//         .attr("data-lazy-src");
//       const name = $(element)
//         .find(".elementor-image-box-content .elementor-image-box-title")
//         .text();

//       // filtering out not interesting data
//       if (name && pageUrl) {
//         // converting the data extracted into a more
//         // readable object
//         const industry = {
//           url: pageUrl,
//           image: image,
//           name: name,
//         };

//         // adding the object containing the scraped data
//         // to the industries array
//         industries.push(industry);
//       }
//     });

//   // scraping the "What makes Bright Data
//   // the undisputed industry leader" section
//   $(".elementor-element-ef3e47e")
//     .find(".elementor-widget")
//     .each((index, element) => {
//       // extracting the data of interest
//       const image = $(element)
//         .find(".elementor-image-box-img img")
//         .attr("data-lazy-src");
//       const title = $(element).find(".elementor-image-box-title").text();
//       const description = $(element)
//         .find(".elementor-image-box-description")
//         .text();

//       // converting the data extracted into a more
//       // readable object
//       const marketLeaderReason = {
//         title: title,
//         image: image,
//         description: description,
//       };

//       // adding the object containing the scraped data
//       // to the marketLeaderReasons array
//       marketLeaderReasons.push(marketLeaderReason);
//     });

//   // scraping the "The best customer experience in the industry" section
//   $(".elementor-element-288b23cd .elementor-text-editor")
//     .find("li")
//     .each((index, element) => {
//       // extracting the data of interest
//       const title = $(element).find("strong").text();
//       // since the title is part of the text, you have
//       // to remove it to get only the description
//       const description = $(element).text().replace(title, "").trim();

//       // converting the data extracted into a more
//       // readable object
//       const customerExperienceReason = {
//         title: title,
//         description: description,
//       };

//       // adding the object containing the scraped data
//       // to the customerExperienceReasons array
//       customerExperienceReasons.push(customerExperienceReason);
//     });

//   // trasforming the scraped data into a general object
//   const scrapedData = {
//     industries: industries,
//     marketLeader: marketLeaderReasons,
//     customerExperience: customerExperienceReasons,
//   };

//   // converting the scraped data object to JSON
//   const scrapedDataJSON = JSON.stringify(scrapedData);

//   // storing scrapedDataJSON in a database via an API call...
// }

// export default App();
