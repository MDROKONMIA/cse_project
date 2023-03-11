import React from 'react'
import { MizanSir } from "../TeachersPhoto/TeacherchPhoto"
import Teachers from './teachers/Teachers'



const HomePage = () => {

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
            <p className='text-justify'> Welcome to the department of <span className='text-primary_bg'>Computer Science & Engineering</span>,
              Begum Rokeya University, Rangpur. The Department of Computer Science and Engineering was
              established on 12 October, 2008. It is one of the founding department among six, Begum Rokeya University,
              Rangpur started its journey with. Since the beginning of its establishment, the department has been able to
              attract the very best students who secure topmost merit positions in the undergraduate admission test every year.
              In the last eight years, CSE, BRUR prepared some talented graduates and they
              are playing important role both in the academic sector and industry. The department is conducting
              its activities with the motto to prepare future technology leaders and innovators of the country as well as
              throughout the globe in the domain of Computer Science and Engineering.
            </p>

          </div>
        </div>
      </div>

      <Teachers />

    </>
  )
}

export default  HomePage