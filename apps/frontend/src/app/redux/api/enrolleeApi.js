import { apiSlice } from './apiSlice';

export const enrolleeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEnrollee: builder.mutation({
      query: (credentials) => ({
        url: '/enrollee/create',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useCreateEnrolleeMutation } = enrolleeApi;
