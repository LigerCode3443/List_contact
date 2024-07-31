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

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const corsProxy = "https://cors-anywhere.herokuapp.com/";
      const apiUrl = "https://live.devnimble.com/api/v1/contacts";

      const response = await axios.get(`${corsProxy}${apiUrl}`, {
        params: {
          sort: "created:desc",
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
