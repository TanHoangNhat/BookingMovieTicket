import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemaGroupListAction,
  getCinemaSystemListAction
} from "../../store/action/cinema.action";
import {
  getShowtimeByCinemaGroupAction,
  getShowtimeByCinemaSystemAction
} from "../../store/action/showtime.action";
import style from "./cinema.module.scss";

const Cinema = () => {
  const dispatch = useDispatch();
  const cinemaSystemList = useSelector(
    (state) => state.cinema.cinemaSystemList
  );
  const cinemaGroupList = useSelector((state) => state.cinema.cinemaGroupList);
  const movieList = useSelector(
    (state) => state.showtime.showtimeListByGroup.danhSachPhim
  );

  const [currentLogo, setCurrentLogo] = useState("");

  const handleChangeCinemaSystem = (e, code) => {
    const logo = e.target.querySelector("img").getAttribute("src");
    setCurrentLogo(logo);
    dispatch(getCinemaGroupListAction(code));
    dispatch(getShowtimeByCinemaSystemAction(code));
  };

  const handleChangeCinemaGroup = (code) => {
    console.log(code);
    dispatch(getShowtimeByCinemaGroupAction(code));
  };

  const renderCinemaSystem = () => {
    return cinemaSystemList.map((system, index) => {
      return (
        <li className="nav-item">
          <a
            className={`nav-link ${index === 0 ? "active" : ""}`}
            data-bs-toggle="pill"
            // data-bs-target="#v-pills-bhd"
            // imgUrl={system.logo}
            onClick={(event) =>
              handleChangeCinemaSystem(event, system.maHeThongRap)
            }
          >
            <img src={system.logo} />
          </a>
        </li>
      );
    });
  };

  const renderCinemaGroup = () => {
    return cinemaGroupList.map((group) => {
      return (
        <a
          className="nav-link "
          data-bs-toggle="pill"
          // data-bs-target="#v-pills-bhd-cinema-2"
          onClick={() => handleChangeCinemaGroup(group.maCumRap)}
        >
          <div className={style.details}>
            <div className={style.cinemaImage}>
              <img src={currentLogo} className={style.image} alt="bhd" />
            </div>
            <div className={style.describe}>
              <p className="title">
                <span className={style.green}>{group.tenCumRap}</span>
              </p>
              <p className={style.address}>{group.diaChi}</p>
              <p className={style.moreInfo}>[chi tiết]</p>
            </div>
          </div>
        </a>
      );
    });
  };

  const renderMovie = () => {
    return movieList?.map((movie) => {
      return (
        <div className={`${style.details} ${style.big__details}`}>
          <div className={`${style.wrapInfo} d-flex`}>
            <div className={style.cinemaImage}>
              <img src={movie.hinhAnh} alt="wonderwoman" />
            </div>
            <div className={style.titleInfo}>
              <span className={style.bg__green}>P</span>
              <p className={style.movieTitle}>{movie.tenPhim}</p>
              <p className={style.info}>100 phút - TIX 9 - IMDb 8</p>
            </div>
          </div>
          <div className={style.typeTiming}>
            <div className={style.version}>2D Digital</div>
            <div className={style.session}>
              <a href="#">
                <span className={style.startTime}>13:00</span> ~ 14:40
              </a>
              <a href="#">
                <span className={style.startTime}>16:55</span> ~ 18:35
              </a>
              <a href="#">
                <span className={style.startTime}>21:05</span> ~ 22:45
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(getCinemaSystemListAction());
  }, []);

  return (
    <section className={style.cinemaBlock}>
      <div className={style.wrapper}>
        <div className="row">
          <div className="col-md-1 ">
            <ul className="nav nav-pills col-768">{renderCinemaSystem()}</ul>
          </div>
          <div className="col-md-11 scroll-0">
            <div className="tab-content">
              {/* BHD  */}
              <div className="tab-pane active" id="v-pills-bhd" role="tabpanel">
                <div className="row">
                  <div className="col-md-4">
                    <div className="nav nav-pills " role="tablist">
                      {renderCinemaGroup()}
                    </div>
                  </div>
                  <div className="col-md-8 fix-padding fixed-scroll">
                    <div className="tab-content">
                      <div className="tab-pane active">{renderMovie()}</div>
                      {/* <div className="tab-pane" id="v-pills-bhd-cinema-2">
                        <div className="details big-details">
                          <div className="wrapInfo d-flex">
                            <div className="cinemaImage">
                              <img src="./images/csnm.png" alt="wonderwoman" />
                            </div>
                            <div className="titleInfo ">
                              <span className="bg-green">P</span>
                              <p className="movieTitle">
                                Cuộc Sống Nhiệm Màu - Soul -{" "}
                              </p>
                              <p className="info">100 phút - TIX 9 - IMDb 8</p>
                            </div>
                          </div>
                          <div className="typeTiming">
                            <div className="version">2D Digital</div>
                            <div className="session">
                              <a href="#">
                                <span className="start-time">11:45</span> ~
                                13:25
                              </a>
                              <a href="#">
                                <span className="start-time">16:20</span> ~
                                18:00
                              </a>
                              <a href="#">
                                <span className="start-time">18:00</span> ~
                                22:15
                              </a>
                              <a href="#">
                                <span className="start-time">22:15</span> ~
                                22:15
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="details big-details">
                          <div className="wrapInfo d-flex">
                            <div className="cinemaImage">
                              <img src="./images/ldgld.png" alt="wonderwoman" />
                            </div>
                            <div className="titleInfo ">
                              <span className="bg-red">C16</span>
                              <p className="movieTitle">
                                Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
                              </p>
                              <p className="info">
                                128 phút - TIX 8.8 - IMDb 0
                              </p>
                            </div>
                          </div>
                          <div className="typeTiming">
                            <div className="version">2D Digital</div>
                            <div className="session">
                              <a href="#">
                                <span className="start-time">13:50</span> ~
                                15:58
                              </a>
                              <a href="#">
                                <span className="start-time">17:05</span> ~
                                19:13
                              </a>
                              <a href="#">
                                <span className="start-time">19:30</span> ~
                                21:28
                              </a>
                              <a href="#">
                                <span className="start-time">21:55</span> ~
                                00:03
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* CNS  */}
              <div className="tab-pane " id="v-pills-cns" role="tabpanel">
                <div className="row">
                  <div className="col-md-4">
                    <div className="nav nav-pills " role="tablist">
                      <a
                        className="nav-link active"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-cns-cinema-1"
                      >
                        <div className="details">
                          <div className="cinemaImage">
                            <img src="./images/cnsHBT.jpg" className="image" />
                          </div>
                          <div className="describe">
                            <p className="title">
                              <span className="pink">CNS</span> - Hai Bà Trưng
                            </p>
                            <p className="address">
                              135 Hai Bà Trưng, Bến Nghé, Q.1{" "}
                            </p>
                            <p className="moreInfo">[chi tiết]</p>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link "
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-cns-cinema-2"
                      >
                        <div className="details">
                          <div className="cinemaImage">
                            <img
                              src="./images/cnsQT.jpg"
                              className="image"
                              alt="bhd"
                            />
                          </div>
                          <div className="describe">
                            <p className="title">
                              <span className="pink">CNS </span> - Quốc Thanh
                            </p>
                            <p className="address">271 Nguyễn Trãi, Q.1 </p>
                            <p className="moreInfo">[chi tiết]</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 fix-padding ">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane active"
                        id="v-pills-cns-cinema-1"
                      >
                        <div className="details big-details">
                          <div className="wrapInfo d-flex ">
                            <div className="cinemaImage">
                              <img
                                src="./images/chimuoiba.png"
                                alt="wonderwoman"
                              />
                            </div>
                            <div className="titleInfo ">
                              <span className="bg-red">C18</span>
                              <p className="movieTitle">
                                Chị Mười Ba: 3 Ngày Sinh Tử{" "}
                              </p>
                              <p className="info">
                                100 phút - TIX 7.4 - IMDb 0
                              </p>
                            </div>
                          </div>
                          <div className="typeTiming">
                            <div className="version">2D Digital</div>
                            <div className="session">
                              <a href="#">
                                <span className="start-time">14:40</span> ~
                                16:20
                              </a>
                              <a href="#">
                                <span className="start-time">18:20</span> ~
                                20:00
                              </a>
                              <a href="#">
                                <span className="start-time">20:10</span> 21:50
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="details big-details">
                          <div className="wrapInfo d-flex">
                            <div className="cinemaImage">
                              <img src="./images/ldgld.png" alt="wonderwoman" />
                            </div>
                            <div className="titleInfo ">
                              <span className="bg-red">C16</span>
                              <p className="movieTitle">
                                Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
                              </p>
                              <p className="info">
                                128 phút - TIX 8.8 - IMDb 0
                              </p>
                            </div>
                          </div>
                          <div className="typeTiming">
                            <div className="version">2D Digital</div>
                            <div className="session">
                              <a href="#">
                                <span className="start-time">12:20</span> ~
                                14:28
                              </a>
                              <a href="#">
                                <span className="start-time">14:35</span> ~
                                16:35
                              </a>
                              <a href="#">
                                <span className="start-time">16:15</span> ~
                                18:23
                              </a>
                              <a href="#">
                                <span className="start-time">19:00</span> ~
                                21:08
                              </a>
                              <a href="#">
                                <span className="start-time">20:30</span> ~
                                22:38
                              </a>
                              <a href="#">
                                <span className="start-time">22:55</span> ~
                                01:03
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane " id="v-pills-cns-cinema-2">
                        <div className="details big-details">
                          <div className="wrapInfo d-flex">
                            <div className="cinemaImage">
                              <img
                                src="./images/chimuoiba.png"
                                alt="wonderwoman"
                              />
                            </div>
                            <div className="titleInfo ">
                              <span className="bg-red">C18</span>
                              <p className="movieTitle">
                                Chị Mười Ba: 3 Ngày Sinh Tử{" "}
                              </p>
                              <p className="info">
                                100 phút - TIX 7.4 - IMDb 0
                              </p>
                            </div>
                          </div>
                          <div className="typeTiming">
                            <div className="version">2D Digital</div>
                            <div className="session">
                              <a href="#">
                                <span className="start-time">12:15</span> ~
                                13:50
                              </a>
                              <a href="#">
                                <span className="start-time">15:15</span> ~
                                15:55
                              </a>
                              <a href="#">
                                <span className="start-time">14:45</span> ~
                                16:25
                              </a>
                              <a href="#">
                                <span className="start-time">20:10</span> ~
                                21:50
                              </a>
                              <a href="#">
                                <span className="start-time">22:10</span> ~
                                23:50
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="details big-details">
                          <div className="wrapInfo d-flex">
                            <div className="cinemaImage">
                              <img src="./images/ldgld.png" alt="wonderwoman" />
                            </div>
                            <div className="titleInfo ">
                              <span className="bg-red">C16</span>
                              <p className="movieTitle">
                                Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
                              </p>
                              <p className="info">
                                128 phút - TIX 8.8 - IMDb 0
                              </p>
                            </div>
                          </div>
                          <div className="typeTiming">
                            <div className="version">2D Digital</div>
                            <div className="session">
                              <a href="#">
                                <span className="start-time">12:20</span> ~
                                14:28
                              </a>
                              <a href="#">
                                <span className="start-time">14:35</span> ~
                                16:35
                              </a>
                              <a href="#">
                                <span className="start-time">16:15</span> ~
                                18:23
                              </a>
                              <a href="#">
                                <span className="start-time">19:00</span> ~
                                21:08
                              </a>
                              <a href="#">
                                <span className="start-time">20:30</span> ~
                                22:38
                              </a>
                              <a href="#">
                                <span className="start-time">22:55</span> ~
                                01:03
                              </a>
                              <a href="#">
                                <span className="start-time">22:55</span> ~
                                01:03
                              </a>
                              <a href="#">
                                <span className="start-time">22:55</span> ~
                                01:03
                              </a>
                              <a href="#">
                                <span className="start-time">22:55</span> ~
                                01:03
                              </a>
                              <a href="#">
                                <span className="start-time">22:55</span> ~
                                01:03
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cinema;
