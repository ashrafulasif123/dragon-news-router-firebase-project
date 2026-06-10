import Header from "../Header/Header";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Outlet } from "react-router";


const newRoot = () => {

    return (
        <div className="max-w-300 mx-auto">
            <Header></Header>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="col-span-3">
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

export default newRoot;
