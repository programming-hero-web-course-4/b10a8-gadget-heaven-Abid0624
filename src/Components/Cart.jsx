/* eslint-disable react/prop-types */

const Cart = ({ item }) => {
  const { product_title, product_image, price, description } = item;

  return (
    <div>
      <div className="bg-white border rounded-lg my-6 w-11/12 mx-auto shadow-xl p-8 md:flex flex-row items-center gap-8">
        <div className="w-[200px] h-[164px]">
          <img
            className="w-full h-full rounded-xl"
            src={product_image}
            alt=""
          />
        </div>
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">{product_title}</h5>
          <p className="text-gray-400 text-xl">{description}</p>
          <p className="text-xl font-semibold">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
