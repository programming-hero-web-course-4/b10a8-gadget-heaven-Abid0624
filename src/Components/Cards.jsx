import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!category || category === "all-products") {
      setCategories(data);
    } else {
      const filteredByCategory = data.filter(
        (gadget) => gadget.category === category
      );
      setCategories(filteredByCategory);
    }
  }, [data, category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.length > 0 ? (
        categories.map((gadget) => (
          <Card key={gadget.product_id} gadget={gadget}></Card>
        ))
      ) : (
        <div className="text-center col-span-full font-bold text-3xl text-gray-500">
          No products found for this category.
        </div>
      )}
    </div>
  );
};

export default Cards;
