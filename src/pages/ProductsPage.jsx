import { useGetProductsQuery } from '../redux/productsApi';
import { useState } from "react";
import ProductsList from '../components/Products/ProductsList';
import CategoryBtn from '../UI/Button/CategoryBtn';

const ProductsPage = () => {    
    const {data = [], isLoading} = useGetProductsQuery();
    const [filter, setFilter] = useState(data);     
    
    if(isLoading) return <h3>Loading...</h3>

    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }
    
    return (
          <>
            <div className="flex justify-around flex-wrap md:justify-center mt-[85px] my-1 py-1">
                <CategoryBtn text={'All'} onClick={()=>setFilter(data)} />
                <CategoryBtn text={`Men's`} onClick={()=>filterProduct("men's clothing")} />
                <CategoryBtn text={`Women's`} onClick={()=>filterProduct("women's clothing")} />
                <CategoryBtn text={`Jewelery`} onClick={()=>filterProduct("jewelery")} />
                <CategoryBtn text={`Electronic`} onClick={()=>filterProduct("electronics")} />              
            </div>
            <ProductsList filter={filter} />
          </>
    );       
}

export default ProductsPage;