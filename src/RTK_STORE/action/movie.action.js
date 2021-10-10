import { createAsyncThunk } from "@reduxjs/toolkit";
import { GROUP_ID } from "../../core/global/constant";
import { movieService } from "../../core/service/movie.service";

export const getMovieList = createAsyncThunk(
  "movie/getMovieList",
  async (groupID = GROUP_ID) => {
    const response = await movieService.getMovieList(groupID);
    return response.data;
  }
);

export const getMovieDetail = createAsyncThunk(
  "movie/getMovieDetail",
  async (movieID) => {
    const response = await movieService.getMovieDetail(movieID);
    return response.data;
  }
);

export const getMovieListPagination = createAsyncThunk(
  "movie/getMovieListPagination",
  async ({ groupID = GROUP_ID, pageNumber, itemPerPageNumber }) => {
    const response = await movieService.getMovieListPagination(
      groupID,
      pageNumber,
      itemPerPageNumber
    );
    return response.data;
  }
);
