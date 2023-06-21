import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { apiUrl } from './Constanst/links';
import { setAvailableHotels } from '../store/slices/available.slice';

export const availableHot = createApi({
  reducerPath: 'availableHotels',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}`,
  }),
  endpoints: (builder) => ({
    availableHot: builder.mutation({
      query: ({ formState, adults, rooms, childrenAge, dateFrom, dateTo }) => ({
        url: `?search=${formState}&adults=${adults}&rooms=${rooms}&children=${childrenAge}&dateFrom=${dateFrom}&dateTo=${dateTo}`,
        method: 'GET',
      }),

      onQueryStarted: async (args, api) => {
        try {
          const { data } = await api.queryFulfilled.then((res) => res);
          return data;
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  }),
});

export const { useAvailableHotMutation } = availableHot;
