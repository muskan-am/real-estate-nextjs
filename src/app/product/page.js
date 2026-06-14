import React from 'react'

import ProductCard from '../components/common/ProductCard'
const Product = () => {
  return (
    <div>
      <h1 className='text-3xl py-10 text-center'>Product</h1>
      <div className='max-w-[1320px] mx-auto mt-10'>
        <div className='grid grid-cols-4 gap-4'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default Product
