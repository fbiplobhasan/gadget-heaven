import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const AllProducts = () => {
  const allProducts = useLoaderData();
  return (
    <div>
      {
        allProducts.map((product,idx) => <Card key={idx} product={product}></Card>)
      }
    </div>
  );
};

export default AllProducts;
