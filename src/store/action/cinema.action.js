// import {
//   GET_CINEMA_GROUP_LIST,
//   GET_CINEMA_LIST,
//   GET_CINEMA_SYSTEM_LIST
// } from "../constant/cinema.constant";
// import { cinemaService } from "../../core/service/cinema.service";

// export const getCinemaListAction = (cinemaGroupID) => {
//   return {
//     type: GET_CINEMA_LIST,
//     payload: cinemaGroupID
//   };
// };

// export const getCinemaGroupListAction = (cinemaSystemID) => {
//   return async (dispatch) => {
//     try {
//       const response = await cinemaService.getCinemaGroupList(cinemaSystemID);
//       dispatch({
//         type: GET_CINEMA_GROUP_LIST,
//         payload: response.data
//       });
//     } catch (error) {
//       console.log(error.response);
//     }
//   };
// };

// export const getCinemaSystemListAction = () => {
//   return async (dispatch) => {
//     try {
//       const response = await cinemaService.getCinemaSystemList();
//       dispatch({
//         type: GET_CINEMA_SYSTEM_LIST,
//         payload: response.data
//       });
//     } catch (error) {
//       console.log(error.response);
//     }
//   };
// };
