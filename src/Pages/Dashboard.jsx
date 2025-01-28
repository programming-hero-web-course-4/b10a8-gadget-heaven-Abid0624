import { useEffect, useState } from "react";
import { getAllFavorites, getAllWishlist } from "../utils";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import { useNavigate } from "react-router-dom";
import modalImg from "../assets/assets/Group.png";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [showCart, setShowCart] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [modalCost, setModalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Fetch cart items
  useEffect(() => {
    const favorites = getAllFavorites();
    setCart(favorites);
  }, []);

  // Fetch wishlist items
  useEffect(() => {
    const wishListedItem = getAllWishlist();
    setWishList(wishListedItem);
  }, []);

  // Calculate total cost when cart changes
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

  // Sort button functionality
  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setCart(sorted);
  };

  // Toggle button functionality
  const toggleButton = () => {
    setShowCart(!showCart);
  };

  // Purchase functionality
  const handlePurchase = () => {
    setShowModal(true);
    setModalCost(totalCost);
    setCart([]);
  };

  const handleConfirmPurchase = () => {
    setTotalCost(0);
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary pt-16 pb-10">
        <h1 className="font-bold lg:mx-36 text-center text-white text-3xl">
          Dashboard
        </h1>
        <p className="my-6 text-white lg:mx-56 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-6 items-center">
          <button
            onClick={toggleButton}
            className={`btn rounded-full px-8 py-4 ${
              showCart
                ? "bg-white text-primary"
                : "bg-primary text-white border"
            }`}
          >
            Cart
          </button>
          <button
            onClick={toggleButton}
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
          <div className="flex w-11/12 my-6 mx-auto flex-col md:flex-row justify-between items-center">
            <h4 className="text-2xl font-bold">Cart</h4>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <p className="text-xl font-bold">Total cost: ${totalCost}</p>
              <button
                onClick={handleSort}
                className="btn px-6 py-4 rounded-full border border-primary text-primary bg-white"
              >
                Sort by Price
              </button>
              <button
                onClick={() => handlePurchase()}
                className="btn px-6 py-4 rounded-full bg-primary text-white"
                disabled={cart.length === 0 || totalCost === 0} // Disable button if cart is empty
              >
                Purchase
              </button>
            </div>
          </div>
          {cart.map((item, index) => (
            <Cart key={index} item={item}></Cart>
          ))}
        </div>
      ) : (
        wishlist.map((item) => (
          <Wishlist key={item.product_id} item={item}></Wishlist>
        ))
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="flex justify-center items-center">
              <img src={modalImg} alt="" />
            </div>
            <div className="text-center">
              <p className="py-4 text-2xl font-bold">Payment Successfully!</p>
              <p className="text-gray-600 font-semibold text-xl">
                Thanks for purchasing.
              </p>
              <p className="text-gray-600 font-semibold text-xl">
                Total Price: ${modalCost}
              </p>
            </div>
            <div className="modal-action">
              <button
                onClick={() => handleConfirmPurchase()}
                className="btn w-full rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
