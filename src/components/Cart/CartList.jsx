import { Link } from 'react-router-dom';
import AddBtn from '../../UI/Button/AddBtn';
import DeleteBtn from '../../UI/Button/DeleteBtn';

const CartList = ( {products, onAddClick, onDelClick} ) => {
  return (
    <>
        {products.map((product) => {
                      return (
                        <div className="flex flex-wrap justify-center sm:justify-between border-2 border-gray rounded-xl my-5" key={product.id}>
                            <div className="m-3 hover:scale-125 duration-500">
                              <Link to={`/products/${product.id}`}>
                                <img className='object-cover max-w-[150px] h-[150px]' src={product.image} alt={product.title} />
                              </Link>
                            </div>
                            <div className="flex flex-col justify-center items-center text-lg sm:text-xl font-medium dark:text-white m-5">
                                <h3>{product.title.substring(0,21)}</h3>
                                <p >
                                    {product.qty} X {product.price}$ = {(product.qty * product.price).toFixed(2)}$
                                </p>
                            </div>
                            <div className="flex items-center">
                                <AddBtn onClick={()=> onAddClick(product)} />
                                <DeleteBtn onClick={()=> onDelClick(product)} />
                            </div>
                      </div>
                    )
                  })}
    </>
  )
}

export default CartList;