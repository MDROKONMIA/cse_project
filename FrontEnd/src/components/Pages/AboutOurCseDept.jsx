import React from 'react'
import { Link } from 'react-router-dom'
import { cseLogo } from '../../logo'
import { universityLink } from '../AllSocialLinks'

const AboutOurCseDept = () => {
  return (
    <div className='container'>
      <h2></h2>
      <div className='lg:flex mb-2'>
        <div className='w-full lg:w-1/5 bg-black flex'>
          <img src={cseLogo} />
        </div>
        <div className='w-full lg:w-4/5  border-l-gray-700 border-l-2'>
         <div className='pl-2 '>
            <p className='text-justify  text-gray-800'>Computer Science and Engineering is one of the most top level Department in <Link to={universityLink}>
              Begume Rokeya University, Rangpur. </Link> Department has 9 teachers and a 9 office staff. 2 teachers on study leav between them. In every year 45 student can admited in this department thorugh university polici.
              Current students of the department is 300. In cse  every student of his study within 4 years though 8 semister. This department has 4 class rooms, 4 computar lab, one virtual class room, one seminar room, and
              every teacher has one personal room that are used for academic parpose.</p><br />
            <p className='text-justify text-gray-800'>This department laying into Faculty of engineering and technology. This department situtated in 2nd Floor on  academic building #2 at the university campus. The virtual calssroom of university in this department.
            </p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default AboutOurCseDept