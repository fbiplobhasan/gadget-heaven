import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { details, id, rating, image, price, category, name } = product || {};

  return (
    <Link to={`/productDetails/${id}`}>
      <div
        className="bg-white rounded-2xl shadow-md p-4 flex flex-col
                   transition-all duration-300 transform
                   hover:-translate-y-2 hover:scale-105
                   hover:bg-blue-50 hover:shadow-2xl"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-48 md:h-52 lg:h-60 object-cover rounded-xl mb-4 transition duration-300"
        />

        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
          {name}
        </h2>

        <p className="text-sm text-gray-600 mb-1 capitalize">
          <span className="font-medium text-gray-700">Category:</span> {category}
        </p>

        <p className="text-sm md:text-base text-green-600 font-semibold">
          Price: ${price}
        </p>

        <div className="flex items-center gap-1 mt-auto pt-2">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
