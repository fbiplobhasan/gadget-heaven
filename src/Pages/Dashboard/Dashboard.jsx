import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation } from "react-router-dom";
import dashboardImg from "/images/dashboard-banner.jpg";
import gsap from "gsap";

const Dashboard = () => {
  const [cartData, setCartData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [sort, setSort] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    const cartItems = stored ? JSON.parse(stored) : [];
    setCartData(cartItems);

    const storedWish = localStorage.getItem("wishItems");
    const wishItems = storedWish ? JSON.parse(storedWish) : [];
    setWishData(wishItems);
  }, []);

  const currentData = pathname === "/cart" ? cartData : wishData;

  const handleSort = (sortType) => {
    setSort(sortType);

    if (pathname === "/cart") {
      if (sortType === "sort by rating") {
        const sortedCartList = [...cartData].sort(
          (a, b) => b.rating - a.rating
        );
        setCartData(sortedCartList);
      } else if (sortType === "sort by price") {
        const sortedCartList = [...cartData].sort((a, b) => a.price - b.price);
        setCartData(sortedCartList);
      }
    } else if (pathname === "/wishlist") {
      if (sortType === "sort by rating") {
        const sortedWishList = [...wishData].sort(
          (a, b) => b.rating - a.rating
        );
        setWishData(sortedWishList);
      } else if (sortType === "sort by price") {
        const sortedWishList = [...wishData].sort((a, b) => a.price - b.price);
        setWishData(sortedWishList);
      }
    }
  };

  const totalCost = currentData
    .reduce((sum, item) => sum + Number(item.price || 0), 0)
    .toFixed(2);

  const confirmPurchase = () => {
    if (pathname === "/cart") {
      setCartData([]);
      localStorage.removeItem("cartItems");
      toast.success("Remove from Ls.");
    } else if (pathname === "/wishlist") {
      setWishData([]);
      localStorage.removeItem("wishItems");
      toast.success("Remove from Ls.");
    }

    setShowModal(false);
  };

  const handlePurchase = () => {
    setShowModal(true);
  };

  useEffect(() => {
    gsap.fromTo(
      ["div"],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".text-section",
          start: "top 80%",
          end: "top 30%",
          scrub: false,
          toggleActions: "play none none none",
          // markers:true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* Banner Section */}
      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md p-6 mb-10">
        <img
          src={dashboardImg}
          alt="Dashboard Banner"
          className="w-full h-64 object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg sm:text-xl mb-5">
            Manage your favorite products easily with wish list and cart.
          </p>
          <div className="flex gap-4">
            <NavLink
              to="/wishlist"
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition"
            >
              Wish List
            </NavLink>
            <NavLink
              to="/cart"
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition"
            >
              Cart List
            </NavLink>
          </div>
        </div>
      </div>

      {/* Purchase section */}
      <div className="flex flex-col sm:flex-row justify-between items-center my-6 gap-4">
        {/* Left side - Cart title */}
        <h2 className="text-lg font-semibold">Cart</h2>

        {/* Right side - Buttons and Total */}
        <div className="flex items-center gap-4">
          {/* Total cost */}
          <span className="text-base font-bold">Total cost: ${totalCost}</span>

          {/* Sort button */}
          {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
          {/* For TSX uncomment the commented types below */}
          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
          >
            {sort ? `sort bt ${sort}` : "Sort by Price"}
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={
              { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
            }
          >
            <li onClick={() => handleSort("sort by price")}>
              <a>Sort by price</a>
            </li>
            <li onClick={() => handleSort("sort by rating")}>
              <a>Sort by rating</a>
            </li>
          </ul>

          {/* Purchase button */}
          <button
            onClick={handlePurchase}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm hover:opacity-90 transition"
          >
            Purchase
          </button>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-blue-400 p-6 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-xl font-semibold mb-4">Confirm Purchase</h2>
                <p className="mb-4">
                  Total Amount: <strong>${totalCost}</strong>
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={confirmPurchase}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {pathname === "/cart" ? "Your Cart Items" : "Your Wishlist Items"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.length > 0 ? (
            currentData.map((product, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-xl shadow-md bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">Category: {product.category}</p>
                <p className="text-green-600 font-bold">
                  Price: ${product.price}
                </p>
                <p className="text-green-600 font-bold">
                  Rating: {product.rating}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No items in {pathname === "/cart" ? "cart" : "wishlist"}.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
