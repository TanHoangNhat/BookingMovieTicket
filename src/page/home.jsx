import React from "react";
import { useRef } from "react";

import Header from "../components/header/header.component";
import Carousel from "../components/carousel/carousel.component";
import Films from "../components/films/films.component";
import Cinema from "../components/cinema/cinema.component";
import News from "../components/news/news.component";
import Application from "../components/application/application.component";
import Footer from "../components/footer/footer.component";

function Home() {
  const refs = {
    LC: useRef(null),
    CR: useRef(null),
    TT: useRef(null),
    UD: useRef(null)
  };

  const handleClick = (params) => {
    tr(refs[params]);
  };
  const tr = (params) => {
    params.current.scrollIntoView();
  };
  return (
    <>
      <Header handleClick={handleClick} />
      <Carousel />
      <Films r={refs.LC} />
      <Cinema r={refs.CR} />
      <News r={refs.TT} />
      <Application r={refs.UD} />
      <Footer />
    </>
  );
}

export default Home;
