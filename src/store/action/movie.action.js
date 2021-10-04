import {
  GET_MOVIE_LIST,
  GET_MOVIE_DETAIL,
  GET_MOVIE_LIST_PAGINATION,
  SET_MOVIE_DETAIL
} from "../constant/movie.constant";
import { movieService } from "../../core/service/movie.service";
import { GROUP_ID } from "../../core/global/constant";

export const addMovieAction = (movie) => {
  return async () => {
    try {
      return await movieService.addMovie(movie);
    } catch (error) {
      return error.response;
    }
  };
};

export const deleteMovieAction = (movieID) => {
  return async () => {
    try {
      return await movieService.deleteMovie(movieID);
    } catch (error) {
      return error.response;
    }
  };
};

export const updateMovieAction = (movie) => {
  return async () => {
    try {
      return await movieService.updateMovie(movie);
    } catch (error) {
      return error.response;
    }
  };
};

export const getMovieListAction = () => {
  return async (dispatch) => {
    try {
      const response = await movieService.getMovieList(GROUP_ID);
      dispatch({
        type: GET_MOVIE_LIST,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getMovieDetailAction = (movieID) => {
  return async (dispatch) => {
    try {
      const response = await movieService.getMovieDetail(movieID);
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieListPaginationAction = (
  groupID,
  pageNumber,
  itemPerPageNumber
) => {
  return async (dispatch) => {
    try {
      const response = await movieService.getMovieListPagination(
        groupID,
        pageNumber,
        itemPerPageNumber
      );
      dispatch({
        type: GET_MOVIE_LIST_PAGINATION,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setMovieDetailAction = (movie) => {
  return { type: SET_MOVIE_DETAIL, payload: movie };
};
