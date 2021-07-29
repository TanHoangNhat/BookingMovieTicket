import {
  GET_CINEMA_GROUP_LIST,
  GET_CINEMA_LIST,
  GET_CINEMA_SYSTEM_LIST,
  GET_LIST_CHAIR,
  GET_LIST_CUM_RAP,
  GET_LIST_RAP
} from "../constant/cinema.constant";
import { api } from "../../core/service/api.service";
import { STATUS_CODE } from "../../core/global/constant";
import { cinemaService } from "../../core/service/cinema.service";

export const getListRap = () => {
  let url = "api/QuanLyRap/LayThongTinHeThongRap";
  let method = "GET";
  return async (dispatch) => {
    console.log("list rap");
    try {
      const { data, status } = await api.get(url, method);
      if (STATUS_CODE.SUCCESS === status) {
        dispatch({
          type: GET_LIST_RAP,
          payload: data
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getListCumRap = (maHeThongRap, maNhom) => {
  let url = `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`;
  let method = "GET";
  return async (dispatch) => {
    try {
      const res = await api.get(url, method);
      dispatch({
        type: GET_LIST_CUM_RAP,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getListChair = (id) => {
  let url = `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`;
  let method = "GET";
  return async (dispatch) => {
    try {
      const res = await api.get(url, method);
      dispatch({
        type: GET_LIST_CHAIR,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCinemaSystemListAction = () => {
  return async (dispatch) => {
    try {
      const response = await cinemaService.getCinemaSystemList();
      dispatch({
        type: GET_CINEMA_SYSTEM_LIST,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const BookingChair = (maLichChieu, danhSachVe) => {
  let url = "api/QuanLyDatVe/DatVe";
  let method = "POST";
  let taiKhoanNguoiDung = "maiquochuy";
  let ds = danhSachVe.map((ve) => ({ maGhe: ve.maGhe, giaVe: ve.giaVe }));
  let data = {
    maLichChieu: parseInt(maLichChieu),
    danhSachVe: ds,
    taiKhoanNguoiDung
  };
  console.log(data);
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWFpcXVvY2h1eSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IktoYWNoSGFuZyIsIm5iZiI6MTYyNjYxOTcxMCwiZXhwIjoxNjI2NjIzMzEwfQ.9JWvLSdjmi1iycAJ6UBd0csEyrbVfBuh5tHHaHJvLD8";
  return async (dispatch) => {
    try {
      const response = await api.post(url, method, data, token);
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };
};
export const getCinemaGroupListAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const response = await cinemaService.getCinemaGroupList(maHeThongRap);
      dispatch({
        type: GET_CINEMA_GROUP_LIST,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getCinemaListAction = (maCumRap) => {
  return {
    type: GET_CINEMA_LIST,
    payload: maCumRap
  };
};
