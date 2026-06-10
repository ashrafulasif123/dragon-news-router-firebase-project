import { Link } from "react-router";

const News = ({ news }) => {
  const {
    id,
    thumbnail_url,
    badge,
    total_view,
    title,
    img,
    published_date,
    tags,
    details,
  } = news;
  return (
    <Link to={`newsDetails/${id}`}>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Image */}
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          {/* Top info */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              {badge}
            </span>

            <span className="text-xs text-gray-500">👁 {total_view}</span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
            {title}
          </h2>

          {/* Author */}
          <div className="flex items-center gap-3 mb-3">
            <img src={img} className="w-8 h-8 rounded-full" alt={name} />
            <div>
              <p className="text-sm font-medium text-gray-700">{name}</p>
              <p className="text-xs text-gray-500">
                {new Date(published_date).toDateString()}
              </p>
            </div>
          </div>

          {/* Details */}
          <p className="text-sm text-gray-600 line-clamp-3">{details}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default News;
