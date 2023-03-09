import React from 'react'
import { MizanSir, SobujSir, SonjoySir, AzadSir, ZasimUddinSir, FaridSir, MarjiaSultanaMam, ProdipSir, IliasPramanikSir } from '../TeachersPhoto/TeacherchPhoto'
import ProductCard from './teachers/HomePageTeacher';

// const cheerio = require('cheerio')


const Banner = () => {

  // await fetch('https://www.npmjs.com/package/puppeteer').then(res=>res.json());



  const teachers = [
    { name: "Prof.Dr. Abu Kalam Md. Farid Ul Islam", dagignation: "Professor  ", phone: "01712135849", email: "farid_ru@yahoo.com", url: FaridSir },
    { name: "Dr. Md. Mizanur Rahoma", dagignation: "Professor", phone: "01738240159", email: "miarokon2001@gmail.com", url: MizanSir },
    { name: "Dr. Md. Zasim Uddin", dagignation: "Associate Professor", phone: "+8801302947535", email: "zasim@brur.ac.bd", url: ZasimUddinSir },
    { name: "Dr. Md. Ileas Pramanik", dagignation: "Associate Professor", phone: "01762929641", email: "ileas@gmail.com", url: IliasPramanikSir },
    { name: "Prodip Kumar Sarkar", dagignation: "Associate Professor", phone: "01719865262", email: "prodip@brur.ac.bd", url: ProdipSir },
    { name: "Md. Shamsuzzaman", dagignation: "Assistant Professor", phone: "+8801717467709", email: "szaman_409@yahoo.com", url: SobujSir },
    {
      name: "Md. Abul Kalam Azad (On Study Leave)", dagignation: "Assistant Professor", phone: "+8801710504692", email: "akazadth@gmail.com", url: AzadSir
    },
    { name: "Sanjoy Kumar Saha (On Study Leave)", dagignation: "Assistant Professor", phone: "+8801915139510", email: "sanjoy@brur.ac.bd", url: SonjoySir },
    { name: "Marzia Sultana", dagignation: "Lecturer", phone: "+8801763676302", email: "marjia.brur.cse@gmail.com", url: MarjiaSultanaMam },
  ]

  return (
    <>
      <div className='banner w-full '>
        {/* <img src={banner} width={"100%"} height={"200px"}/> */}
        <p className='wedding font-serif text-white'>Well Come</p>
      </div>

      <div className='container'>
        <div className='flex mt-2 items-center'>
          <div className='w-2/5 text-center'>
            <img className="m-auto" src={MizanSir} />
          </div>
          <div className='w-3/5'>
            <h1 className='text-6xl font-extrabold text-blue-800'>Head of the Department</h1>
            <h2 className='text-3xl font-bold my-1'>Dr. Md. Mizanur Rahoman</h2>
            <p className='text-gray-600 text-xl'>Professor</p>
            <br />
            <p className='text-justify'> Well come to our <span className='uppercase text-blue-700 font-bold'>cse</span> familly. We are proude to our hounarable teacher wo are hardly work for students. I also proud for my students
              for that they are learn and servey for county. In our department can admit 45 students each yera thought universities policies.
            </p>
          </div>
        </div>
      </div>

      <div className='container  items-center justify-center mt-10'>
        <h1 className='text-6xl text-center mb-2 border-b-2 border-black'>Teachers</h1>
        <div className='flex flex-wrap items-center m-auto justify-center'>
          {teachers.length > 0 ? teachers.map(data => (<ProductCard data={data} />)) : ""}
        </div>

      </div>

    </>
  )
}

export default Banner