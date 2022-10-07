import React from "react";
import Wrapper from "./MintBanner.styled";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SliderImg from "../../images/slider.png";
import SliderImg2 from "../../images/slider2.png";
import SliderImg3 from "../../images/AliS.png";
import SliderImg4 from "../../images/Legion.png";

import FlipCountdown from "@rumess/react-flip-countdown";
import { useState } from "react";
function MintBanner() {
  const [counterVal, setCounterVal] = useState(1);
  return (
    <Wrapper>
      <div className="mint mintBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="mintBannerSingleItem">
                <div className="mintBannerText">
                  <div className="col-md-10">
                    <p>
                      <span style={{ fontSize: "30px" }}>
                        {" "}
                        MINT NOW WITH{" "}
                        <span style={{ fontSize: "37px" }}>
                          {" "}
                          YES BEAR{" "}
                        </span>{" "}
                      </span>{" "}
                      <br /> <br />
                      Yes Bear is a unique pixelated NFT collection featuring
                      distinctive and powerful traits br that live on the
                      Ethereum blockchain (ERC-721). Yes Bears spark joy in
                      others during the Bear market. When life hands you lovable
                      bears, say yes!
                    </p>
                  </div>
                </div>

                {/* mint now count dow */}
                <div className="countDown">
                  {/* <FlipCountdown
                    hideYear
                    hideMonth
                    endAt={"2022-12-25 12:00:00"} // Date/Time
                    dayTitle="Days"
                    hourTitle="Hours"
                    minuteTitle="Minutes"
                    secondTitle="Seconds"
                    titlePosition="bottom"
                  /> */}

                  <div className="calc">
                    <div className="mint-wrap">
                      <button
                        onClick={() => {
                          setCounterVal((prev) => {
                            if (prev > 1) {
                              return prev - 1;
                            } else {
                              return prev;
                            }
                          });
                        }}
                        className="mint-now"
                      >
                        -
                      </button>
                    </div>
                    <div className="mint-wrap">
                      <div className="mint-now">{counterVal}</div>
                    </div>
                    <div className="mint-wrap">
                      <button
                        onClick={() => {
                          setCounterVal((prev) => {
                            if (prev < 10) {
                              return prev + 1;
                            } else {
                              return prev;
                            }
                          });
                        }}
                        className="mint-now"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mint-wrap">
                    {" "}
                    <button className="mint-now">Mint Now</button>
                  </div>
                </div>
                {/* mint now count down end here */}

                <div className="CounterUp">
                  {/* single item */}
                  <div className="client">
                    <h1>
                      {" "}
                      <CountUp end={30} />
                      <span>k+</span>
                      <span className="counterUpText">Clients</span>
                    </h1>
                  </div>
                  {/* single item end */}
                  {/* single item */}
                  <div className="client">
                    <h1>
                      {" "}
                      <CountUp end={5} />
                      <span>k+</span>
                      <span className="counterUpText">NFT Art</span>
                    </h1>
                  </div>
                  {/* single item end */}
                  {/* single item */}
                  <div className="client">
                    <h1>
                      {" "}
                      <CountUp end={100} />
                      <span>+</span>
                      <span className="counterUpText">Collaborations</span>
                    </h1>
                  </div>
                  {/* single item end */}
                </div>
              </div>
            </div>
            <div className=" col-md-5 ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  580: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg2} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg3} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg4} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MintBanner;
