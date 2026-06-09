import { useState } from "react";
import Header from "../Header/Header";
import Marquee from "../Marquee/Marquee";
import Navbar from "../Navbar/Navbar";
// import button from "daisyui/components/button";


const Root = () => {
    const [activeCategory, setActiveCategory] = useState("Sports")

    const categories = [
        "Sports",
        "Politics",
        "Technology",
        "Business",
        "Entertainment",
        "Health",
    ];
    return (
        <div className="max-w-300 mx-auto">
            <Header></Header>
            <Marquee></Marquee>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">

                {/* 1st = 1 column */}
                <div className="col-span-1">
                    <div className="flex flex-col items-start">
                        {
                            categories.map(category => (
                                <button onClick={() => setActiveCategory(category)} className={`pl-2 py-3 w-full text-left cursor-pointer ${activeCategory === category ? "bg-gray-200" : ""}`}>{category}</button>
                            ))
                        }
                    </div>
                </div>

                {/* 2nd = 2 columns */}
                <div className="col-span-2 bg-blue-100 p-4">
                    Middle (Main Content)
                </div>

                {/* 3rd = 1 column */}
                <div className="col-span-1 bg-green-100 p-4">
                    Right
                </div>

            </div>

        </div>
    );
};

export default Root;