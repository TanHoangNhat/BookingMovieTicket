import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { CardMedia, Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyItems: "center",
  },
}));
export default function NewBlock() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Container>
        <TabContext value={value}>
          <AppBar position="static">
            <TabList onChange={handleChange} aria-label="simple tabs example">
              <Tab label="ĐIỆN ẢNH 24H" value="1" />
              <Tab label="REVIEW" value="2" />
              <Tab label="KHUYẾN MÃI" value="3" />
            </TabList>
          </AppBar>
          <TabPanel value="1">
            <div container className="aboutGrid1">
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png"
                />
                <h3>
                  Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật
                  Mặt: 48H đậm chất{" "}
                </h3>
                <p>
                  Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
                  đuổi gay cấn thót tim fans hâm mộ
                </p>
              </div>
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
                />
                <h3>
                  [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN
                  ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM{" "}
                </h3>
                <p>
                  Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood
                  cũng không thiếu những tác phẩm đình đám được chuyển thể từ
                  tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện
                  tử.{" "}
                </p>
              </div>
            </div>
            <div container className="aboutGrid2">
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                />
                <h3>
                  PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                  màn trả thù đàn ông để đời
                </h3>
                <p>
                  Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                  mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                  nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô
                  Gái Trẻ Hứa Hẹn).
                </p>
              </div>
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                />
                <h3>
                  VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                  QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                </h3>
                <p>
                  Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                  năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                  Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn
                  sẽ làm cho hội chị em phải mê mẩn vào tháng tới.
                </p>
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                    class="imageChild"
                  />
                  <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                    class="imageChild"
                  />
                  <h5>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h5>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                    class="imageChild"
                  />
                  <h5>
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                    chiếu{" "}
                  </h5>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                    class="imageChild"
                  />
                  <h5>
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                    PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                  </h5>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div container className="aboutGrid1">
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                />
                <h3>
                  Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật
                  Mặt: 48H đậm chất{" "}
                </h3>
                <p>
                  Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
                  đuổi gay cấn thót tim fans hâm mộ
                </p>
              </div>
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                />
                <h3>
                  [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN
                  ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM{" "}
                </h3>
                <p>
                  Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood
                  cũng không thiếu những tác phẩm đình đám được chuyển thể từ
                  tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện
                  tử.{" "}
                </p>
              </div>
            </div>
            <div container className="aboutGrid2">
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                />
                <h3>
                  PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                  màn trả thù đàn ông để đời
                </h3>
                <p>
                  Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                  mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                  nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô
                  Gái Trẻ Hứa Hẹn).
                </p>
              </div>
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                />
                <h3>
                  VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                  QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                </h3>
                <p>
                  Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                  năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                  Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn
                  sẽ làm cho hội chị em phải mê mẩn vào tháng tới.
                </p>
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png"
                    class="imageChild"
                  />
                  <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                    class="imageChild"
                  />
                  <h5>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h5>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                    class="imageChild"
                  />
                  <h5>
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                    chiếu{" "}
                  </h5>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/03/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                    class="imageChild"
                  />
                  <h5>
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                    PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                  </h5>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div container className="aboutGrid1">
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg"
                />
                <h3>
                  Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật
                  Mặt: 48H đậm chất{" "}
                </h3>
                <p>
                  Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
                  đuổi gay cấn thót tim fans hâm mộ
                </p>
              </div>
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                />
                <h3>
                  [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN
                  ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM{" "}
                </h3>
                <p>
                  Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood
                  cũng không thiếu những tác phẩm đình đám được chuyển thể từ
                  tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện
                  tử.{" "}
                </p>
              </div>
            </div>
            <div container className="aboutGrid2">
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                />
                <h3>
                  PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                  màn trả thù đàn ông để đời
                </h3>
                <p>
                  Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                  mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                  nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô
                  Gái Trẻ Hứa Hẹn).
                </p>
              </div>
              <div>
                <CardMedia
                  component="img"
                  image="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                />
                <h3>
                  VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                  QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                </h3>
                <p>
                  Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                  năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                  Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn
                  sẽ làm cho hội chị em phải mê mẩn vào tháng tới.
                </p>
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                    class="imageChild"
                  />
                  <h5>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h5>
                </div>
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                    class="imageChild"
                  />
                  <h5>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h5>
                </div>
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                    class="imageChild"
                  />
                  <h5>
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                    chiếu{" "}
                  </h5>
                </div>
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    image="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                    class="imageChild"
                  />
                  <h5>
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                    PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                  </h5>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}
