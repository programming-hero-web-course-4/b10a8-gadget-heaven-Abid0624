import { useLoaderData, useParams } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { addFavorite, addWishlist, getAllWishlist } from "../utils";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isWishlist, setIsWishlist] = useState(false);

  // console.log(isWishlist);

  useEffect(() => {
    const singleCard = data.find((card) => card.product_id === parseInt(id));

    setProduct(singleCard);
    const wishlists = getAllWishlist();

    const isExist = wishlists.find(
      (item) => item.product_id === singleCard.product_id
    );

    if (isExist) {
      setIsWishlist(true);
    }
  }, [data, id]);

  // Handle favorite button
  const handleFavorite = (product) => {
    addFavorite(product);
  };

  const handleWishlist = (product) => {
    addWishlist(product);
    setIsWishlist(true);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-primary pt-16 pb-40 ">
        <h1 className="font-bold lg:mx-36 text-center text-white text-3xl">
          Product Details
        </h1>
        <p className="my-6 text-white lg:mx-56 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* banner image section */}
      {/* <div className="absolute inset-0 z-0"></div> */}

      <div className="relative lg:-top-40 mx-auto -top-28 flex border-2 bg-white border-white  w-4/5 lg:h-[550px] h-full z-10 px-5 py-6 shadow-xl rounded-xl">
        <div className="bg-cover bg-center w-full h-full bg-no-repeat rounded-xl">
          <div className="flex gap-5">
            <div className="w-2/5  flex justify-center items-center">
              <img
                className="max-w-full h-[250px] rounded-xl"
                src={product.product_image}
                alt=""
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="text-2xl font-semibold">
                {product.product_title}
              </h3>
              <p className="text-xl font-semibold">Price: ${product.price}</p>
              <p>
                {product.availability ? (
                  <div className="btn btn-outline btn-success rounded-full">
                    In Stock
                  </div>
                ) : (
                  <div className="btn btn-outline btn-success rounded-full">
                    Out of Stock
                  </div>
                )}
              </p>
              <p className="text-gray-500">{product.description}</p>
              <ol className="text-xl list-decimal font-bold">
                Specification:
                {product.specification?.map((spec, idx) => (
                  <li
                    key={idx}
                    className="text-xl ml-4 font-normal text-gray-500 mt-2"
                  >
                    {spec}
                  </li>
                ))}
              </ol>
              <div className="text-xl font-bold">Rating⭐</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2  bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2  bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2  bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2  bg-yellow-200"
                />
              </div>
              <span className="ml-4 bg-gray-400 px-4 py-2 rounded-2xl">
                {product.rating}
              </span>
              <div className="flex gap-6 items-center">
                <button
                  onClick={() => handleFavorite(product)}
                  className="bg-primary text-white font-bold gap-2 p-3 flex justify-center items-center rounded-xl"
                >
                  Add to Cart
                  <span>
                    {" "}
                    <BsCart className=""></BsCart>
                  </span>
                </button>
                <button
                  disabled={isWishlist}
                  onClick={() => handleWishlist(product)}
                  className={`flex justify-center items-center h-8 w-8 rounded-full border ${
                    isWishlist
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled styles
                      : "bg-white text-black cursor-pointer border-black" // Normal styles
                  }`}
                >
                  <CiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
