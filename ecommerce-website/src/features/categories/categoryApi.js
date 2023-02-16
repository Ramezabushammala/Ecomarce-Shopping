
// generating selectors for regular state with rtk query

//generates a selecotr for the result of getUsers 
// export const selectUsersResult = apiSlice.endpoints.getUsers.select()

// const emptyUsers = []

// export const selectAllUsers = createSelector(
//   selectUsersResult,
//   usersResult => usersResult?.data ?? emptyUsers
// )

// export const selectUserById = createSelector(
//   selectAllUsers,
//   (state, userId) => userId,
//   (users, userId) => users.find(user => user.id === userId)
// )
////////////////////////////////

import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

const categoriesAdapter = createEntityAdapter()

const initialState = categoriesAdapter.getInitialState()

export const extendedCategoryApi=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getCategories: builder.query({
            query:()=>'/categories',
            transformResponse: result =>{
                return categoriesAdapter.setAll(initialState,result.slice(0,5))
            }
        }),
    })
})

export const selectCategoryResult=extendedCategoryApi.endpoints.getCategories.select()

// in order to access the normalized data and generate selectors using them
const selectCategoryData=createSelector(
    selectCategoryResult,
    categoriesResult=>categoriesResult.data
)


export const {useGetCategoriesQuery}=extendedCategoryApi

export const{selectAll:selectAllCategories,selectById:selectCategoryById}=categoriesAdapter.getSelectors(state=>selectCategoryData(state) ?? initialState)
////////////////////////////////////////
