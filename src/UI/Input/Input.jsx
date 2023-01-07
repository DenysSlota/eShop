import React from 'react'

const Input = ({ value, onChange, type, placeholder}) => {
  return (
    <>
        <input 
            className='flex border-2 border-gray-400 rounded-md mx-auto p-2 text-xl dark:bg-gray-800 dark:text-white'
            value={value} 
            onChange={onChange}
            type={type} 
            placeholder={placeholder} />
    </>
  )
}

export default Input;