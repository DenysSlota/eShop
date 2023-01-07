import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi ({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => 'products',
        }),
        getSingleProducts: build.query({
            query: (id) => `/products/${id}`,            
        }),              
    })
});

export const { useGetProductsQuery, useGetSingleProductsQuery } = productsApi;