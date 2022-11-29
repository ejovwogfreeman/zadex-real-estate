import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import HeaderComp from "../components/HeaderComp";
import AboutGrid from "../components/AboutGrid";
import Slider from "../components/Slider";
import Grid from "../components/Grid";
import Grid2 from "../components/Grid2";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <HeaderComp />
      <AboutGrid />
      <Grid />
      <Slider />
      <Grid2 />
    </div>
  );
};

export default Home;
