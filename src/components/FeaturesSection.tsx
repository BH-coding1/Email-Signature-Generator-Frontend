import { LayoutPanelLeft, Code2, Mail, Smile } from "lucide-react";
import { Element } from "react-scroll";
const features = [
  {
    Title: "Multiple Templates",
    Description:
      "Choose from a variety of pre-designed templates to quickly create professional and visually appealing email layouts.",
    Icon: (
      <LayoutPanelLeft
        size={50}
        color="#ffffffff"
        className="bg-orange-600 rounded-sm p-1"
      />
    ),
  },
  {
    Title: "No Code",
    Description:
      "Build and customize emails effortlessly with our intuitive drag-and-drop interface, no coding skills required.",
    Icon: (
      <Code2
        size={50}
        color="#ffffff"
        className="bg-blue-600 rounded-sm p-1 "
      />
    ),
  },
  {
    Title: "Seamless Integration",
    Description:
      "Easily connect with popular email platforms like Gmail, Outlook, and Yahoo for smooth and efficient workflows.",
    Icon: (
      <Mail
        size={50}
        color="#ffffff"
        className="bg-yellow-500 rounded-sm p-1 "
      />
    ),
  },
  {
    Title: "Friendly UI",
    Description:
      "Enjoy a clean, user-friendly interface that simplifies email creation and management for all skill levels.",
    Icon: (
      <Smile
        size={50}
        color="#fefefeff"
        className="bg-green-600 rounded-sm p-1 "
      />
    ),
  },
];

const FeaturesSection = () => {
  return (
    <>
      <Element name="features">
        <div className="flex text-3xl sm:text-4xl lg:text-5xl sm:text-center font-bold text-gray-900 justify-center text-center mb-6  lg:mb-10">
        <p>What Makes Us Different</p>
      </div>
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 mb-12 sm:mb-16 lg:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-7xl w-full">
          {features.map((feature) => (
            <div
              key={feature.Title}
              className="card bg-white shadow-lg flex items-center justify-center border border-gray-300 p-4 sm:p-6"
            >
              <div className="card-body text-center">
                <span className="text-lg sm:text-xl  mb-2 inline-block">{feature.Icon}</span>
                <h2 className="card-title text-lg sm:text-xl lg:text-2xl mb-2">
                  {feature.Title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg">{feature.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Element>
    </>
  );
};

export default FeaturesSection;
