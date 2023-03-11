import React, { Fragment, useEffect, useState } from 'react'
// import { MizanSir, SobujSir, SonjoySir, AzadSir, ZasimUddinSir, FaridSir, MarjiaSultanaMam, ProdipSir, IliasPramanikSir } from '../../TeachersPhoto/TeacherchPhoto'
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllTeachers } from '../../action/allAction';
import Loader from '../Layout/loader/Loader';
import TeacherCard from './TeacherCard';

const Teachers = () => {
    // const teachers1 = [
    //     { name: "Prof.Dr. Abu Kalam Md. Farid Ul Islam", dagignation: "Professor  ", phone: "01712135849", email: "farid_ru@yahoo.com", url: FaridSir },
    //     { name: "Dr. Md. Mizanur Rahoma", dagignation: "Professor", phone: "01738240159", email: "miarokon2001@gmail.com", url: MizanSir },
    //     { name: "Dr. Md. Zasim Uddin", dagignation: "Associate Professor", phone: "+8801302947535", email: "zasim@brur.ac.bd", url: ZasimUddinSir },
    //     { name: "Dr. Md. Ileas Pramanik", dagignation: "Associate Professor", phone: "01762929641", email: "ileas@gmail.com", url: IliasPramanikSir },
    //     { name: "Prodip Kumar Sarkar", dagignation: "Associate Professor", phone: "01719865262", email: "prodip@brur.ac.bd", url: ProdipSir },
    //     { name: "Md. Shamsuzzaman", dagignation: "Assistant Professor", phone: "+8801717467709", email: "szaman_409@yahoo.com", url: SobujSir },
    //     {
    //         name: "Md. Abul Kalam Azad (On Study Leave)", dagignation: "Assistant Professor", phone: "+8801710504692", email: "akazadth@gmail.com", url: AzadSir
    //     },
    //     { name: "Sanjoy Kumar Saha (On Study Leave)", dagignation: "Assistant Professor", phone: "+8801915139510", email: "sanjoy@brur.ac.bd", url: SonjoySir },
    //     { name: "Marzia Sultana", dagignation: "Lecturer", phone: "+8801763676302", email: "marjia.brur.cse@gmail.com", url: MarjiaSultanaMam },
    // ]
    const dispatch = useDispatch();

    const { error, data, success, loading } = useSelector(state => state.teachers);


    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }
        dispatch(getAllTeachers());
    }, [error])
    return (
        <Fragment>
            {loading==true && !data ? (<Loader />) : (<Fragment>
                <div className='container  items-center justify-center mt-10'>
                    <h1 className='text-6xl text-center mb-2 border-b-2 border-black'>Teachers</h1>
                    <div className='flex flex-wrap items-center m-auto justify-center'>
                        {data ? data.map(el => (<TeacherCard data={el} />)) : ""}
                    </div>

                </div></Fragment>)}
        </Fragment>
    )
}

export default Teachers