import { useState } from 'react';
import { useGetProductsQuery } from '../redux/productsApi';
import ProductsList from '../components/Products/ProductsList';
import Input from '../UI/Input/Input';

const SearchPage = () => {
    const {data = [], isLoading} = useGetProductsQuery();
    const [searchValue, setSearchValue] = useState();
    const [filter, setFilter] = useState([]);

    if(isLoading) return <h3>Loading...</h3>

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);        
        const updatedList = data.filter((x)=>             
            x.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilter(updatedList);        
    }
    
  return (
    <div className="p-4 mt-[85px] my-5">
        <Input value={searchValue} onChange={onChangeSearchValue} type={'text'} placeholder={'search...'} />
        <ProductsList filter={filter} />
    </div>
  )
}

export default SearchPage;