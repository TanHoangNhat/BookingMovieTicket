import clsx from "clsx";
import React, { useState } from "react";
import style from "./homeTool.module.scss";

const HomeTool = () => {
  return (
    <div className={style.home__tool}>
      <div className={style.tool__movie}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Phim
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          <li className={style.menu__item}>
            Ong Nhí Phiêu Lưu Ký: Giải Cứu Công Chúa Kiến - Maya The Bee 3: The
            Golden Orb - P
          </li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
        </ul>
      </div>
      <div className={style.tool__cinema}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Rạp
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
        </ul>
      </div>
      <div className={style.tool__date}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ngày xem
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
        </ul>
      </div>
      <div className={style.tool__showtime}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Suất chiếu
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
          <li className={style.menu__item}>1awgja</li>
        </ul>
      </div>
      <div className={style.tool__booking}>
        <button className="btn btn-secondary text-uppercase">
          Mua vé ngay
        </button>
      </div>
    </div>
  );
};

export default HomeTool;
