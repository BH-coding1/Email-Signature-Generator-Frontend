import { LayoutPanelLeft, Code2, Mail, Smile } from "lucide-react";

const features = [
  {
    Title: "Multiple Templates",
    Description:
      "Choose from a variety of pre-designed templates to quickly create professional and visually appealing email layouts.",
    Icon: <LayoutPanelLeft size={50} color="#ffffffff" className="bg-orange-600 rounded-sm p-1" />,
  },
  {
    Title: "No Code",
    Description:
      "Build and customize emails effortlessly with our intuitive drag-and-drop interface, no coding skills required.",
    Icon: <Code2 size={50} color="#ffffff" className="bg-blue-600 rounded-sm p-1 " />,
  },
  {
    Title: "Seamless Integration",
    Description:
      "Easily connect with popular email platforms like Gmail, Outlook, and Yahoo for smooth and efficient workflows.",
    Icon: <Mail size={50} color="#ffffff" className="bg-yellow-500 rounded-sm p-1 "/>,
  },
  {
    Title: "Friendly UI",
    Description:
      "Enjoy a clean, user-friendly interface that simplifies email creation and management for all skill levels.",
    Icon: <Smile size={50} color="#fefefeff" className="bg-green-600 rounded-sm p-1 "/>,
  },
];

const FeaturesSection = () => {
  return (
    <>
      <div className="flex text-5xl font-bold text-gray-900 justify-center mb-10 ">
        <p>What Makes Us Different</p>
      </div>
      <div className="w-full flex justify-center px-10 mb-20">
        <div className="grid grid-cols-2 items-center gap-6  justify-center">
          {features.map((feature) => (
            <div
              key={feature.Title}
              className="card w-full bg-white card-lg shadow-lg flex items-center justify-center border border-gray-300"
            >
              <div className="card-body">
                <span className="text-xl"></span>
                
                <h2 className="card-title">{feature.Icon} {feature.Title}</h2>
                <p>{feature.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
