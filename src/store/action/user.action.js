// import {
//   GET_USER_LIST_PAGINATION,
//   SET_USER_DETAIL
// } from "../constant/user.constant";
// import { userService } from "../../core/service/user.service";
// import { GROUP_ID } from "../../core/global/constant";

// export const setUserDetailAction = (user) => {
//   return { type: SET_USER_DETAIL, payload: user };
// };

// export const getUserListPaginationAction = (
//   pageNumber = "1",
//   itemPerPageNumber = "5"
// ) => {
//   return async (dispatch) => {
//     try {
//       const response = await userService.getUserListPagination(
//         GROUP_ID,
//         pageNumber,
//         itemPerPageNumber
//       );
//       dispatch({
//         type: GET_USER_LIST_PAGINATION,
//         payload: response.data
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const searchUserPaginationAction = (
//   searchString,
//   pageNumber,
//   itemPerPageNumber
// ) => {
//   return async (dispatch) => {
//     try {
//       const response = await userService.searchUserPagination(
//         searchString,
//         GROUP_ID,
//         pageNumber,
//         itemPerPageNumber
//       );
//       dispatch({
//         type: GET_USER_LIST_PAGINATION,
//         payload: response.data
//       });
//     } catch (error) {
//       console.log(error.response);
//       return error.response;
//     }
//   };
// };

// export const addUserAction = (user) => {
//   return async () => {
//     try {
//       return await userService.addUser(user);
//     } catch (error) {
//       return error.response;
//     }
//   };
// };

// export const deleteUserAction = (taiKhoan) => {
//   return async () => {
//     try {
//       return await userService.deleteUser(taiKhoan);
//     } catch (error) {
//       return error.response;
//     }
//   };
// };

// export const updateUserAction = (user) => {
//   return async () => {
//     try {
//       return await userService.updateUser(user);
//     } catch (error) {
//       return error.response;
//     }
//   };
// };

// export const signInSignUpAction = (data, isSignIn) => {
//   return async () => {
//     try {
//       const response = isSignIn
//         ? await userService.signIn(data)
//         : await userService.signUp(data);
//       const { accessToken, taiKhoan, maLoaiNguoiDung, hoTen } = response.data;
//       localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung));
//       localStorage.setItem("accessToken", JSON.stringify(accessToken));
//       localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
//       localStorage.setItem("hoTen", JSON.stringify(hoTen));
//       return response;
//     } catch (error) {
//       return error.response;
//     }
//   };
// };
