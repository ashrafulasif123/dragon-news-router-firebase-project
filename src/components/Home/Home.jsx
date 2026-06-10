import { use } from "react";
import { useLoaderData } from "react-router";
import News from "../News/News";
import { CategoryContext } from "../../CategoryContext/CategoryContext";

const Home = () => {
  const loaderData = useLoaderData();
  //   const [allNews, setNews] = useState(loaderData);
  const { activeCategory } = use(CategoryContext);
  console.log(activeCategory);

  //   let filteredNews;
  //   if (activeCategory === "ALL News") {
  //     filteredNews = loaderData;
  //   } else {
  //     filteredNews = loaderData.filter((news) => news.name === activeCategory);
  //   }

  return (
    <div className="flex flex-col gap-y-4">
      {filteredNews.map((news) => (
        <News key={news.id} news={news}></News>
      ))}
    </div>
  );
};

export default Home;
