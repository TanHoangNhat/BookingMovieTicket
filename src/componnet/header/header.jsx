import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import webLogo from "../../asset/image/web-logo.png";
import avatar from "../../asset/image/avatar.png";
import style from "./header.module.scss";

function Header({ handleClick }) {
  const [openMenu, setOpenMenu] = useState(false);

  const onClick = (e) => {
    handleClick(e.target.name);
  };

  const handleSignout = () => {
    localStorage.clear();
  };

  const renderUserName = () => {
    const userName = JSON.parse(localStorage.getItem("hoTen"));
    return userName !== null ? (
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
        <span>{userName}</span>
        {renderMenu()}
      </div>
    ) : (
      <NavLink to="/sign-in">Đăng nhập</NavLink>
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
    <section className={style.header}>
      <div className={style.header__navbar}>
        <div className={style.navbar__left}>
          <a className="" href="#">
            <img src={webLogo} alt="" height="50px" width="50px" />
          </a>
        </div>
        <div className={style.navbar__center}>
          <ul className={style.navbar__menu}>
            <li className={style.menu__item}>
              <a onClick={onClick} name="LC" className="">
                Lịch Chiếu
              </a>
            </li>
            <li className={style.menu__item}>
              <a onClick={onClick} name="CR" className="">
                Cụm Rạp
              </a>
            </li>
            <li className={style.menu__item}>
              <a onClick={onClick} name="TT" className="">
                Tin Tức
              </a>
            </li>
            <li className={style.menu__item}>
              <a onClick={onClick} name="UD" className="">
                Ứng Dụng
              </a>
            </li>
          </ul>
        </div>
        <div className={style.navbar__right}>{renderUserName()}</div>
      </div>
    </section>
  );
}

export default Header;
