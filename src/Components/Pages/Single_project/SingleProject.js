import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SPC from "../../Card/SingleProjectC/SPC1/SPC";
import SPC2 from "../../Card/SingleProjectC/SPC2/SPC2";
const SingleProject = () => {
  return (
    <>
      <Navbar />
      <SPC2 />
      <SPC />
      <Footer />
    </>
  );
};

export default SingleProject;
