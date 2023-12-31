import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.escuelajs.co/api/v1'}),
    tagTypes:['category'],
    endpoints:builder=>({})
})