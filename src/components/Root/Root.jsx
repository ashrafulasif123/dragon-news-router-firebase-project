import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Marquee from "../Marquee/Marquee";
import Navbar from "../Navbar/Navbar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Outlet } from "react-router";
// import button from "daisyui/components/button";

const Root = () => {
  const [activeCategory, setActiveCategory] = useState("Sports");
  //   const loaderData = useLoaderData();
  //   const [news, setNews] = useState(loaderData);
  //   console.log(news);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="max-w-300 mx-auto">
      <Header></Header>
      <Marquee></Marquee>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {/* 1st = 1 column */}
        <div className="col-span-1">
          <LeftSidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          ></LeftSidebar>
        </div>

        {/* 2nd = 2 columns */}
        <div className="col-span-2">
          <Outlet />
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
