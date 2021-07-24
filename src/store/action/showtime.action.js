import { showtimeService } from "../../core/service/showtime.service";
import { SET_SHOWTIME_DETAIL } from "../constant/showtime.constant";

export const createShowtimeAction = (showtime) => {
  return async () => {
    try {
      console.log(showtime);
      return await showtimeService.createShowtime(showtime);
    } catch (error) {
      return error.response;
    }
  };
};

export const setShowtimeDetailAction = (payload) => {
  return {
    type: SET_SHOWTIME_DETAIL,
    payload
  };
};
