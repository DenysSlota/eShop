
const CategoryBtn = ( {text, onClick} ) => {
  return (
    <>
        <button className='mx-3 my-2 py-1 px-5 text-xl font-medium border-2 rounded-xl hover:bg-gray-200 dark:hover:text-[#61dafb] dark:text-white transition' onClick={onClick}>{text}</button>
    </>
  )
}

export default CategoryBtn;