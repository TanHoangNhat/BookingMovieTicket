import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import webLogo from "../../asset/image/web-logo.png";
import avatar from "../../asset/image/avatar.png";
import style from "./header.module.scss";
import button from "../../asset/image/next-session.png";
import clsx from "clsx";
import burger from "../../asset/image/menu-options.png";

function Header({ handleClick }) {
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSignout = () => {
    localStorage.clear();
  };

  const renderUserName = () => {
    const userName = JSON.parse(localStorage.getItem("hoTen"));
    return userName !== null ? (
      <div>
        <span>{userName}</span>
        {renderMenu()}
      </div>
    ) : (
      <span onClick={() => history.push("/sign-in")}>Đăng nhập</span>
    );
  };

  const renderMenu = () => {
    return openMenu ? (
      <div className={style.user__menu}>
        <a className="" href="#" onClick={handleSignout}>
          Đăng xuất
        </a>
      </div>
    ) : (
      ""
    );
  };
  return (
    <header className={style.header}>
      <div className={style.header__navbar}>
        <div className={style.navbar__left}>
          <a className="" href="#">
            <img src={webLogo} alt="" height="50px" width="50px" />
          </a>
        </div>
        <div className={style.navbar__center}>
          <ul className={style.navbar__menu}>
            <li className={style.menu__item}>
              <HashLink to="/home#filmsBlock">Lịch Chiếu</HashLink>
            </li>
            <li className={style.menu__item}>
              <HashLink to="/home#cinemaBlock">Cụm Rạp</HashLink>
            </li>
            <li className={style.menu__item}>
              <HashLink to="/home#newsBlock">Tin Tức</HashLink>
            </li>
            <li className={style.menu__item}>
              <HashLink to="/home#appBlock">Ứng Dụng</HashLink>
            </li>
          </ul>
        </div>
        <div className={style.navbar__right}>
          <div
            className={style.user__id}
            href="#"
            onPointerEnter={() => {
              setOpenMenu(true);
            }}
            onPointerLeave={() => {
              setOpenMenu(false);
            }}
          >
            <img src={avatar}></img>
            {renderUserName()}
          </div>
        </div>
        <div
          className={clsx({
            [style.sidebar__menu]: true,
            [style.active]: openSidebar
          })}
          name="sidebar__menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenSidebar(false);
          }}
        >
          <div
            className={clsx({
              [style.sidebar__content]: true,
              [style.active]: openSidebar
            })}
          >
            <div className={style.content__top}>
              <div className={style.user__info}>
                <img src={avatar} alt="" />
                <span> TEST </span>
              </div>
              <img
                onClick={() => setOpenSidebar(false)}
                className={style.button__close}
                src={button}
                alt=""
              />
            </div>
            <div className={style.content__middle}>
              <a className={style.item__link}>Lịch Chiếu</a>
              <a className={style.item__link}>Cụm Rạp</a>
              <a className={style.item__link}>Tin Tức</a>
              <a className={style.item__link}>Ứng Dụng</a>
              <a className={style.item__link}>Đăng xuất</a>
            </div>
          </div>
        </div>
        <div
          onClick={() => setOpenSidebar(true)}
          className={style.mobile__menu}
        >
          <img src={burger} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
