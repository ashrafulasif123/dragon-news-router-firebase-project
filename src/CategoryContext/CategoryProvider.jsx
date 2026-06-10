import { useEffect, useState } from "react";
import { CategoryContext } from "./CategoryContext";

const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("Sports");
  const [allNews, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  const handleCategoryNews = (name) => {
    setActiveCategory(name);
  };
  const categoryInfo = {
    activeCategory,
    setActiveCategory,
    allNews,
    handleCategoryNews,
  };
  return <CategoryContext value={categoryInfo}>{children}</CategoryContext>;
};

export default CategoryProvider;
