import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header.component";
import {
  bookingTicketAction,
  getShowtimeInfoAction,
  setSelectChairAction
} from "../../store/action/showtime.action";
import s from "./booking.module.scss";
import Loader from "../../components/loader/loader.component";
import swal from "sweetalert";
import { stopLoadingAction } from "../../store/action/common.action";

const Booking = () => {
  const dispatch = useDispatch();
  const { showtimeCode } = useParams();
  const chairList = useSelector((state) => state.showtime.chairList);
  const showtimeInfo = useSelector(
    (state) => state.showtime.showtimeInfo.thongTinPhim
  );
  const isLoading = useSelector((state) => state.common.isLoading);
  const handleSelectChair = (code) => {
    dispatch(setSelectChairAction(code));
  };

  const handleBooking = () => {
    const selectedChairList = chairList.filter((c) => c.selected === true);
    dispatch(bookingTicketAction(showtimeCode, selectedChairList)).then((r) => {
      console.log(r);
      dispatch(stopLoadingAction());
      if (r.status === 200) {
        swal({
          title: "Success!",
          text: "Đặt vé thành công",
          icon: "success",
          button: false,
          timer: 2000,
          className: "custom__swal"
        });
        dispatch(getShowtimeInfoAction(showtimeCode));
      } else {
        swal({
          title: "Unsuccess!",
          text: r.data,
          icon: "error",
          buttons: "OK",
          dangerMode: true
        });
      }
    });
  };

  const renderChairList = () => {
    const left = chairList?.map((c, i) => {
      if ((i + 1) % 16 === 1 || (i + 1) % 16 === 2)
        return (
          <div
            onClick={() => handleSelectChair(c.maGhe)}
            className={clsx({
              [s.chair]: true,
              [s.vip]: c.loaiGhe === "Vip",
              [s.booked]: c.daDat,
              [s.selected]: c.selected
            })}
          >
            <p>{c.daDat ? "X" : c.tenGhe}</p>
          </div>
        );
    });
    const right = chairList?.map((c, i) => {
      if ((i + 1) % 16 === 0 || (i + 1) % 16 === 15)
        return (
          <div
            onClick={() => handleSelectChair(c.maGhe)}
            className={clsx({
              [s.chair]: true,
              [s.vip]: c.loaiGhe === "Vip",
              [s.booked]: c.daDat,
              [s.selected]: c.selected
            })}
          >
            <p>{c.daDat ? "X" : c.tenGhe}</p>
          </div>
        );
    });
    const center = chairList?.map((c, i) => {
      if (
        (i + 1) % 16 !== 0 &&
        (i + 1) % 16 !== 15 &&
        (i + 1) % 16 !== 1 &&
        (i + 1) % 16 !== 2
      )
        return (
          <div
            onClick={() => handleSelectChair(c.maGhe)}
            className={clsx({
              [s.chair]: true,
              [s.vip]: c.loaiGhe === "Vip",
              [s.booked]: c.daDat,
              [s.selected]: c.selected
            })}
          >
            <p>{c.daDat ? "X" : c.tenGhe}</p>
          </div>
        );
    });
    return (
      <div className="row m-0 w-100">
        <div className={`col-2 ${s.left}`}>
          <div>{left}</div>
        </div>
        <div className={`col-8 ${s.center}`}>{center}</div>
        <div className={`col-2 ${s.right}`}>
          <div>{right}</div>
        </div>
      </div>
    );
  };

  const renderTotalMoney = () => {
    return chairList
      .filter((c) => c.selected === true)
      .reduce((total, c) => {
        return (total += c.giaVe);
      }, 0);
  };

  const renderSelectedChairList = () => {
    const normalList = chairList.filter(
      (c) => c.selected === true && c.loaiGhe === "Thuong"
    );
    const vipList = chairList.filter(
      (c) => c.selected === true && c.loaiGhe === "Vip"
    );

    const normalTotalMoney = normalList.reduce((total, c) => {
      return (total += c.giaVe);
    }, 0);

    const vipTotalMoney = vipList.reduce((total, c) => {
      return (total += c.giaVe);
    }, 0);

    const normalChairList = normalList.map((c) => {
      return (
        <div
          onClick={() => handleSelectChair(c.maGhe)}
          className={clsx({
            [s.chair]: true,
            [s.vip]: c.loaiGhe === "Vip"
          })}
        >
          <p>{c.daDat ? "X" : c.tenGhe}</p>
        </div>
      );
    });

    const vipChairList = vipList.map((c) => {
      return (
        <div
          onClick={() => handleSelectChair(c.maGhe)}
          className={clsx({
            [s.chair]: true,
            [s.vip]: c.loaiGhe === "Vip"
          })}
        >
          <p>{c.daDat ? "X" : c.tenGhe}</p>
        </div>
      );
    });

    return (
      <div>
        <div className="row m-0 justify-content-between">
          <div className={`col-5 p-0 ${s.label}`}>
            Ghế thường x {normalList.length}
          </div>
          <div className={`col-6 ${s.total}`}>{normalTotalMoney} VNĐ</div>
          <div className="col-9 row m-0">{normalChairList}</div>
        </div>
        <div className="row m-0 justify-content-between mt-3">
          <div className={`col-5 p-0 ${s.label}`}>
            Ghế VIP x {vipList.length}
          </div>
          <div className={`col-6 ${s.total}`}>{vipTotalMoney} VNĐ</div>
          <div className="col-9 row m-0">{vipChairList}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    dispatch(getShowtimeInfoAction(showtimeCode));
  }, []);
  return (
    <>
      <Header />
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <section className={s.booking__section}>
        <div className={s.booking__wrapper}>
          <div className={s.booking__content}>
            <div className={`${s.main} col-xl-9 col-12`}>
              <div className={s.top}></div>
              <div className={s.bottom}>
                <div className={s.cinema__layout}>
                  <div className={s.screen}>
                    <p>SCREEN</p>
                  </div>
                  <div className={s.chair__list}>{renderChairList()}</div>
                  <div className={s.note}>
                    <div>
                      <div className={s.chair}>
                        <p>19</p>
                      </div>
                      <span>Ghế thường</span>
                    </div>
                    <div>
                      <div className={`${s.chair} ${s.vip}`}>
                        <p>09</p>
                      </div>
                      <span>Ghế VIP</span>
                    </div>
                    <div>
                      <div className={`${s.chair} ${s.selected}`}>
                        <p>94</p>
                      </div>
                      <span>Ghế đang chọn</span>
                    </div>
                    <div>
                      <div className={`${s.chair} ${s.booked}`}>
                        <p>X</p>
                      </div>
                      <span>Ghế đã đặt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${s.sub} col-xl-3 col-lg-4 col-md-5 col-12`}>
              <div className={s.sub__info}>
                <div className={`${s.info}`}>
                  <p className={s.cinema}>{showtimeInfo?.tenRap}</p>
                  <p className={s.title}>{showtimeInfo?.tenPhim}</p>
                  <p className={s.dateTime}>
                    {showtimeInfo?.ngayChieu} - {showtimeInfo?.gioChieu}
                  </p>
                </div>
              </div>
              <div className={s.selectedChair}>
                <p className={s.label}>Ghế đang chọn:</p>
                {renderSelectedChairList()}
              </div>
              <div
                className={`${s.total__money} row m-0 justify-content-between`}
              >
                <p className={`col-5 p-0 ${s.label}`}>Tổng tiền:</p>
                <div className={`col-7 ${s.total}`}>
                  {renderTotalMoney()} VNĐ
                </div>
              </div>
              <div className={s.booking}>
                <button
                  disabled={
                    chairList.filter((c) => c.selected === true).length === 0
                  }
                  className={s.btn__book}
                  onClick={handleBooking}
                >
                  Đặt vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}
    </>
  );
};

export default Booking;
