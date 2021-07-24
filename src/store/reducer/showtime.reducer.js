import { SET_SHOWTIME_DETAIL } from "../constant/showtime.constant";

const initialState = {
  showtimeDetail: {}
};

export const ShowtimeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOWTIME_DETAIL:
      return { ...state, showtimeDetail: payload };
    default:
      return state;
  }
};
