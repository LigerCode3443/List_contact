import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/slice";

export const store = configureStore({ reducer: contactsSlice });
