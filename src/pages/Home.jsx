import React from "react";
// import Header from "../components/Header";
import About from "../components/About";
import News from "../components/News";
import ScrollToTop from "../components/ScrollToTop";
import HeaderComp from "../components/HeaderComp";
import Slider from "../components/Slider";
import Grid from "../components/Grid";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <HeaderComp />
      <About />
      <Grid />
      <Slider />
      <Grid />
      <News />
    </div>
  );
};

export default Home;
