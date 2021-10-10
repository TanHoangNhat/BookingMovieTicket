import { createSlice } from "@reduxjs/toolkit";
import {
  getUserListPagination,
  searchUserPagination
} from "../action/user.action";

const initialState = {
  userListPagination: [],
  totalPages: 10,
  userDetail: {}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail: (state, { payload }) => {
      state.userDetail = payload;
    }
  },
  extraReducers: {
    [getUserListPagination.fulfilled]: (state, { payload }) => {
      state.userListPagination = payload.items;
      state.totalPages = payload.totalPages;
    },
    [searchUserPagination.fulfilled]: (state, { payload }) => {
      state.userListPagination = payload.items;
      state.totalPages = payload.totalPages;
    }
  }
});

export const { setUserDetail } = userSlice.actions;
export const { reducer: UserReducer } = userSlice;
