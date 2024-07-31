import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./operations";

const initialState = {
  contacts: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
  },
});

export const contactsSlice = slice.reducer;
