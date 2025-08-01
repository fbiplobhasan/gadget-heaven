import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const CategoryBtn = () => {
  const categoryBtn = useLoaderData();
  return (
    <div>
      {categoryBtn.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.id}
          className="w-full btn btn-outline btn-success text-left px-4 py-2 hover:bg-blue-400 rounded mb-2"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryBtn;
