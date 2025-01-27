import { useEffect, useState } from "react";
import { getAllFavorites, getAllWishlist } from "../utils";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";

const Dashboard = () => {
  const [showCart, setShowCart] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const favorites = getAllFavorites();
    setCart(favorites);
  }, []);

  useEffect(() => {
    const wishListedItem = getAllWishlist();
    setWishList(wishListedItem);
  }, []);

  useEffect(() => {
    const calculateTotalCost = () => {
      let total = 0;
      for (let item of cart) {
        total += item.price;
      }
      setTotalCost(total.toFixed(2));
    };

    calculateTotalCost();
  }, [cart]);

  // sorted button functionality
  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setCart(sorted);
  };

  // toggle button functionality
  const toggleButton = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-primary pt-16 pb-10 ">
        <h1 className="font-bold lg:mx-36 text-center text-white text-3xl">
          Dashboard
        </h1>
        <p className="my-6 text-white lg:mx-56 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-6 items-center">
          <button
            onClick={() => toggleButton()}
            className={`btn rounded-full px-8 py-4 ${
              showCart
                ? "bg-white text-primary"
                : "bg-primary text-white border"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => toggleButton()}
            className={`btn rounded-full px-8 py-4 ${
              showCart
                ? "bg-primary text-white"
                : "bg-white text-primary border"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {showCart ? (
        <div>
          <div className="flex w-11/12 my-6 mx-auto justify-between items-center">
            <h4 className="text-2xl font-bold">Cart</h4>
            <div className="flex gap-10 items-center">
              <p className="text-xl font-bold">Total cost: {totalCost}</p>
              <button
                onClick={() => handleSort()}
                className="btn px-6 py-4 rounded-full border border-primary text-primary bg-white"
              >
                Sort by Price
              </button>
              <button className="btn px-6 py-4 rounded-full bg-primary text-white">
                Purchase
              </button>
            </div>
          </div>
          {cart.map((item) => (
            <Cart key={item.product_id} item={item}></Cart>
          ))}
        </div>
      ) : (
        wishlist.map((item, idx) => <Wishlist key={idx} item={item}></Wishlist>)
      )}
    </div>
  );
};

export default Dashboard;
