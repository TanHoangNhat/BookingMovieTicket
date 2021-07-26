import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import style from "./films.module.scss";
import { useSpring, animated } from "react-spring";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Controller,
  Autoplay
} from "swiper/core";
import { useDispatch, useSelector } from "react-redux";
import { getListMovie } from "../../store/action/movie.action";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Controller, Autoplay]);

const Films = ({ r }) => {
  const dispatch = useDispatch();

  const list_movie = useSelector((state) => {
    return state.movie.list_movie;
  });

  const nowShowingList = list_movie.slice(21, 41);
  const upComingList = list_movie.slice(41, 61);

  const swiperSettings = {
    loop: true,
    speed: 1000,
    effect: "coverflow",
    className: style.films__container,
    grabCursor: true,
    slidesPerView: 4,
    centeredSlides: true,
    slideToClickedSlide: true,
    autoplay: {
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 250,
      modifier: 0.6,
      slideShadows: false
    }
  };

  const renderMovies = (movieList) => {
    return movieList?.map((movie) => {
      return (
        <SwiperSlide className={style.films__slide}>
          <div className={style.film__item}>
            <a>
              <div
                className={style.film__image}
                style={{
                  backgroundImage: `url('${movie.hinhAnh}')`
                }}
              ></div>
            </a>
            <div className={style.film__info}>
              <div className={style.title}>
                <span className={style.rated}>P</span>
                {movie.tenPhim}
              </div>
              <div className={style.length}>100 Phút</div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  useEffect(() => {
    dispatch(getListMovie());
  }, []);
  return (
    <div ref={r} className={style.films__section}>
      <div className={style.films__content}>
        <div className={`nav nav-tabs ${style.films__header}`}>
          <button
            name="nowShowing"
            className={`${style.header__tab} active`}
            data-bs-target="#nowShowing"
            data-bs-toggle="tab"
          >
            Đang chiếu
          </button>
          <button
            name="upComing"
            className={style.header__tab}
            data-bs-target="#upComing"
            data-bs-toggle="tab"
          >
            Sắp chiếu
          </button>
        </div>
        <div className={`tab-content ${style.films__body}`}>
          <div id="nowShowing" className="tab-pane fade active show">
            <Swiper {...swiperSettings}>{renderMovies(nowShowingList)}</Swiper>
          </div>
          <div id="upComing" className="tab-pane fade active">
            <Swiper {...swiperSettings}>{renderMovies(upComingList)}</Swiper>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Films;
