const Support = () => {
  return (
    <div>
      <div className="bg-primary pt-16 pb-10">
        <h1 className="font-bold lg:mx-36 text-center text-white text-3xl">
          Support
        </h1>
        <p className="my-6 text-white lg:mx-56 text-center">
          Find answers to frequently asked questions below. If you need further
          assistance, feel free to reach out to our support team.
        </p>
      </div>
      <div className="w-9/12 mx-auto space-y-4 my-10">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What types of gadgets do you sell?
          </div>
          <div className="collapse-content">
            <p>
              We offer a wide range of gadgets, including smartphones, tablets,
              laptops, smartwatches, accessories, and more! Whether you are
              looking for the latest tech or cool gadgets to enhance your
              lifestyle, we've got you covered.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer warranty on your gadgets?
          </div>
          <div className="collapse-content">
            <p>
              Yes! All of our gadgets come with a manufacturer's warranty. You
              can find the details of the warranty coverage on the product page
              or reach out to our support team for more info.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I return a gadget if I'm not satisfied?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! We offer a 30-day return policy. If you're not
              satisfied with your purchase, you can return the gadget within 30
              days for a full refund or exchange.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I know when my gadget is delivered?
          </div>
          <div className="collapse-content">
            <p>
              You will receive an email notification when your gadget is
              delivered. Additionally, you can check your order status under the
              "My Orders" section of your account to see the estimated delivery
              date.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer international shipping to most countries. Shipping
              fees and delivery times vary depending on the destination. You can
              view the available shipping options during checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
