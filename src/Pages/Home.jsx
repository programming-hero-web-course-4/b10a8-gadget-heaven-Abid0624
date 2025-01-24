import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      {/* banner section */}
      <Banner></Banner>
      {/* heading section */}
      <h1 className="text-4xl text-center mb-10 font-bold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-11/12 mx-auto">
        {/* categories section */}
        <div className="w-full md:w-1/4">
          <Categories categories={categories}></Categories>
        </div>
        {/* dynamic nested section */}
        <div className="w-full md:w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
