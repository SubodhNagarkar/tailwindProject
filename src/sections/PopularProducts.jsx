import React from 'react';
import {products} from '../constants';
import PopularProductCard from '../components/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id='products'
    className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
          <h1 className='text-4xl font-palanquin
          font-bold'>Our 
          <span className='text-coral-red'> Popular </span> Products</h1>
          <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Exprience top-notch quality
             and style with our sought-after 
             selection. Discover a world of selections. Discover 
             a world of comfort ,design, and value
          </p>
      </div>
      <div className=' flex mt-16 lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
            <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
