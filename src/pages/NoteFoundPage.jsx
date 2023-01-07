import { Link } from 'react-router-dom'

const NoteFoundPage = () => {
  return (
    <div className="p-4 mt-24 my-5 text-center text-5xl font-bold dark:text-white">
        Page not found. Back to <Link className='hover:text-[#61dafb] font-medium' to='/'>home</Link>
    </div>
  )
}

export default NoteFoundPage;