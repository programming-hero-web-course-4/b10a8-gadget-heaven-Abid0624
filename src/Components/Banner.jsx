import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="bg-primary rounded-b-xl py-16 ">
        <h1 className="font-bold lg:mx-36 text-center text-white text-5xl">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="my-6 text-white lg:mx-56 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="pt-6 pb-48 text-center">
          <Link to="/dashboard">
            <span className="bg-white text-primary text-xl font-bold px-6 py-4 rounded-full">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
