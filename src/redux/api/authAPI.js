import { fakeStoreAPI } from "./API";

const authAPI = fakeStoreAPI
.enhanceEndpoints({addTagTypes: ["user"]})
.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: ({username, password}) => ({
                url: 'auth/login',
                method: "POST",
                body: {username, password}
            }),
            invalidatesTags: ["user"]
        })
    })
})

export const { useUserLoginMutation } = authAPI
export default authAPI
