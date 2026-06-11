import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Marquee from "../Marquee/Marquee";
import Navbar from "../Navbar/Navbar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  // const [activeCategory, setActiveCategory] = useState("Sports");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const navigation = useNavigation();

  return (
    <div className="max-w-300 mx-auto relative min-h-screen">
      <Header></Header>
      <Marquee></Marquee>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {/* 1st = 1 column */}
        <div className="col-span-1">
          <LeftSidebar categories={categories}></LeftSidebar>
        </div>

        {/* 2nd = 2 columns */}
        <div className="col-span-2">
          {navigation.state === "loading" ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="loading loading-spinner text-error w-[50px] h-[50px]"></span>
            </div>
          ) : (
            <Outlet />
          )}
        </div>

        {/* 3rd = 1 column */}
        <div className="col-span-1">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Root;
