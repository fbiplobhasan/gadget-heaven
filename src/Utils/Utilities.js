import toast from "react-hot-toast";

// ✅ Cart এর functions
const getAllProduct = () => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
};

const addToCart = (product) => {
    const cartItems = getAllProduct();
    const isExist = cartItems.find(item => item.id === product.id);

    if (isExist) {
        toast.error('Already exists in your cart!');
        return;
    }

    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    toast.success('Added to cart!');
};

// ✅ Wishlist এর functions
const getAllWishProducts = () => {
    const stored = localStorage.getItem('wishItems');
    return stored ? JSON.parse(stored) : [];
};

const addToWishList = (product) => {
    const wishItems = getAllWishProducts(); // ✅ এখানে wishItems হবে
    const isExist = wishItems.find(item => item.id === product.id);

    if (isExist) {
        toast.error('Already exists in your wishlist!');
        return;
    }

    wishItems.push(product);
    localStorage.setItem('wishItems', JSON.stringify(wishItems)); // ✅ আলাদা key
    toast.success('Added to wishlist!');
};

export { getAllProduct, addToCart, getAllWishProducts, addToWishList };
