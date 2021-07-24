import React from "react";
import { useRef } from "react";

import Footer from "../componnet/footer";
import Header from "../componnet/header/header.component";
import Carousel from "../componnet/carousel/carousel.component";
import TableBlock from "../componnet/pageHome/cinemeBlock";
import HomeApp from "../componnet/pageHome/homeApp";
import HomeMovie from "../componnet/pageHome/homeMovie";
import NewBlock from "../componnet/pageHome/newBlock";

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
