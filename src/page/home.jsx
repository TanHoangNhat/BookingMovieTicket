import React from "react";
import { useRef } from "react";

import Footer from "../components/footer";
import Header from "../components/header/header.component";
import Carousel from "../components/carousel/carousel.component";
import TableBlock from "../components/pageHome/cinemeBlock";
import HomeApp from "../components/pageHome/homeApp";
import HomeMovie from "../components/pageHome/homeMovie";
import NewBlock from "../components/pageHome/newBlock";

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
    <div>
      <Header handleClick={handleClick} />
      <Carousel />
      <h1>gggggggggggggggggggggggggg</h1>
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
      {/* <div ref={refs.LC}>
        <HomeMovie />
      </div>
      <div ref={refs.CR}>
        <TableBlock />
      </div>
      <div ref={refs.TT}>
        <NewBlock />
      </div>
      <div ref={refs.UD}>
        <HomeApp />
      </div>
      <Footer /> */}
    </div>
  );
}

export default Home;
