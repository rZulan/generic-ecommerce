import { fakeStoreAPI } from "./API";

const productsAPI = fakeStoreAPI
.enhanceEndpoints({addTagTypes:["products"]})
.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (params) => ({
                url: "/products",
                method: "GET",
                params
            }),
            providesTags: ["products"],
        })
    })
})

export const { useGetAllProductsQuery } = productsAPI