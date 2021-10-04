import { apiService } from "./api.service";

class MovieService {
  getMovieListPagination = (groupID, pageNumber, itemPerPageNumber) =>
    apiService.get(
      `api/QuanLyPhim/LayDanhSachPhimPhanTrang` +
        `?maNhom=${groupID}` +
        `&soTrang=${pageNumber}` +
        `&soPhanTuTrenTrang=${itemPerPageNumber}`
    );

  getMovieList = (groupID) =>
    apiService.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`);

  getMovieDetail = (movieID) =>
    apiService.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieID}`);

  deleteMovie = (movieID) =>
    apiService.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${movieID}`);

  addMovie = (data) =>
    apiService.post(`api/QuanLyPhim/ThemPhimUploadHinh`, data);

  updateMovie = (data) =>
    apiService.post(`api/QuanLyPhim/CapNhatPhimUpload`, data);
}

export const movieService = new MovieService();
