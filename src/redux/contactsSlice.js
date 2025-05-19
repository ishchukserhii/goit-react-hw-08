import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const initialState = { items: [], isLoading: false, error: null };

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const buildCase = (builder) => {
  const result = {
    addCase: (thunk, fn) => {
      return buildCase(
        builder
          .addCase(thunk.pending, handlePending)
          .addCase(thunk.fulfilled, (state, action) => {
            handleFulfilled(state);
            return fn(state, action);
          })
          .addCase(thunk.rejected, handleRejected)
      );
    },
  };
  return result;
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    buildCase(builder)
      .addCase(fetchContacts, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default slice.reducer;