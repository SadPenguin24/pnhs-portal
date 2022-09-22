import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import { userApi } from './userApi';

const BASE_URL = 'http://localhost:3333/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      { status: string; message: string },
      typeof RegisterScreen
    >({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<
      { access_token: string; status: string },
      unknown
    >({
      query(data) {
        return {
          url: `auth/login`,
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.log('Query Login Error: ', error);
        }
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
