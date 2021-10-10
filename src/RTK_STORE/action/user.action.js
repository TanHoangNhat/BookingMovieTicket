import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../core/service/user.service";
import { GROUP_ID } from "../../core/global/constant";

export const getUserListPagination = createAsyncThunk(
  "user/getUserListPagination",
  async ({ groupID = GROUP_ID, pageNumber = "1", itemPerPageNumber = "5" }) => {
    const response = await userService.getUserListPagination(
      groupID,
      pageNumber,
      itemPerPageNumber
    );
    return response.data;
  }
);

export const searchUserPagination = createAsyncThunk(
  "user/searchUserPagination",
  async ({
    groupID = GROUP_ID,
    searchString,
    pageNumber,
    itemPerPageNumber
  }) => {
    const response = await userService.searchUserPagination(
      searchString,
      groupID,
      pageNumber,
      itemPerPageNumber
    );
    return response.data;
  }
);
