import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Categories from "./Categories";
import About from "./About";
import PopularMenu from "./PopularMenu";
import SectionTitle from "../../Components/SectionTitle";
import CallUs from "./CallUs";
import useMenu from "../../Hooks/useMenu";
import { Helmet } from "react-helmet";

function Home() {
  const menu = useMenu();
  const menus = menu.filter((item) => item.category == "popular");
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Slider />
      <div className="w-3/4 mx-auto mt-10">
        <Categories />
        <About />
        <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />
        <div className="grid grid-cols-2 gap-8 my-10">
          {menus.map((item) => (
            <PopularMenu key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center mb-10">
          <button className="btn btn-secondary">View Full Menu</button>
        </div>
        <CallUs />
        <div className="mb-10">
          <SectionTitle heading={"Should Try"} subHeading={"Should Try"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
