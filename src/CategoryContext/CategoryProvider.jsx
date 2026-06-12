import { useEffect, useState } from "react";
import { CategoryContext } from "./CategoryContext";

const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("Sports");
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [emptyNews, setEmptyNews] = useState(false);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  useEffect(() => {
    const filtered =
      activeCategory === "All News"
        ? newsData
        : newsData.filter((news) => news.name === activeCategory);
    if (filtered.length > 0) {
      setFilteredNews(filtered);
      setEmptyNews(false);
    } else {
      setFilteredNews([]);
      setEmptyNews(true);
    }
  }, [activeCategory, newsData]);

  const categoryInfo = {
    activeCategory,
    setActiveCategory,
    filteredNews,
    emptyNews,
  };
  return <CategoryContext value={categoryInfo}>{children}</CategoryContext>;
};

export default CategoryProvider;
