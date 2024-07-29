import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, searchWord) => {
    console.log("Filtering Tasks");

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    );
  }
);
