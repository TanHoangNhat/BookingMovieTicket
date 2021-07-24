import React from "react";
import Slider from "react-slick";
import HomeTool from "./homeTool";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
export default function Carousel() {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings} className="carousel container-fluid">
        <div className="banTayDietQuy"></div>
        <div className="trangTi"></div>
        <div className="latMat"></div>
      </Slider>
      <HomeTool />
    </div>
  );
}
