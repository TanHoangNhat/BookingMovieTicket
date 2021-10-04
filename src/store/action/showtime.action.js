import { GROUP_ID } from "../../core/global/constant";
import { showtimeService } from "../../core/service/showtime.service";
import {
  GET_SHOWTIME_INFO,
  GET_SHOWTIME_LIST_BY_GROUP,
  GET_SHOWTIME_LIST_BY_MOVIE,
  GET_SHOWTIME_LIST_BY_SYSTEM,
  SET_SELECT_CHAIR,
  SET_SHOWTIME_DETAIL
} from "../constant/showtime.constant";
import { startLoadingAction, stopLoadingAction } from "./common.action";

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

export const getShowtimeByCinemaSystemAction = (cinemaSystemID) => {
  return async (dispatch) => {
    try {
      const response = await showtimeService.getShowtimeByCinemaSystem(
        cinemaSystemID,
        GROUP_ID
      );
      dispatch({
        type: GET_SHOWTIME_LIST_BY_SYSTEM,
        payload: response.data[0]
      });
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

export const getShowtimeByMovieAction = (movieID) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const response = await showtimeService.getShowtimeByMovie(movieID);
      dispatch({
        type: GET_SHOWTIME_LIST_BY_MOVIE,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
    setTimeout(() => {
      dispatch(stopLoadingAction());
    }, 1000);
  };
};

export const getShowtimeInfoAction = (showtimeID) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const response = await showtimeService.getShowtimeInfo(showtimeID);
      dispatch({
        type: GET_SHOWTIME_INFO,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
    setTimeout(() => {
      dispatch(stopLoadingAction());
    }, 1000);
  };
};

export const setSelectChairAction = (chairID) => {
  return {
    type: SET_SELECT_CHAIR,
    payload: chairID
  };
};

export const bookingTicketAction = (maLichChieu, danhSachVe) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const taiKhoanNguoiDung = JSON.parse(localStorage.getItem("taiKhoan"));
      const data = {
        maLichChieu,
        taiKhoanNguoiDung,
        danhSachVe
      };
      return await showtimeService.bookingTicket(data);
    } catch (error) {
      return error.response;
    }
  };
};
