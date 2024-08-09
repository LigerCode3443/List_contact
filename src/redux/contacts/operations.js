import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";
const corsProxy = "https://cors-anywhere.herokuapp.com/";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contacts";
      const response = await axios.get(`${corsProxy}${apiUrl}`, {
        params: {
          sort: "created:desc",
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getContactInfo = createAsyncThunk(
  "contact/getContact",
  async (id, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contact";
      const response = await axios.get(`${corsProxy}${apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      return data.resources[0];
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, { dispatch }, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contact";
      const response = await axios.delete(`${corsProxy}${apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(getContacts());
      const data = response.data;

      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (contact, { dispatch }, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contact";
      const response = await axios.post(`${corsProxy}${apiUrl}`, contact, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(getContacts());
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const addTag = createAsyncThunk(
  "contact/addTag",
  async (id, tag, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contacts";

      const response = await axios.put(
        `${corsProxy}${apiUrl}/${id}/tags`,
        { tags: [tag] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
