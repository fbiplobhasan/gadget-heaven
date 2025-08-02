import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import CategoryBtn from "../../Components/CategoryBtn/CategoryBtn";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";
import Heading from "../../Components/Heading/Heading";

const Home = () => {
  const allProducts = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...allProducts].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(allProducts.slice(0, 6));
    }
  }, [allProducts, category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Banner></Banner>
      <Heading
        title={"This is Heading."}
        subTitle={"This is subTitle."}
      ></Heading>
      {/* Category Button Section */}
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        <CategoryBtn />
      </div>

      {/* Products Card Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <Card product={product} />
          </div>
        ))}
      </div>
      {products.length < 12 && (
        <button
          onClick={() => setProducts(allProducts)}
          className="flex btn btn-outline btn-success mt-4"
        >
          View All Cards
        </button>
      )}
    </div>
  );
};

export default Home;
