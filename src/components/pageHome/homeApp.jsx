import { Button, Card, Container } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: "300",
  },
  media: {
    height: 600,
    width: 300,
  },
});
function HomeApp() {
  const classes = useStyles();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="backgroundImage">
      <div>
        <Container>
          <div className="grid">
            <div className="textApp">
              <h1>Ứng dụng tiện lợi dành cho </h1>
              <h1> người yêu điện ảnh</h1>
              <h4>Không chỉ đặt vé, bạn còn có thể bình luận phim, </h4>
              <h4> chấm điểm rạp và đổi quà hấp dẫn.</h4>

              <Button variant="contained" color="secondary">
                App miễn phí - Tải về ngay!
              </Button>
              <p>
                TIX có hai phiên bản <a href="/home">ios</a> <span>"&"</span>{" "}
                <a href="/home">Android</a>{" "}
              </p>
            </div>
            <div>
              <div className="imgApp">
                <div className="cardApp">
                  <Slider {...settings}>
                    <div>
                      <Card className={classes.root}>
                        <img
                          className={classes.media}
                          src="https://tix.vn/app/assets/img/icons/slide/slide16.jpg"
                          alt=""
                        />
                      </Card>
                    </div>
                    <div>
                      <Card className={classes.root}>
                        <img
                          className={classes.media}
                          src="https://tix.vn/app/assets/img/icons/slide/slide15.jpg"
                          alt=""
                        />
                      </Card>
                    </div>
                    <div>
                      <Card className={classes.root}>
                        <img
                          className={classes.media}
                          src="https://tix.vn/app/assets/img/icons/slide/slide4.jpg"
                          alt=""
                        />
                      </Card>
                    </div>
                    <div>
                      <Card className={classes.root}>
                        <img
                          className={classes.media}
                          src="https://tix.vn/app/assets/img/icons/slide/slide10.jpg"
                          alt=""
                        />
                      </Card>
                    </div>
                    <div>
                      <Card className={classes.root}>
                        <img
                          className={classes.media}
                          src="https://tix.vn/app/assets/img/icons/slide/slide12.jpg"
                          alt=""
                        />
                      </Card>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HomeApp;
