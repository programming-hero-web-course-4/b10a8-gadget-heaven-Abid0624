import error from "../assets/assets/error.webp";

const Error = () => {
  return (
    <div>
      <h2 className="text-3xl p-10 text-center">Page not found!</h2>
      <div className="space-y-5 w-4/6 mx-auto">
        <img src={error} alt="" />
      </div>
    </div>
  );
};

export default Error;
