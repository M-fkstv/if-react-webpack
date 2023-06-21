import { authStatuses } from './authStatuses';

export const INITIAL_STATE = {
  auth: {
    status: authStatuses.loggedOut,
  },
  user: {
    email: null,
    password: null,
  },
  dateFrom: '',
  dateTo: '',
  availableHotels: [],
  theme: 'ligth',
  adults: 1,
  children: 0,
  rooms: 1,
  childrenAge: [],
};
