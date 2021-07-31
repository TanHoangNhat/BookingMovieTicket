import React from "react";
import { useRef } from "react";

import Footer from "../components/footer";
import Header from "../components/header/header.component";
import Carousel from "../components/carousel/carousel.component";
import TableBlock from "../components/pageHome/cinemeBlock";
import HomeApp from "../components/pageHome/homeApp";
import HomeMovie from "../components/pageHome/homeMovie";
import NewBlock from "../components/pageHome/newBlock";
import Films from "../components/films/films.component";
import Cinema from "../components/cinema/cinema.component";
import News from "../components/news/news.component";

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div ref={refs.TT}>
          <NewBlock />
        </div>
        <div ref={refs.UD}>
          <HomeApp />
        </div>
        <Footer /> */}
    </>
  );
}

export default Home;
