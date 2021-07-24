// import React from "react";
// import { useParams,useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getDetailMovie } from "../store/action/movie.action";

// function Booking() {
//   const { idMovie } = useParams();
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const detail = useSelector((state) => {
//     return state.movie?.detail_movie;
//   });
//   useEffect(() => {
//     dispatch(getDetailMovie(idMovie));
//   });
//   const render = () => {
//     return detail?.lichChieu?.map((lichChieu) => {
//       const rap = lichChieu?.thongTinRap;
//       return (
//         <tr>
//           <td>{rap.maRap}</td>
//           <td>{rap.tenRap}</td>
//           <td>{rap.maCumRap}</td>
//           <button
//             className="btn btn-success"
//             onClick={() =>history.push(`/chairing/${lichChieu.maLichChieu}`)}
//           >
//             Đặt chỗ
//           </button>
//         </tr>
//       );
//     });
//   };

//   return (
//     <>
//       <table class="table table-bordered container">
//         <thead>
//           <tr>
//             <th>MÃ RẠP</th>
//             <th>TÊN RẠP</th>
//             <th>MÃ CỤM RẠP</th>
//             <th>Thao tác</th>
//           </tr>
//         </thead>
//         <tbody>{render()}</tbody>
//       </table>
//     </>
//   );
// }

// export default Booking;
