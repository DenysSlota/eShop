import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsInCart: []
    },
    reducers: {        
        setProductsInCart: (state, action) => {
            const exist = state.productsInCart.find((x)=> x.id === action.payload.id);
            if(exist){                
                state.productsInCart.map((x)=>
                x.id === action.payload.id ? {...x, qty: x.qty++} : x
                );
            }else{                
                state.productsInCart.push({...action.payload, qty: 1})
            }            
        },
        deleteProductsFromCart: (state, action) => {
            if(action.payload.qty === 1){
                state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload.id);
            }else{
                state.productsInCart.map((x)=>
                    x.id === action.payload.id ? {...x, qty: x.qty--} : x
                );
            }
            // state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload)
        }
    }
});

export const { setProductsInCart, deleteProductsFromCart } = cartSlice.actions;
export default cartSlice.reducer;