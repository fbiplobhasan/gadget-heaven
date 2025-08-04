import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToCart, addToWishList } from "../../Utils/Utilities";

const ProductDetails = () => {
  const allProducts = useLoaderData();
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const product = allProducts.find((prdct) => prdct.id === parseInt(id));
    setProducts(product);
  }, [allProducts, id]);
  // এভাবেও করা যায় ==(1)
  // const product = allProducts.find((item) => item.id === parseInt(id));
  // এভাবেও করা যায় ==(2)
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  // const product = allProducts.find((prdct) => prdct.id === parseInt(id));
  // setProducts(product);
  // }, [allProducts, id]);}
  const { details, rating, image, price, category, name } = products || {};

  const handleProduct = (product) => {
    addToCart(product);
    navigate('/')
  };

  const handleWish = (product) => {
    addToWishList(product);
    navigate('/')
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 md:flex gap-6">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={name}
            className="rounded-lg w-full object-cover max-h-96"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-500">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-gray-700">{details}</p>
          <p className="text-lg font-semibold text-green-600">
            Price: ${price}
          </p>
          <p className="text-yellow-500 font-medium">Rating: ⭐ {rating}</p>
          <div className="flex gap-3">
            <button
              onClick={() => handleProduct(products)}
              className="btn btn-success mt-4"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleWish(products)}
              className="btn btn-success mt-4"
            >
              Add to Wish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
