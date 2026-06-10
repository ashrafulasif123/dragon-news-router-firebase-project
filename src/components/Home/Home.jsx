import { use, useState } from "react";
import { useLoaderData } from "react-router";
import News from "../News/News";
import { CategoryContext } from "../../CategoryContext/CategoryContext";

const Home = () => {
  const loaderData = useLoaderData();
  const [allNews, setNews] = useState(loaderData);
  const { activeCategory } = use(CategoryContext)
  // const categoryWiseNews = allNews.filter(categoryNews => categoryNews.name === activeCategory)

  return (
    <div className="flex flex-col gap-y-4">
      {allNews.map((news) => (
        <News key={news.id} news={news}></News>
      ))}
    </div>
  );
};

export default Home;
