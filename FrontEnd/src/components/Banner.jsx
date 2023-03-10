import React from 'react'
import {MizanSir} from "../TeachersPhoto/TeacherchPhoto"
import Teachers from './teachers/Teachers'



const Banner = () => {

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

     <Teachers/>

    </>
  )
}

export default Banner