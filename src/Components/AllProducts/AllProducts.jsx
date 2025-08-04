import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const AllProducts = () => {
  const allProducts = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  return (
    <div>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
        <Card key={idx} product={product}></Card>
      ))}
      </div>
    </div>
  );
};

export default AllProducts;
