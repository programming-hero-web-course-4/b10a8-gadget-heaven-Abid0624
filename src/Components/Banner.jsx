import { Link } from "react-router-dom";
import banner from "../assets/assets/banner.jpg";

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
        <div className="pt-6 pb-32 text-center">
          <Link to="/dashboard">
            <span className="bg-white text-primary text-xl font-bold px-6 py-4 rounded-full">
              Shop Now
            </span>
          </Link>
        </div>
      </div>

      {/* banner image section */}
      {/* <div className="absolute inset-0 z-0"></div> */}

      <div className="relative lg:-top-40 mx-auto -top-28 flex border-2 border-white bg-white bg-opacity-20 w-4/5 lg:h-[550px] h-full backdrop-blur-lg z-10 px-5 py-6 rounded-xl">
        <div
          className="bg-cover bg-center w-full h-full bg-no-repeat rounded-xl py-20"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
