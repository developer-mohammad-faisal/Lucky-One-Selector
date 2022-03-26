import React from 'react';
import './CardDetails.css'

const CardDetails = ({image, name, productDetails}) => {


  return (
    <div>

        <div className='details'>
        <img src={image} alt="" />
        <p> {name} </p>
          <i className="bi bi-trash-fill icon"></i>
          
        </div>
        <h1>{productDetails}</h1>
    </div>
  );
};

export default CardDetails;