// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const token = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";
// export const getContacts = createAsyncThunk(
//   "getContacts",
//   async (_, thunkApi) => {
//     try {
//       const { data } = await axios.get(
//         "https://app.nimble.com/api/v1/contacts",
//         {
//           params: {
//             sort: "created:desc",
//           },
//           headers: {
//             apikey: "YOUR_API_KEY",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(data);
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const getContacts = createAsyncThunk(
//   "contacts/getContacts",
//   async (_, thunkApi) => {
//     try {
//       const { data } = await axios.get("/api/v1/contacts ", {
//         params: {
//           sort: "created:desc",
//         },
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//           "Cache-Control": "no-cache",
//           Pragma: "no-cache",
//           "If-Modified-Since": "0",
//           "If-None-Match": "",
//         },
//       });
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
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
      console.log(data);
      return data.resources[0];
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contact";
      const response = await axios.delete(`${corsProxy}${apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      console.log(data);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// const contact = {
//   id: nanoid(),
//   avatar_url:
//     "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
//   record_type: "person",
//   privacy: {
//     edit: null,
//     read: null,
//   },
//   tags: "string",
//   owner_id: null,
//   fields: {
//     email: [{ value: "maryk_vova@gmail.com", modifier: "", label: "email" }],
//     "last name": [{ value: "maryk", modifier: "", label: "last name" }],
//     "first name": [{ value: "vova", modifier: "", label: "first name" }],
//   },
// };
export const addContact = createAsyncThunk(
  "contact/addContact",
  async (contact, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contact";
      const response = await axios.post(`${corsProxy}${apiUrl}`, contact, {
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
export const addTag = createAsyncThunk(
  "contact/addTag",
  async (id, tag, thunkApi) => {
    try {
      const apiUrl = "https://live.devnimble.com/api/v1/contact";

      const response = await axios.put(
        `${corsProxy}${apiUrl}/${id}/tags`,
        tag,
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
