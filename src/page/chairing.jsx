import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookingChair, getListChair } from "../store/action/cinema.action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CHOISE_CHAIR } from "../store/constant/cinema.constant";

const useStyle = makeStyles({
  not_pick: {
    backgroundColor: "#12d",
    "&:hover": "#23dd"
  },
  pick: {
    backgroundColor: "#2ddd",
    "&:hover": "#2dd"
  }
});

function Chairing() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { maLichChieu } = useParams();
  useEffect(() => {
    dispatch(getListChair(maLichChieu));
  }, [dispatch, maLichChieu]);
  const listChair = useSelector((state) => {
    return state.booking?.list_chair?.danhSachGhe;
  });
  let count = 0;
  listChair?.map((chair, index) => {
    return count++;
  });
  const list1 = listChair?.slice(0, count / 2);
  const list2 = listChair?.slice(count / 2, count);
  console.log(list1);
  console.log(list2);

  let listChairPick = useSelector((state) => {
    const DSPick = state.booking?.list_chair?.danhSachGhe;
    return DSPick?.filter((chair) => chair.onPick);
  });

  const handleChair = (chair) => {
    dispatch({
      type: CHOISE_CHAIR,
      payload: chair
    });
  };
  const handleBooking = () => {
    dispatch(BookingChair(maLichChieu, listChairPick));
  };

  useEffect(() => {
    console.log("TEST UPDATE ======");
  });

  const renderListChair1 = () => {
    return list1?.map((chair, index) => {
      return (
        <Button
          key={index}
          className={chair.onPick ? classes.pick : classes.not_pick}
          onClick={() => handleChair(chair)}
          disabled={chair.daDat}
          variant="contained"
          color={chair.daDat ? "" : "primary"}
        >
          {chair.tenGhe}s
        </Button>
      );
    });
  };
  const renderListChair2 = () => {
    return list2?.map((chair, index) => {
      return (
        <Button
          key={index}
          className={chair.onPick ? classes.pick : classes.not_pick}
          onClick={() => handleChair(chair)}
          disabled={chair.daDat}
          variant="contained"
          color={chair.daDat ? "" : "primary"}
        >
          {chair.tenGhe}s
        </Button>
      );
    });
  };
  return (
    <>
      <div className="row">
        <div className="col"> {renderListChair1()}</div>
        <div className="col">{renderListChair2()}</div>
      </div>
      <div
        className="StyleTableBooking"
        style={{ textAlign: "center", margin: "30px" }}
      >
        <Button
          className={classes.pick}
          variant="contained"
          onClick={() => handleBooking()}
        >
          Booking
        </Button>
      </div>
    </>
  );
}

export default Chairing;
