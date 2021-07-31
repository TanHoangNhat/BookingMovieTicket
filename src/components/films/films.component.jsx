import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import style from "./films.module.scss";

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
    centeredSlides: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 250,
      modifier: 0.6,
      slideShadows: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      },
      425: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  };

  const renderImageUrl = (url) => {
    if (!url.includes("https")) return url.replace("http", "https");
    return url;
  };

  const renderMovies = (movieList) => {
    return movieList?.map((movie, index) => {
      return (
        <SwiperSlide key={index} className={style.films__slide}>
          <div className={style.film__item}>
            <a>
              <div
                className={style.film__image}
                style={{
                  backgroundImage: `url('${renderImageUrl(movie.hinhAnh)}')`
                }}
              >
                <span className={style.point}>
                  <span>{movie.danhGia}</span>
                  <div>
                    <span className={style.star}></span>
                    <span className={style.star}></span>
                    <span className={style.star}></span>
                    <span className={style.star}></span>
                    <span className={style.half}></span>
                  </div>
                </span>
                <div className={style.overlay}>
                  <button className={style.play}></button>
                </div>
              </div>
            </a>
            <div className={style.film__info}>
              <div className={style.title}>
                <span className={style.rated}>P</span>
                {movie.tenPhim}
              </div>
              <div className={style.length}>
                100 Phút - IMDb - [
                {Math.round((Math.random() * 5 + 5) * 10) / 10}]
              </div>
              <a className={style.book}>Mua vé</a>
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
    <section ref={r} className={style.films__section}>
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
          <div id="nowShowing" className="tab-pane fade active show nowShowing">
            <Swiper {...swiperSettings}>{renderMovies(nowShowingList)}</Swiper>
          </div>
          <div id="upComing" className="tab-pane fade active upComing">
            <Swiper {...swiperSettings}>{renderMovies(upComingList)}</Swiper>
          </div>
          <div className={style.content}></div>
        </div>
      </div>
    </section>
  );
};

export default Films;
