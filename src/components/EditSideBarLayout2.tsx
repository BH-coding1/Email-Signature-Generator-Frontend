import { Link } from "@tanstack/react-router";
import { ArrowLeft, Image, User, Palette, Layout } from "lucide-react";
import { useState } from "react";
import ImagesEditor from "./LibraryComponents/ImagesEditor.tsx";
import StylesEditor from "./LibraryComponents/StylesEditor2.tsx";
import CompanyEditor from "./LibraryComponents/CompanyEditor2.tsx";
import TemplatesSidebar from "./LibraryComponents/Templates2.tsx";
const EditSidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const tools = [
    { icon: User, name: "Company" },
    { icon: Image, name: "Images" },
    { icon: Layout, name: "Templates" },
    { icon: Palette, name: "Styles" },
  ];
  const [activeTool, setActiveTool] = useState<string>("Company");
  return (
    <div className="flex h-screen bg-slate-100">
      <div className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-4 space-y-6 px-5">
        {/* Back button */}
        <Link
          to="/PlatformTools/SignatureLibrary"
          className="flex flex-col items-center text-gray-500 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-xs mt-1">Back</span>
        </Link>

        {/* Tool icons */}
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.name}
              onClick={() => setActiveTool(tool.name)}
              className={`flex flex-col items-center text-gray-700 hover:text-blue-600 
               ${activeTool === tool.name ? "font-bold text-gray-200 " : ""}`}
            >
              <Icon className="h-6 w-6 " />
              <span className="text-xs mt-1 ">{tool.name}</span>
            </button>
          );
        })}
      </div>

      {/* Secondary panel (tool editor) */}
      <div className="w-112 bg-white border-r sticky top-0 h-screen border-slate-200 p-6 overflow-y-auto">
        {activeTool === "Images" && <ImagesEditor />}
        {activeTool === "Company" && <CompanyEditor />}
        {activeTool === "Styles" && <StylesEditor />}
        {activeTool === "Templates" && <TemplatesSidebar />}
      </div>

      {/* Live preview */}
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
};

export default EditSidebarLayout;
