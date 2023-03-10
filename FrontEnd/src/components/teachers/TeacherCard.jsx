import React, { Fragment } from 'react';
import "./ProductCard.css";
import { Link } from 'react-router-dom';


const TeachersCard = ({ data }) => {
    // const {data}=props




    return (
        <Fragment>
            <a>
                <div className="ProductCardContainer text-dark">
                    <img className='cardImage' src={data.img} alt="roto" />
                    <div className='ProductInfo'>
                        <h1>{data.name}</h1>
                        <p className='text-sm text-left p-0'>{data.dagignation}</p>
                        <p className='text-sm text-left p-0'>{data.phone}</p>
                        <p className='text-sm text-left p-0'>
                            <a href={`/email/${data.email}`}>{data.email}</a>
                        </p>
                    </div>
                </div>

            </a>

        </Fragment>
    )
}

export default Object.assign(TeachersCard, {});
