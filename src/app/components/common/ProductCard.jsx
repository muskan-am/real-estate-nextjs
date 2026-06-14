import React from 'react'

const ProductCard = () => {
  return (
    <figure className='bg-white rounded-lg shadow-md p-4'>
       <img src="https://img.freepik.com/premium-photo/building-with-word-hotel-top_878402-2651.jpg?w=740" alt="" />
       <h3 className='text-2xl py-3'>Product1</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti?</p>
       <button className='bg-brand text-white px-4 py-2 rounded'>Read More</button>
    </figure>
  )
}

export default ProductCard
