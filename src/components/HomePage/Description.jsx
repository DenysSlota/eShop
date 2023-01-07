import React from 'react'

const Description = () => {
  return (
    <div className=''>
        <p className='text-2xl font-medium'>This project 'eShop' implements the following functionality:</p>
        <ul className='list-disc pl-10 text-xl my-3'>
          <li>loading products on the page from <a className='text-gray-400  hover:underline' href=" https://fakestoreapi.com">fakestoreapi</a>
          </li>
          <li>sorting products by category</li>
          <li>card product</li>
          <li>name search</li>
          <li>adding products to the cart, increasing (decreasing) the quantity and total amount of the product</li>
          <li>theme change available</li>
          <li>implemented registration and authorization page (react-hook-form)</li>
          <li>fully adapted for mobile devices</li>          
        </ul>
    </div>
  )
}

export default Description;