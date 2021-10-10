import { createSlice } from "@reduxjs/toolkit";
import {
  getMovieDetail,
  getMovieList,
  getMovieListPagination
} from "../action/movie.action";

const initialState = {
  movieList: [],
  movieListPagination: [],
  totalPages: 0,
  movieDetail: {}
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    }
  },
  extraReducers: {
    [getMovieList.fulfilled]: (state, action) => {
      state.movieList = action.payload;
    },
    [getMovieList.rejected]: (state, action) => {
      console.log(action.error);
    },
    [getMovieDetail.fulfilled]: (state, action) => {
      state.movieDetail = action.payload;
    },
    [getMovieListPagination.fulfilled]: (state, action) => {
      state.movieListPagination = action.payload.items;
      state.totalPages = action.payload.totalPages;
    }
  }
});

export const { setMovieDetail } = movieSlice.actions;
export const { reducer: MovieReducer } = movieSlice;
