export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;




export const selectIsRefreshing = (state) => state.contacts.isRefreshing;

export const selectLoading = (state) => state.contacts.isLoading;

export const selectFilter = (state) => state.contacts.filter;

export const selectAllContacts = (state) => state.contacts.items;

// export const selectContacts = (state) => state.contacts.items;

// export const selectError = (state) => state.contacts.error;

import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectAllContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);