import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Header from "../../components/header/header.component";
import { getDetailMovie } from "../../store/action/movie.action";
import s from "./detail.module.scss";
import * as dayjs from "dayjs";
import star from "../../asset/image/star1.png";
import Footer from "../../components/footer/footer.component";
import { getShowtimeByMovieAction } from "../../store/action/showtime.action";
import clsx from "clsx";
import imgDemo from "../../asset/image/cinemaGroupDemo.jpg";
import { renderImageUrl } from "../../core/helper/renderImageURL";
import Loader from "../../components/loader/loader.component";
import swal from "sweetalert";
import { Fade, makeStyles, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Detail = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const maPhim = useParams().maPhim;
  const isLoading = useSelector((state) => state.common.isLoading);
  const { heThongRapChieu, tenPhim, hinhAnh, ngayKhoiChieu, trailer } =
    useSelector((state) => state.showtime.showtimeListByMovie);
  const [cinemaGroup, setCinemaGroup] = useState([]);

  const randomRating = Math.round((Math.random() * 4 + 6) * 10) / 10;

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeCinemaSystem = (code) => {
    setCinemaGroup(
      heThongRapChieu.find((sys) => sys.maHeThongRap === code).cumRapChieu
    );
  };

  const handleShowtimeClick = (maLichChieu) => {
    if (JSON.parse(localStorage.getItem("hoTen"))) {
      history.push(`/booking/${maLichChieu}`);
    } else {
      swal({
        title: "Bạn chưa đăng nhập!!!",
        text: "Bạn cần đăng nhập để tiếp tục đặt vé!",
        icon: "warning",
        buttons: ["Hủy", "Đăng nhập"],
        dangerMode: true,
        className: "custom__swal"
      }).then((willSignIn) => {
        if (willSignIn) {
          history.push(`/sign-in`);
        }
      });
    }
  };

  const renderCinemaSystem = () => {
    return heThongRapChieu?.map((sys, i) => {
      return (
        <button
          key={i}
          className={clsx({
            "nav-link": true,
            active: i === 0
          })}
          data-bs-toggle="pill"
          onClick={() => handleChangeCinemaSystem(sys.maHeThongRap)}
        >
          <div className="d-flex align-items-center">
            <div className={`${s.system__image}`}>
              <img src={renderImageUrl(sys.logo)} />
            </div>
            <div className={`${s.system__name}`}>
              <p>{sys.tenHeThongRap}</p>
            </div>
          </div>
        </button>
      );
    });
  };

  const renderCinemaGroup = () => {
    return cinemaGroup.map((g) => {
      return (
        <div className={s.group__details}>
          <div className={s.group__info}>
            <div className={s.image}>
              <img src={imgDemo} />
            </div>
            <div className={s.info}>
              <p className={s.name}>{g.tenCumRap}</p>
              <p className={s.address}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className={s.group__showtime}>
            {renderShowtime(g.lichChieuPhim)}
          </div>
        </div>
      );
    });
  };

  const renderShowtime = (showtimeList) => {
    return showtimeList.map((st) => {
      return (
        <a onClick={() => handleShowtimeClick(st.maLichChieu)}>
          <span className={s.date}>
            {dayjs(st.ngayChieuGioChieu).format("MMM D, YYYY")}
          </span>
          <span className={s.time}>
            {dayjs(st.ngayChieuGioChieu).format("HH:mm")}
          </span>
        </a>
      );
    });
  };
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getShowtimeByMovieAction(maPhim));
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <Header />
      <Loader />
      {isLoading ? (
        // <Loader />""
        ""
      ) : (
        <>
          <section className={s.detail__section}>
            <div className={s.detail__wrapper}>
              <div className={s.detail__content}>
                <div className={s.content__main}>
                  <div className={s.info}>
                    <div className={`${s.wrapper} row`}>
                      <div className={`col-sm-3 col-5 ${s.left}`}>
                        <img
                          style={{
                            backgroundImage: `url('${renderImageUrl(hinhAnh)}')`
                          }}
                          className={`w-100`}
                          alt=""
                        />
                      </div>
                      <div className={`${s.middle} text-white col-sm-5 col-12`}>
                        <p>{dayjs(ngayKhoiChieu).format("DD.MM.YYYY")}</p>
                        <p>
                          <span className={s.rated}>C18</span>
                          <span className={s.title}>{tenPhim}</span>
                        </p>
                        <p>100 phút - 0 IMDb - 2D/Digital</p>
                        <p>
                          <button
                            onClick={handleOpenModal}
                            className={s.play__trailer}
                          >
                            Play trailer
                          </button>
                        </p>
                      </div>
                      <div className={`${s.right} col-sm-4 col-7`}>
                        <div className={s.circle__rating}>
                          <div className={s.circle__border}></div>
                          <div className={s.circle__fill}>
                            <div className={s.half}></div>
                            <span>{randomRating}</span>
                            <div
                              style={{
                                transform: `rotate(${
                                  ((randomRating - 5) * 180) / 5 + 180
                                }deg)`
                              }}
                              className={s.half}
                            ></div>
                          </div>
                        </div>
                        <div className={s.star__rating}>
                          <img src={star} />
                          <img src={star} />
                          <img src={star} />
                          <img src={star} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={s.background__blur}>
                    <img src={renderImageUrl(hinhAnh)} />
                  </div>
                  <div className={s.gradient}></div>
                </div>
                <div className={s.content__sub}>
                  <div className={`nav nav-tabs ${s.header}`}>
                    <button
                      className={`${s.header__tab} active`}
                      data-bs-target="#showtime"
                      data-bs-toggle="tab"
                    >
                      Lịch chiếu
                    </button>
                    <button
                      className={s.header__tab}
                      data-bs-target="#info"
                      data-bs-toggle="tab"
                    >
                      Thông tin
                    </button>
                  </div>
                  <div className={`tab-content ${s.body}`}>
                    <div id="showtime" className="tab-pane fade active show ">
                      <div className="row m-0">
                        <div className={`col-md-4 ${s.cinema__system}`}>
                          <div className="nav nav-pills" role="tablist">
                            {renderCinemaSystem()}
                          </div>
                        </div>
                        <div className={`col-md-8 ${s.cinema__group}`}>
                          {renderCinemaGroup()}
                        </div>
                      </div>
                    </div>
                    <div id="info" className="text-white tab-pane fade ">
                      N/A
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              className={classes.modal}
              open={openModal}
              onClose={handleCloseModal}
              closeAfterTransition
            >
              <Fade in={openModal}>
                <iframe
                  className={s.video}
                  src={`${trailer}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Fade>
            </Modal>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Detail;
