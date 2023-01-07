import React from 'react'

const AddCartBtn = ( {onClick, text} ) => {
  return (
    <>
        <button className="w-40 h-14 bg-gray-400 rounded-xl hover:bg-[#61dafb]" onClick={onClick} >
            {text}
        </button>
    </>
  )
}

export default AddCartBtn;