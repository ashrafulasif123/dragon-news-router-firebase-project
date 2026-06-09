import { useState } from "react";
import { useLoaderData } from "react-router";
import News from "../News/News";

const Home = () => {
  const loaderData = useLoaderData();
  const [allNews, setNews] = useState(loaderData);

  return (
    <div className="flex flex-col gap-y-4">
      {allNews.map((news) => (
        <News key={news.id} news={news}></News>
      ))}
    </div>
  );
};

export default Home;
