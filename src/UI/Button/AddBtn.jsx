import React from 'react'

const AddBtn = ( {onClick} ) => {
  return (
    <>
        <button className="bg-gray-500 hover:bg-[#61dafb] h-8 w-8 rounded-full m-5 relative" onClick={onClick}>
            <span className="text-white text-2xl font-bold absolute -top-0.5 right-2">+</span>
        </button>
    </>
  )
}

export default AddBtn;