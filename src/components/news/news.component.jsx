import style from "./news.module.scss";
import like from "../../asset/image/like.png";
import comment from "../../asset/image/comment.png";
import news_demo1 from "../../asset/image/news_demo1.png";
import news_demo2 from "../../asset/image/news_demo2.png";
import news_demo3 from "../../asset/image/news_demo3.png";
import news_demo4 from "../../asset/image/news_demo4.png";
import datas from "./news.data.json";

import React from "react";

function shuffleArray(array) {
  let newArray = [];
  let indexArray = [];
  let length = array.length;
  while (newArray.length < array.length) {
    var randomIndex = Math.floor(Math.random() * length);
    var index = indexArray.findIndex((i) => i === randomIndex);
    if (index === -1) {
      indexArray.push(randomIndex);
      newArray.push(array[randomIndex]);
    }
  }
  return newArray;
}

const News = ({ r }) => {
  const cinemaList = shuffleArray(datas);
  const reviewList = shuffleArray(datas);
  const promotionList = shuffleArray(datas);
  const renderNews = (array) => {
    const news = array.map((d, index) => {
      if (index < 4)
        return (
          <div
            key={index}
            className={
              index === 0 || index === 1
                ? "col-sm-6 news__big"
                : "col-sm-4 news__big"
            }
          >
            <div className={style.news__item}>
              <div className={style.news__image}>
                <a target="_blank" href="#">
                  <img src={d.image} />
                </a>
              </div>
              <h4 className="mt-3">
                <a target="_blank" className="text-decoration-none" href="#">
                  {d.title}
                </a>
              </h4>
              <p className="mb-4">{d.description}</p>
              <span className="me-5">
                <img className="me-3" src={like} />
                {d.like}
              </span>
              <span>
                <img className="me-3" src={comment} />
                {d.comment}
              </span>
            </div>
          </div>
        );
    });
    const smallNews = array.map((d, index) => {
      if (index > 3 && index < 8)
        return (
          <div
            key={index}
            className={`row m-0 mb-3 ${style.news__item} ${style.news__item__small}`}
          >
            <div className="col-2 col-sm-3 col-lg-2 p-0">
              <div className={style.news__image}>
                <a target="_blank" href="#">
                  <img src={d.image2} />
                </a>
              </div>
            </div>
            <h4 className={`${style.news__title} col-10 col-sm-9 col-lg-10`}>
              <a target="_blank" href="#">
                {d.title}
              </a>
            </h4>
          </div>
        );
    });
    return (
      <>
        {news}
        <div className="col-sm-4 news__small">{smallNews}</div>
      </>
    );
  };
  return (
    <section id="newsBlock" className={style.new__section}>
      <div className={style.wrapper}>
        <div className={style.news__content}>
          <div className={`${style.news__header} nav nav-pills`}>
            <button
              className={`${style.header__tab} active`}
              data-bs-toggle="pill"
              href="#cinema"
            >
              Điện ảnh 24h
            </button>
            <button
              className={`${style.header__tab}`}
              data-bs-toggle="pill"
              href="#review"
            >
              Review
            </button>
            <button
              className={`${style.header__tab}`}
              data-bs-toggle="pill"
              href="#promotion"
            >
              Khuyến mãi
            </button>
          </div>
          <div className={style.news__body}>
            <div className="tab-content">
              <div className="tab-pane active" id="cinema">
                <div className="row m-0">{renderNews(cinemaList)}</div>
              </div>
              <div className="tab-pane" id="review">
                <div className="row m-0">{renderNews(reviewList)}</div>
              </div>
              <div className="tab-pane" id="promotion">
                <div className="row m-0">{renderNews(promotionList)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
