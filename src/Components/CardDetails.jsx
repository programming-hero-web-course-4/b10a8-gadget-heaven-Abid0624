import { useLoaderData, useParams } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const CardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data, id);
  const singleCard = data.find((card) => card.product_id === parseInt(id));
  console.log(singleCard);

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
                src={singleCard.product_image}
                alt=""
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="text-2xl font-semibold">
                {singleCard.product_title}
              </h3>
              <p className="text-xl font-semibold">
                Price: ${singleCard.price}
              </p>
              <p>
                {singleCard.availability ? (
                  <div className="btn btn-outline btn-success rounded-full">
                    In Stock
                  </div>
                ) : (
                  <div className="btn btn-outline btn-success rounded-full">
                    Out of Stock
                  </div>
                )}
              </p>
              <p className="text-gray-500">{singleCard.description}</p>
              <ol className="text-xl list-decimal font-bold">
                Specification:
                {singleCard.specification.map((spec, idx) => (
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
                {singleCard.rating}
              </span>
              <div className="flex gap-6 items-center">
                <button className="bg-primary text-white font-bold gap-2 p-3 flex justify-center items-center rounded-xl">
                  Add to Cart
                  <span>
                    {" "}
                    <BsCart className=""></BsCart>
                  </span>
                </button>
                <button className="bg-white flex justify-center border border-black items-center h-8 w-8 rounded-full">
                  <CiHeart className="text-black"></CiHeart>
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
