import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="bg-primary pt-16 pb-10 ">
        <h1 className="font-bold lg:mx-36 text-center text-white text-3xl">
          Statistics
        </h1>
        <p className="my-6 text-white lg:mx-56 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-11/12 mx-auto bg-white p-6 md:p-12 shadow-lg rounded-xl my-6">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart className="w-full mx-auto" data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis dataKey="price" />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#9538E2" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
