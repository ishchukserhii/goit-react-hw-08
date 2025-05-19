
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6826f82a397e48c913180070.mockapi.io'

axios.defaults.baseURL = BASE_URL;

const createThunk = (action, fetchData) => {
  return createAsyncThunk(action, async (body, thunkAPI) => {
    try {
      const response = await fetchData(body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
};

export const fetchContacts = createThunk('contacts/fetchAll', async () =>
  axios.get('/contacts')
);

export const addContact = createThunk('contacts/addContact', async (contact) =>
  axios.post('/contacts', contact)
);

export const deleteContact = createThunk(
  'contacts/deleteContact',
  async (contactId) => axios.delete(`/contacts/${contactId}`)
);