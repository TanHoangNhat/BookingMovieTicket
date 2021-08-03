import {
  GET_SHOWTIME_LIST_BY_GROUP,
  GET_SHOWTIME_LIST_BY_MOVIE,
  GET_SHOWTIME_LIST_BY_SYSTEM,
  SET_SHOWTIME_DETAIL
} from "../constant/showtime.constant";

const initialState = {
  showtimeDetail: {},
  showtimeListBySystem: {},
  showtimeListByGroup: {},
  showtimeListByMovie: []
};

export const ShowtimeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOWTIME_DETAIL:
      return { ...state, showtimeDetail: payload };
    case GET_SHOWTIME_LIST_BY_SYSTEM:
      return { ...state, showtimeListBySystem: payload };
    case GET_SHOWTIME_LIST_BY_GROUP:
      const list = state.showtimeListBySystem.lstCumRap.find(
        (g) => g.maCumRap === payload
      );
      console.log(list);
      return { ...state, showtimeListByGroup: { ...list } };
    case GET_SHOWTIME_LIST_BY_MOVIE:
      return { ...state, showtimeListByMovie: payload };
    default:
      return state;
  }
};
