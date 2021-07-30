import { showtimeService } from "../../core/service/showtime.service";
import {
  GET_SHOWTIME_LIST_BY_GROUP,
  GET_SHOWTIME_LIST_BY_SYSTEM,
  SET_SHOWTIME_DETAIL
} from "../constant/showtime.constant";

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

export const getShowtimeByCinemaSystemAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const response = await showtimeService.getShowtimeByCinemaSystem(
        maHeThongRap,
        "GP01"
      );
      dispatch({
        type: GET_SHOWTIME_LIST_BY_SYSTEM,
        payload: response.data[0]
      });
      // console.log(response.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getShowtimeByCinemaGroupAction = (payload) => {
  return {
    type: GET_SHOWTIME_LIST_BY_GROUP,
    payload
  };
};
