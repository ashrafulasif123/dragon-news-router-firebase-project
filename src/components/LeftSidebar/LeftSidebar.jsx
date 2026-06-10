const LeftSidebar = ({ categories, activeCategory, setActiveCategory }) => {

  const handleCategory = () => {
    setActiveCategory(name)
  }

  return (
    <div className="flex flex-col items-start mt-5">
      {categories.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => handleCategory}
          className={`pl-2 py-3 w-full text-left cursor-pointer ${activeCategory === name ? "bg-gray-200" : ""
            }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default LeftSidebar;
