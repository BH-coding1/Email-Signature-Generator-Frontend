import { Link } from "@tanstack/react-router";
import { Element } from "react-scroll";
const plans = [
  {
    title: "Free",
    price: "$0/mo",
    popular: false,
    features: [
      { text: "High quality signatures", available: true },
      { text: "Customizable style templates", available: true },
      { text: "3rd party intergration", available: true },
      { text: "Import export", available: true },
    ],
  },


];

const PricingSection = () => {
  return (
    <Element name="pricing">
      <section className="pt-20 px-4 pb-30 ">
        {/* Heading */}
        <div className="text-center pb-15">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Flexible Plans For Every Need
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mt-3">
            Choose the plan that works best for you
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  max-w-5xl  mx-auto ">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="card bg-white shadow-md border border-gray-200 w-full h-full p-6 rounded-xl flex flex-col"
            >
              <div className="card-body flex flex-col">
                {plan.popular && (
                  <span className="badge badge-warning self-start mb-3">
                    Most Popular
                  </span>
                )}

                {/* Title + Price */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold">{plan.title}</h3>
                  <span className="text-xl font-semibold">{plan.price}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-sm flex-1">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center ${
                        feature.available
                          ? "text-gray-800"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`size-4 mr-2 ${
                          feature.available ? "text-green-500" : "text-gray-400"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to='/register' className="btn w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-none mt-6 ">Subscribe</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default PricingSection;
