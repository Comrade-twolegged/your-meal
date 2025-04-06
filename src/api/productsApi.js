import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://67ebcd3eaa794fb3222bad3e.mockapi.io/api/icon/",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "product",
        }),
    }),
});

export const { useGetProductsQuery  } = productsApi;
