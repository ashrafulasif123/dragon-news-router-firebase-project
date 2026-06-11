import { use } from "react";
import { useLoaderData } from "react-router";
import News from "../News/News";
import { CategoryContext } from "../../CategoryContext/CategoryContext";

const Home = () => {
  // const loaderData = useLoaderData();
  //   const [allNews, setNews] = useState(loaderData);
  const { filteredNews, emptyNews } = use(CategoryContext);


  //   let filteredNews;
  //   if (activeCategory === "ALL News") {
  //     filteredNews = loaderData;
  //   } else {
  //     filteredNews = loaderData.filter((news) => news.name === activeCategory);
  //   }

  return (
    <div className="flex flex-col gap-y-4">
      {emptyNews ? (
        <div className="flex flex-col items-center justify-center py-10 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-600 text-lg font-semibold">
            No News Found
          </h2>
          <p className="text-red-500 text-sm mt-1">
            Try another category.
          </p>
        </div>
      ) : (
        filteredNews?.map((news) => (
          <News key={news.id} news={news} />
        ))
      )}
    </div>
  );
};

export default Home;
