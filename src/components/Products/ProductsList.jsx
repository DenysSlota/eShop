import { Link } from "react-router-dom";

const ProductsList = ({ filter} ) => {
  return (
    <div className='p-4 flex flex-wrap gap-4 justify-around'>           
        {filter.map((product) => {
            return (                                        
                <div className='flex flex-col items-center text-center border-4 border-black rounded-xl dark:border-gray-300 dark:border-2 p-4 w-[300px] min-h-[300px] hover:scale-105 duration-200' key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img className='object-cover max-w-[250px] h-[250px]' src={product.image} alt={product.title} />                        
                            <h5 className='text-center m-0 mt-2 text-xl dark:text-white'>{product.title.substring(0,12)}...</h5>
                            <p className='m-0 text-base font-bold dark:text-white'>${product.price}</p>
                        </Link>
                        <button>Add cart</button>                        
                </div>                    
            );
        })}
    </div> 
  )
}

export default ProductsList;