import { apiService } from "./api.service";

class ShowtimeService {
  createShowtime = (data) =>
    apiService.post(`api/QuanLyDatVe/TaoLichChieu`, data);

  getShowtimeByCinemaSystem = (cinemaSystemID, groupID) =>
    apiService.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap` +
        `?maHeThongRap=${cinemaSystemID}` +
        `&maNhom=${groupID}`
    );

  getShowtimeByMovie = (movieID) =>
    apiService.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieID}`);

  getShowtimeInfo = (showtimeID) =>
    apiService.get(
      `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showtimeID}`
    );

  bookingTicket = (data) => apiService.post(`api/QuanLyDatVe/DatVe`, data);
}

export const showtimeService = new ShowtimeService();
