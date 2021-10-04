import { apiService } from "./api.service";

class CinemaService {
  getCinemaSystemList = () =>
    apiService.get("api/QuanLyRap/LayThongTinHeThongRap");

  getCinemaGroupList = (cinemaSystemID) =>
    apiService.get(
      `api/QuanLyRap/LayThongTinCumRapTheoHeThong` +
        `?maHeThongRap=${cinemaSystemID}`
    );
}

export const cinemaService = new CinemaService();
