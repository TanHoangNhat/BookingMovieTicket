import React, { useEffect } from "react";
import { useRef } from "react";

import Header from "../components/header/header.component";
import Carousel from "../components/carousel/carousel.component";
import Films from "../components/films/films.component";
import Cinema from "../components/cinema/cinema.component";
import News from "../components/news/news.component";
import Application from "../components/application/application.component";
import Footer from "../components/footer/footer.component";
import Loader from "../components/loader/loader.component";
import { useDispatch, useSelector } from "react-redux";
import { stopLoadingAction } from "../store/action/common.action";

function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.common.isLoading);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(stopLoadingAction());
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Carousel />
          <Films />
          <Cinema />
          <News />
          <Application />
          <Footer />
        </>
      )}

      {/* <Loader /> */}
      {/* <Header /> */}
      {/* <Carousel /> */}
      {/* <Films /> */}
      {/* <Cinema /> */}
      {/* <News /> */}
      {/* <Application /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
