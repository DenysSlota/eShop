import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useGetSingleProductsQuery } from '../redux/productsApi';
import { setProductsInCart, deleteProductsFromCart } from '../redux/cart/reducer';
import GoBackBtn from '../UI/Button/GoBackBtn';
import AddCartBtn from '../UI/Button/AddCartBtn';

const SingleProductsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();    
    const [isProductInCart, setIsProductInCart] = useState(false);    
    const { data = [], isLoading } = useGetSingleProductsQuery(id);
    
    if(isLoading) return <h3>Loading...</h3>;
    
    const goBack = () => navigate(-1);

    const handleAddClick = (e) => {
        e.stopPropagation();
        dispatch(setProductsInCart(data));
        setIsProductInCart(!isProductInCart);
    }

    const handleDelClick = (e) => {
        e.stopPropagation();
        dispatch(deleteProductsFromCart(data));
        setIsProductInCart(!isProductInCart);
    }

    
    return (
        <div className='w-full flex-col md:flex-row flex mt-[85px] justify-between px-10'>
            <div className="w-full md:w-2/4 m-3">
                <img className='object-cover w-3/4 m-3 ' src={data.image} alt={data.title} />
            </div>
            <div className="w-full md:w-2/4 m-3 p-2">
                <h4 className="uppercase text-4xl py-2 dark:text-white">
                        {data.category}
                </h4>
                <h1 className="text-center text-2xl font-bold m-2 dark:text-white">{data.title}</h1>
                <p className="text-xl text-gray-500 my-2">
                    Rating {data.rating && data.rating.rate}                       
                </p>
                <h3 className="text-2xl font-bold dark:text-white my-4">
                    $ {data.price}
                </h3>
                <p className="text-center text-xl my-2 dark:text-white">{data.description}</p>
                <div className='text-xl font-medium flex justify-center mt-7 gap-4'>
                    { isProductInCart ? 
                        <AddCartBtn onClick={handleDelClick} text={'Delete'} />
                        :
                        <AddCartBtn onClick={handleAddClick} text={'Add to Cart'} />                        
                    }
                    <NavLink to="/cart" className="w-40 h-14 text-center pt-3 bg-gray-400 rounded-xl hover:bg-[#61dafb]">
                        Go to Cart
                    </NavLink>
                </div>
                <GoBackBtn onClick={goBack} />
            </div>
        </div>
    )
}

export default SingleProductsPage;