import React from "react";
import SliderSideBar from "./SliderSideBar";
import MainSlider from "./MainSlider";

const Slider = () => {
  return (
    <section className="px-5 md:px-20 grid grid-cols-12">
      <SliderSideBar />
      <MainSlider />
    </section>
  );
};

export default Slider;
