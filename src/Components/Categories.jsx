/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories }) => {
  const location = useLocation();
  return (
    <div className="shadow-lg">
      <ul className="bg-white p-6 border rounded-lg space-y-6 text-center">
        {/* "All Products" link */}
        <li key="all-products" className="text-lg">
          <NavLink
            to="/category/all-products"
            className={({ isActive }) =>
              `block w-full px-4 py-2 rounded-full ${
                isActive || location.pathname === "/"
                  ? "bg-primary text-white font-bold"
                  : "bg-gray-100 text-gray-500 font-medium"
              }`
            }
          >
            All Products
          </NavLink>
        </li>

        {/* Categories from JSON data */}
        {categories.map((category) => (
          <li key={category.category} className="text-lg">
            <NavLink
              to={`/category/${category.category}`}
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-primary text-white font-bold"
                    : "bg-gray-100 text-gray-500 font-medium"
                }`
              }
            >
              {category.category}
            </NavLink>
          </li>
        ))}

        {/* "Accessories" link */}
        <li key="accessories" className="text-lg">
          <NavLink
            to="/category/accessories"
            className={({ isActive }) =>
              `block w-full px-4 py-2 rounded-full ${
                isActive
                  ? "bg-primary text-white font-bold"
                  : "bg-gray-100 text-gray-500 font-medium"
              }`
            }
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
