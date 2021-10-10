// import {
//   GET_MOVIE_DETAIL,
//   GET_MOVIE_LIST,
//   GET_MOVIE_LIST_PAGINATION,
//   SET_MOVIE_DETAIL
// } from "../constant/movie.constant";
// const initailState = {
//   movieList: [],
//   movieListPagination: [],
//   totalPages: 0,
//   movieDetail: {}
// };

// export const MovieReducer = (state = initailState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case GET_MOVIE_LIST: {
//       state.movieList = payload;
//       return { ...state };
//     }
//     case GET_MOVIE_DETAIL: {
//       state.movieDetail = payload;
//       return { ...state };
//     }
//     case GET_MOVIE_LIST_PAGINATION: {
//       state.movieListPagination = [...payload.items];
//       state.totalPages = payload.totalPages;
//       return { ...state };
//     }
//     case SET_MOVIE_DETAIL: {
//       return { ...state, movieDetail: payload };
//     }
//     default: {
//       return state;
//     }
//   }
// };
