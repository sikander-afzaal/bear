/** @format */

import styled from "styled-components";
import Mintbg from "../../images/bgMint.jpg";
const Wrapper = styled.nav`
  background-image: url(${Mintbg});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
  min-height: 100vh;
  .countDown {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    margin: 50px 0px;
    width: 100%;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 50px;
    }
    .mint-now {
      position: relative;
      border-radius: 0 !important;
      background: transparent !important;
      border: 2px solid #9e179a;
      color: white !important;
      line-height: 47px !important;
      transition: 0.5s ease-in-out;
      width: 100%;
      max-width: 300px;
      font-size: 20px;
      cursor: pointer;
      @media (max-width: 442px) {
        max-width: 220px;
      }
    }
    .calc {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;
      width: 100%;
      @media (max-width: 900px) {
        justify-content: center;
        gap: 30px;
      }
      @media (max-width: 442px) {
        flex-direction: column;
      }
      & button,
      & div {
        max-width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        cursor: pointer;
      }
      & button {
        font-size: 30px;
      }
    }
    .mint-now:hover {
      background-color: #9e179a !important;
      border: 2px solid #9e179a;
      color: white;
    }
    .mint-now:before {
      content: "";
      position: absolute;
      top: 12px;
      right: -44px;
      width: 63px;
      height: 93px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      background: #0f1432;
      display: inline-block;
      user-select: none;
    }

    .mint-now:after {
      content: "";
      position: absolute;
      top: 35px;
      right: -7px;
      width: 35px;
      height: 2px;
      background: #9e179a;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(134deg);
      -ms-transform: rotate(134deg);
      transform: rotate(134deg);
    }
    .mint-button::before {
      content: "";
      position: absolute;
      top: -35px;
      right: auto;
      width: 63px;
      height: 43px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      background: #0f1432;
      display: inline-block;
      left: -43px;
    }
    .mint-button::after {
      content: "";
      position: absolute;
      top: 9px;
      right: auto;
      width: 32px;
      height: 2px;
      background: #9e179a;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(134deg);
      -ms-transform: rotate(134deg);
      -webkit-transform: rotate(134deg);
      -ms-transform: rotate(134deg);
      transform: rotate(134deg);
      left: -5px;
    }
  }
  .mint {
    /* padding: 0 20px; */
    padding-top: 220px;
  }
  .container {
    padding: 0 30px;

    @media (max-width: 900px) {
      & > .row {
        width: 100%;
        margin: 0px;
      }
    }
  }
  .CounterUp {
    display: flex;
    align-items: center;
    column-gap: 80px;
  }
  .client {
  }

  .client h1 {
    font-size: 32px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #ff01de;
  }
  .counterUpText {
    font-size: 19px;
    font-weight: 300;
    letter-spacing: 1px;
    display: block;
    color: white;
  }
  .swiper {
    @media (max-width: 580px) {
      height: 400px;
    }
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    height: 330px;
    transition: 0.5s ease-in-out;
    @media (max-width: 580px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .swiper-slide .image-wrapper {
    position: relative;
    clip-path: polygon(
      20% 0%,
      100% 0,
      100% 30%,
      100% 80%,
      80% 100%,
      0 100%,
      0 100%,
      0% 20%
    );
    width: 254px;
    height: 254px;
    background: #ff01de;
    box-sizing: border-box;
  }
  .swiper-slide img {
    clip-path: polygon(
      20% 0%,
      100% 0,
      100% 30%,
      100% 80%,
      80% 100%,
      0 100%,
      0 100%,
      0% 20%
    );
    position: absolute;
    top: 1.5px; /* equal to border thickness */
    left: 1.5px; /* equal to border thickness */
    width: 251px; /* container height - (border thickness * 2) */
    height: 251px; /* container height - (border thickness * 2) */
  }
  .swiper-slide-active {
    transform: translate(10px, 60px);
  }
  .swiper-pagination-bullet {
    background-color: white;
    width: 15px;
    height: 15px;
    background-color: white;
    opacity: 0.8;
  }
  .swiper-pagination-bullet-active {
    position: relative;

    background-color: #ff01de;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 40px;
    left: auto;
    width: 80%;
    right: 0;
  }
  .flip-countdown .flip-countdown-piece .flip-countdown-card {
    display: flex;
    margin-bottom: 15px;
  }
  .flip-countdown {
    text-align: left;
    flex: 0 0 78%;
    max-width: 60%;

    margin: 0;
    background: #222;
    background-image: -webkit-linear-gradient(top, #222, #333, #333, #222);
    background-image: -moz-linear-gradient(top, #222, #333, #333, #222);
    background-image: -ms-linear-gradient(top, #222, #333, #333, #222);
    background-image: -o-linear-gradient(top, #222, #333, #333, #222);
    border: 1px solid #111;
    border-radius: 5px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);

    padding: 15px 13px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    margin: 40px 0px;
  }
  .flip-countdown.size-medium .flip-countdown-piece {
    margin: -5 0.2em;
    text-align: center;
  }
  .flip-countdown.size-medium .flip-countdown-piece .flip-countdown-title {
    text-align: center;
    font-size: 16px;
  }
  @media (max-width: 1192px) {
    .flip-countdown.size-medium
      .flip-countdown-piece
      .flip-countdown-card
      .flip-countdown-card-sec {
      font-size: 53px;
    }
    .flip-countdown {
      margin: 10px 0px;
    }
  }
  @media (max-width: 992px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-md-7 {
      flex: 0 0 auto;
      width: 100%;
    }
    .col-md-5 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .swiper-slide {
      height: 420px;
    }
  }
  @media (max-width: 575.98px) {
    .swiper-slide {
      height: 220px;
    }
    .fRzeRr .swiper-horizontal > .swiper-pagination-bullets,
    .fRzeRr .swiper-pagination-bullets.swiper-pagination-horizontal,
    .fRzeRr .swiper-pagination-custom,
    .fRzeRr .swiper-pagination-fraction {
      bottom: 40px;
      left: auto;
      width: 80%;
      right: -20px;
    }
    .flip-countdown {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .flip-countdown.size-medium
      .flip-countdown-piece
      .flip-countdown-card
      .flip-countdown-card-sec {
      font-size: 33px;
    }
    .fRzeRr
      .flip-countdown.size-medium
      .flip-countdown-piece
      .flip-countdown-title {
      text-align: center;
      font-size: 11px;
    }
    .CounterUp {
      flex-wrap: wrap;

      @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 0px;
        place-items: center;
        margin-top: 20px;
      }
    }
    .client {
      margin-bottom: 20px;
      @media (max-width: 900px) {
        & h1 span:last-of-type {
          font-size: 14px;
        }
      }
    }
  }
  .mintBanner {
    position: absolute;
    top: 50%;
    width: 100%;
    left: 0;
    right: 0;
    transform: translate(0, -35%);
    background-image: none;
    padding: 0;
    @media (max-width: 992px) {
      position: relative;
      top: 0;
      transform: translate(0, 0);
      padding: 160px 0px 80px 0px;
    }
    @media (max-width: 580px) {
      padding-top: 60px;
    }
  }
  .mintBannerText {
    @media (max-width: 900px) {
      & > div {
        width: 100%;
        max-width: none;

        & > p span {
          dispaly: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 23px !important;
        }
      }
    }
    .mintBannerText h2 {
      margin-bottom: 20px;
    }
  }
  .img {
    border: 2px solid #ff01de;
  }
  .flip-countdown.size-medium
    .flip-countdown-piece
    .flip-countdown-card
    .flip-countdown-card-sec {
    font-size: 40px;
  }
  .col-md-10 {
    padding-left: 0px;
  }
`;
export default Wrapper;
