import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../slice/useSlice';

const BASE_URL = 'http://localhost:3333/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: 'profile',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Query Getme Data: ', data);
          dispatch(setUser(data));
        } catch (error) {
          console.log('Query Getme Error: ');
        }
      },
    }),
  }),
});
