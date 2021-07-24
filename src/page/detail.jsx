import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getDetailMovie } from "../store/action/movie.action";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import ReactPlayer from "react-player/youtube";

import { Button, Container, Table } from "@material-ui/core";
import rating from "../asset/image/rate.gif";
import * as React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyItems: "center"
  },
  root2: {
    width: 200,
    display: "flex",
    alignItems: "center"
  }
}));

export function Detail() {
  let { maPhim } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  var dateFormat = require("dateformat");

  useEffect(() => {
    dispatch(getDetailMovie(maPhim));
  });
  const detailMovie = useSelector((state) => {
    return state.movie?.detail_movie;
  });
  const classes = useStyles();
  const [value, setValue] = React.useState("TH");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [showVideo, setShowVideo] = useState(false);
  const handleShowVide = () => {
    setShowVideo(!showVideo);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "tenRap", headerName: "Tên Rạp", width: 150 },
    { field: "maLichChieu", headerName: "Mã Lịch Chiếu", width: 150 },
    { field: "maRap", headerName: "Mã Rạp", width: 150 },
    { field: "giaVe", headerName: "Giá vé", width: 150 },
    { field: "thoiLuong", headerName: "Thời gian", width: 150 },
    { field: "ngayChieu", headerName: "Lịch chiếu", width: 150 },
    {
      field: "",
      headerName: "Đặt lịch",
      with: 150,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
          const onclick = () => {
            history.push(`/chairing/${params.row.maLichChieu}`)
          };
  
        return (
          <button className="btn btn-success" onClick={() => onclick()}>
            Click
          </button>
        );
      },
    },
  ];

  const renderRap = () => {
    var element = document.createElement("a");
    element.href = "a";
    element.innerHTML = "EDIT";
    return detailMovie?.lichChieu?.map((lichChieu, index) => {
      let rap = lichChieu.thongTinRap;
      return {
        id: index,
        tenRap: rap.tenRap,
        maLichChieu: lichChieu.maLichChieu,
        maRap: rap.maRap,
        giaVe: lichChieu.giaVe,
        thoiLuong: lichChieu.thoiLuong,
        ngayChieu: dateFormat(lichChieu.ngayChieuGioChieu, "dd/mm/yyyy"),
      };
    });
  };

  return (
    <>
      <img className="backGroundDetail" src={detailMovie.hinhAnh} />
      <Container className="children">
        <div className="detail_movie">
          {showVideo ? (
            <ReactPlayer
              url={detailMovie.trailer}
              width="300px"
              height="400px"
              auto
            />
          ) : (
            <a href="#">
              <img
                src={detailMovie.hinhAnh}
                alt=""
                width="300px"
                height="400px"
              />
            </a>
          )}
          <div className="detail_movie_child">
            <h3>{dateFormat(detailMovie.ngayKhoiChieu, "dd/mm/yyyy")}</h3>
            <h3>{detailMovie.tenPhim}</h3>
            <h3>2D/Digital</h3>
            {showVideo ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleShowVide()}
              >
                Đóng Trailer
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleShowVide()}
              >
                Xem Trailer
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => history.push(`/booking/${maPhim}`)}
            >
              Đặt vé
            </button>
          </div>
          <div>
            <div class="icon_Rating">
              <img src={rating} alt="" height="200px" />
            </div>
            <div className={classes.root2}>
              <Rating
                name="hover-feedback"
                value={"5"}
                precision={1}
                style={{ left: "20%" }}
              />
            </div>
          </div>
        </div>

        <TabContext value={value} className="barTab">
          <AppBar position="static">
            <TabList
              className="barTab"
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="THÔNG TIN" value="TH" />
              <Tab label="ĐÁNH GIÁ" value="DG" />
              <Tab label="rẠP CHIẾU" value="THR" />
            </TabList>
          </AppBar>

          <TabPanel value="TH" className="detail_text">
            <div>
              <h5>Ngày khởi chiếu</h5>
              <h5>Tên Phim</h5>
              <h5>Định dạng</h5>
            </div>
            <div>
              <h5>{dateFormat(detailMovie.ngayKhoiChieu, "dd/mm/yyyy")}</h5>
              <h5>{detailMovie.tenPhim}</h5>
              <h5>2D/Digital</h5>
            </div>
            <div>
              <h4>Nội dung</h4>
              <h5>{detailMovie.moTa}</h5>
            </div>
          </TabPanel>
          <TabPanel value="DG" className="detail_text">
            <h3>{detailMovie.danhGia}</h3>
          </TabPanel>
          <TabPanel value="THR" className="detail_tableInfo">
            <Table>
              <Container>
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    columns={columns}
                    rows={renderRap()}
                    pageSize={10}
                  />
                </div>
              </Container>
            </Table>
          </TabPanel>
        </TabContext>
      </Container>
    </>
  );
}
