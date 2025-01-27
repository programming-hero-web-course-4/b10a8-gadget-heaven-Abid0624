import toast from "react-hot-toast";

// get all products from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");
  if (all) {
    return JSON.parse(all);
  } else {
    return [];
  }
};

// add a product to local storage
const addFavorite = (product) => {
  const favorites = getAllFavorites();

  favorites.push(product);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Product added to favorites!");
};

// get all wishlist from local storage
const getAllWishlist = () => {
  const all = localStorage.getItem("wishlists");
  if (all) {
    return JSON.parse(all);
  } else {
    return [];
  }
};

const addWishlist = (product) => {
  // console.log(product);
  const wishlists = getAllWishlist();
  const isExist = wishlists.find(
    (item) => item.product_id === product.product_id
  );
  if (isExist) return toast.error("Already in the wishlist!");
  wishlists.push(product);
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
  toast.success("Product added to your wishlist!");
};

export { addFavorite, getAllFavorites, getAllWishlist, addWishlist };
