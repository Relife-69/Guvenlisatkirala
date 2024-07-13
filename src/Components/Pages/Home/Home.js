import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import HF2 from "../../Frames/HomeFrame/HFrame2/HF2";
import HF3 from "../../Frames/HomeFrame/HFrame3/HF3";
import HF7 from "../../Frames/HomeFrame/HFrame7/HF7";
// import HF8 from "../../Frames/HomeFrame/HFrame8/HF8";
import HF from "../../Frames/HomeFrame/HFrame/HF";
import Slider from "../../Slider/Slider";
import Banner from "../../Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HF />
      <HF2 />
      <HF3 />
      <Slider />
      <Slider />
      <HF7 />
      {/* <HF8 /> */}
      <Footer />
    </>
  );
};

export default Home;
