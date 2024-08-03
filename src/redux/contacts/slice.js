import { createSlice } from "@reduxjs/toolkit";
import { addContact, getContactInfo, getContacts } from "./operations";

const initialState = {
  contacts: [],
  contactInfo: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(getContactInfo.fulfilled, (state, action) => {
        state.contactInfo = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      });
  },
});

export const contactsSlice = slice.reducer;
