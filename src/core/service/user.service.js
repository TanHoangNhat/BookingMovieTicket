import { apiService } from "./api.service";

class UserService {
  getUserListPagination = (groupID, pageNumber, itemPerPageNumber) =>
    apiService.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang` +
        `?MaNhom=${groupID}` +
        `&soTrang=${pageNumber}` +
        `&soPhanTuTrenTrang=${itemPerPageNumber}`
    );

  addUser = (data) =>
    apiService.post(`api/QuanLyNguoiDung/ThemNguoiDung`, data);

  deleteUser = (accountID) =>
    apiService.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${accountID}`);

  updateUser = (data) =>
    apiService.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);

  searchUserPagination = (
    searchString,
    groupID,
    pageNumber,
    itemPerPageNumber
  ) =>
    apiService.get(
      `api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang` +
        `?MaNhom=${groupID}` +
        `&tuKhoa=${searchString}` +
        `&soTrang=${pageNumber}` +
        `&soPhanTuTrenTrang=${itemPerPageNumber}`
    );

  signIn = (data) => apiService.post(`api/QuanLyNguoiDung/DangNhap`, data);

  signUp = (data) => apiService.post(`api/QuanLyNguoiDung/DangKy`, data);
}

export const userService = new UserService();
