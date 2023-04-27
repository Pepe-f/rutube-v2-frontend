import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { IUser } from '@/types/user.interface'

import { RootState } from '@/store/store'

import { API_URL } from '../../api/api'

export const apiRtk = createApi({
  reducerPath: 'api',
  tagTypes: ['Video', 'Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  endpoints: builder => ({
    getProfile: builder.query<IUser, any>({
      query: () => '/user/profile',
      providesTags: () => [{ type: 'Profile' }]
    })
  })
})
