import axios from "axios";
import { DOMAIN } from "../global/constant";
import { TOKEN } from "./user.service";

class ShowtimeService {
  createShowtime = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data
    });
  };
  getShowtimeByCinemaSystem = (maHeThongRap, maNhom) =>
    axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`,
      method: "GET"
    });
  getShowtimeByMovie = (maPhim) =>
    axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET"
    });
  getShowtimeInfo = (maLichChieu) =>
    axios({
      url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET"
    });
  bookingTicket = (data) =>
    axios({
      url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data
    });
}

export const showtimeService = new ShowtimeService();
