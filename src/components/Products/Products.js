import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardDetails from '../CardDetails/CardDetails';

const Products = () => {

  // state and fetch products
  const [products, setProducts] = useState([]);
  useEffect( () => {

    fetch('fakedata/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))

  } , [])

  // btn state
  const [carts, setCarts] = useState([])
  console.log(carts);
  const cartDetails = (items) => {
    let newCart = [...carts, items]
    if(newCart.length > 4){
      alert('warring')
    }
    else{

      setCarts(newCart)
    }
  }

  const removeItems = (items) => {
    let newCart = [...carts, items]
    newCart = []
    setCarts(newCart)
  }


  return (
  
    <div className='row w-100 mt-5'>
    <div className='col-md-9 '>
    <div className='row row-cols-md-1 row-cols-md-3'>
            {
               products.map(product => <Card key={product.id} carts={carts} cartDetails={cartDetails} product={product} ></Card>)
             }
   </div> 
    </div>

    <div className='col-md-3 bg-info'> 
      <h5 className='text-center my-4'>Laptop Details</h5>
      {
        carts.map(cart => <CardDetails key={cart.id}  image={cart.img} name={cart.name} ></CardDetails>)
      }

      <div>
      <button className='btn btn-primary text-white border-0'>Product Details</button>
      </div>
      <div>
      <button onClick={removeItems} className='btn btn-danger my-2 text-white border-0'>Remove Items</button>
      </div>

    </div>
</div>

  );
};

export default Products;