import { useState } from "react";
import { CategoryContext } from "./CategoryContext";

const CategoryProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState("Sports");
    const handleCategory = () => {

    }
    const categoryInfo = {
        activeCategory,
        setActiveCategory,
        handleCategory
    }
    return (
        <CategoryContext value={categoryInfo}>
            {children}
        </CategoryContext>
    );
};

export default CategoryProvider;