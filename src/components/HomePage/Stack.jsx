import React from '../../images/react.svg';
import Redux from '../../images/redux.svg';
import Tailwind from '../../images/tailwindcss.svg'

const Stack = () => {
  return (
    <>
        <p className='text-2xl font-medium'>Stack:</p>
        <ul className='list-disc pl-10 text-xl my-3'>
            <li className='flex my-2'><img className='w-8 h-8 mr-2' src={React} alt="React" /> React</li>
            <li className='flex my-2'><img className='w-8 h-8 mr-2' src={Redux} alt="Redux" /> Redux-toolkit</li>
            <li className='flex my-2'><img className='w-8 h-8 mr-2' src={Redux} alt="Redux" /> RTK Query</li>
            <li className='flex my-2'><img className='w-8 h-8 mr-2' src={Tailwind} alt="Tailwind" /> Tailwind CSS</li>            
        </ul>
    </>
  )
}

export default Stack;