import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreAPI = createApi({
    reducerPath: 'fakeStoreAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: () => ({})
})