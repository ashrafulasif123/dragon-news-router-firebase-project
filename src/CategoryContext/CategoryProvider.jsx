import { useEffect, useState } from "react";
import { CategoryContext } from "./CategoryContext";

const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [allNews, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([])
  const [emptyNews, setEmptyNews] = useState(false)

  useEffect(() => {
    fetch("news.json")
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setFilteredNews(data);
      });
  }, []);

  const handleCategoryNews = (name, id) => {
    console.log(name, id)
    setActiveCategory(name);

    if (name === "All News") {
      setFilteredNews(allNews);
      setEmptyNews(false);
      return;
    }

    const filtered = allNews.filter(item => item.category_id === id);

    if (filtered.length > 0) {
      setFilteredNews(filtered);
      setEmptyNews(false);
    } else {
      setFilteredNews([]);
      setEmptyNews(true);
    }
  };
  const categoryInfo = {
    activeCategory,
    setActiveCategory,
    allNews,
    handleCategoryNews,
    filteredNews,
    emptyNews
  };
  return <CategoryContext value={categoryInfo}>{children}</CategoryContext>;
};

export default CategoryProvider;
