import React from 'react'

const SignIn = ( {onSubmit} ) => {
  return (
    <div className='max-w-lg m-auto mt-24 mb-4 p-2 bg-[#0e101c] rounded-md'>
        <h1 className='text-2xl text-white font-bold text-center py-2'>Login</h1>
        <form className='flex flex-col max-w-md m-auto' onSubmit={onSubmit}>
            <label className='text-sm text-white font-light my-4'>Login</label>
            <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='Login'
                    type="text"
                    name='login'                    
            />                
            <label className='text-sm text-white font-light my-4'>Password</label>
            <input
                    className='text-sm mb-2 py-2 px-4 rounded-[4px]'
                    placeholder='Password'
                    type="text"
                    name='password'                    
            />
            <input className='bg-[#61dafb] text-white uppercase tracking-[10px] mt-10 p-3 hover:bg-[#bf1650] rounded-[4px] disabled:opacity-40 active:opacity-80' type="submit" />                
        </form>
    </div>
  )
}

export default SignIn;