import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllNews } from '../../action/allAction';
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom';




const Notice = () => {
  const dispatch = useDispatch();

  const { data, error, loading, success } = useSelector(state => state.notice)
  console.log(data)

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getAllNews())
  }, [dispatch, error])
  return (
    <Fragment>
      {loading ? (<Loader />) : (<Fragment><div className='container'>
        <div className='row'>
          {data && <><div className='sm:block xl:w-1/5 lg:w-1/5 md-1/5 w-full' ></div>
            <div className='xl:w-4/5 lg:w-4/5 w-full'>
              <ul className=''>
                <li className='border-t-2 text-center  h-10 flex items-center'>
                  <div className='text-gray-800 h-8 pr-4 w-40'>Date</div>
                  <div className='space-y-1'>Notice</div>
                </li>
                {data ? data.map((el) => (
                  <li className='border-t-2  h-10 flex items-center'>
                    <div className='text-gray-800 h-8 pr-4 w-40'>{el.date}</div>
                    <Link target={"_blank"}to={el.url} className='space-y-1'>{el.title}</Link>
                  </li>
                )) : ""}
              </ul>
            </div></>}
        </div>
      </div></Fragment>)}
    </Fragment>
  )
}

export default Notice