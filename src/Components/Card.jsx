/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="w-full h-48 p-6 overflow-hidden">
        <img src={product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{product_title}</h2>
        <p className="text-gray-400 font-medium text-xl">Price: {price}$</p>
        <div className="card-actions justify-start">
          <button
            onClick={() => navigate(`/card/${product_id}`)}
            className="btn btn-outline btn-primary rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
