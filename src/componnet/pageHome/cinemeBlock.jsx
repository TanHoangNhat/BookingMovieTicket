import { Container } from "@material-ui/core";
import { Table, TableBody } from "@material-ui/core";
import { TableCell, TableContainer } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMovie } from "../../store/action/movie.action";
import { getListCumRap, getListRap } from "../../store/action/cinema.action";
function TableBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListRap());
    dispatch(getListCumRap("BHDStar", "GP01"));
  }, [dispatch]);
  const handleGetCumRap = (maHeThongRap) => {
    dispatch(getListCumRap(maHeThongRap, "GP01"));
  };
  const list_rap = useSelector((state) => {
    return state.movie.list_rap;
  });
  const renderListRap = () => {
    return list_rap.map((rap, index) => {
      return (
        <div key={index}>
          <br />
          <NavLink to="/home">
            <img
              src={rap.logo}
              alt=""
              height="50px"
              width="50px"
              onClick={() => {
                handleGetCumRap(rap.maHeThongRap);
              }}
            />
          </NavLink>
        </div>
      );
    });
  };
  let list_cum_rap = useSelector((state) => {
    let list_cum = state.movie.list_cum_rap;
    return list_cum?.map((cum_rap, index) => {
      return cum_rap.lstCumRap;
    });
  });
  let ds = [];
  const handleMovie = (maCumRap) => {
    let list = list_cum_rap[0];
    // console.log(list);
    let index = list?.findIndex((ds) => {
      return ds.maCumRap === maCumRap;
    });
    if (index !== -1) {
      ds.push(list[index].danhSachPhim);
      dispatch(getMovie(ds));
    }
  };
  const renderMovie = useSelector((state) => {
    let list_movies = state.movie.list_phim;
    return list_movies?.map((ds_movie, index) => {
      return ds_movie?.map((movie, index) => {
        return (
          <div className="row">
            <img src={movie.hinhAnh} alt="" height="50px" width="50px" />
            <h5>{movie.tenPhim}</h5>
          </div>
        );
      });
    });
  });

  const renderListCumRap = () => {
    let list = list_cum_rap[0];
    return list?.map((rap, index) => {
      return (
        <div key={index} onClick={() => handleMovie(rap.maCumRap)}>
          <NavLink
            to="/home"
            style={{ display: "flex" }}
            className="handleCumRap"
          >
            <div className={`forImage-${index}`}></div>
            <p>
              {rap.tenCumRap} <br /> {rap.diaChi}
            </p>
          </NavLink>
        </div>
      );
    });
  };
  return (
    <div>
      <Container>
        <TableContainer>
          <Table>
            <TableBody className="tableBlock">
              <Table className="table">
                <TableCell>{renderListRap()}</TableCell>
              </Table>
              <Table className="table">
                <TableCell>{renderListCumRap()}</TableCell>
              </Table>
              <Table className="table">
                <TableCell>{renderMovie}</TableCell>
              </Table>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
export default TableBlock;
