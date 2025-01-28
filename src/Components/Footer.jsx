const Footer = () => {
  return (
    <div>
      <div className="bg-base-200 mt-10 py-24 px-36">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-center">Gadget Heaven</h2>
          <p className="text-gray-500 font-semibold">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="my-8 flex justify-between items-center md:flex-row flex-col">
          <div className="text-center space-y-4">
            <h4 className="font-bold text-lg">Services</h4>
            <p className="text-gray-500">Product Support</p>
            <p className="text-gray-500">Order Tracking</p>
            <p className="text-gray-500">Shipping & Delivery</p>
            <p className="text-gray-500">Ratings</p>
          </div>
          <div className="text-center space-y-4">
            <h4 className="font-bold text-lg">Company</h4>
            <p className="text-gray-500">About Us</p>
            <p className="text-gray-500">Careers</p>
            <p className="text-gray-500">Contact</p>
          </div>
          <div className="text-center space-y-4">
            <h4 className="font-bold text-lg">Legal</h4>
            <p className="text-gray-500">Term of Service</p>
            <p className="text-gray-500">Privacy Policy</p>
            <p className="text-gray-500">Cooking Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
