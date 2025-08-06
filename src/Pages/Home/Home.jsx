import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CategoryBtn from "../../Components/CategoryBtn/CategoryBtn";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";
import Heading from "../../Components/Heading/Heading";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const cardSectionRef = useRef(null);
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

  const handleViewAll = () => {
    setProducts(allProducts);
    setTimeout(() => {
      cardSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // 100ms delay to let cards render
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 " ref={cardSectionRef}>
      <Helmet>
        <title>
          Gadget Heaven | Home
        </title>
      </Helmet>
      <Banner></Banner>
      <Heading
        title={"This is Heading."}
        subTitle={"This is subTitle."}
      ></Heading>
      <div className="flex flex-col md:flex-row lg:flex-row gap-6">
        {/* Category Button Section - Left side on large screen */}
        <div className="lg:w-1/4 md:w-1/3 w-full">
          <div className="mb-6 flex flex-wrap lg:flex-col gap-3 justify-start">
            <CategoryBtn />
          </div>
        </div>

        {/* Product Card Section - Right side */}
        <div className="lg:w-3/4 w-full">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className={`flex btn btn-outline btn-success mt-4 ${
          products.length === allProducts.length ? "hidden" : ""
        }`}
        onClick={handleViewAll}
      >
        View All Cards
      </button>
    </div>
  );
};

export default Home;
