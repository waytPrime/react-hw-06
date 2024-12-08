import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const authTokenHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk(
  "Auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", user);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", user);
      console.log(data);
      authTokenHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/logout");
      authTokenHeader("");
      return data;
    } catch (error) {
      authTokenHeader("");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/getUser",
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      authTokenHeader(auth.token);

      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { auth } = thunkAPI.getState();
      return auth.token !== null;
    },
  }
);
