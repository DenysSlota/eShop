import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductsFromCart, setProductsInCart } from "../redux/cart/reducer";
import CartList from "../components/Cart/CartList";
import CheckBtn from "../UI/Button/CheckBtn";

const CartPage = () => {
    const [total, setTotal] = useState(0);
    const products = useSelector(state => state.cart.productsInCart);
    const dispatch = useDispatch();
    
    const handleAddClick = (product) => {      
      dispatch(setProductsInCart(product));        
    }

    const handleDelClick = (product) => {      
      dispatch(deleteProductsFromCart(product));     
    }

    function totalSum (products) {
      let sum = 0;      
      products.map((product) => {
        return (
        sum += product.qty * product.price
        )
      })           
      return sum.toFixed(2);
    }
    
    useEffect(() => {
      setTotal(totalSum(products));   
    }, [products])
    
      return (
          <>
            {products.length > 0 ?
                <div className="p-4 mt-[85px] my-5">
                  <h1 className='text-center text-xl sm:text-2xl font-bold dark:text-white'>Sum total: {total} $</h1>
                  <div className="container mx-auto py-4">
                    <CartList products={products} onAddClick={handleAddClick}  onDelClick={handleDelClick} />
                    <CheckBtn />
                  </div>                
                </div>
            : <h1 className="mt-32 py-32 text-3xl font-bold text-center">Cart is empty</h1>
            }
          </>
      )
    
}

export default CartPage