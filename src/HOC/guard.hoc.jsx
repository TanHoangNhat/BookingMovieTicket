import React from "react";
import { Redirect } from "react-router-dom";

const Guard = (props) => {
  const maLoaiNguoiDung = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
  return maLoaiNguoiDung === "QuanTri" ? (
    props.children
  ) : (
    <Redirect to="/home" />
  );
};

export default Guard;
