"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useSignature } from "@/context/SignatureContext";

type TemplateType = "classic" | "minimal" | "coperate" | "compact";

const Templates : { id: TemplateType; name: string; preview: string }[] = [
  { id: "classic", name: "Classic", preview: "/Layout4.png" },
  { id: "minimal", name: "Modern", preview: "/Layout4.png" },
  { id: "coperate", name: "Coperate", preview: "/Layout4.png" },
  { id: "compact", name: "Compact", preview: "/Layout4.png" },
];

const TemplatesSidebar = () => {
  const { data, setTemplate } = useSignature();
  const selected = data.selectedTemplate; // read current selected template

  function handleSelectTemplate(templateId: TemplateType) {
    setTemplate(templateId); // update global context
    console.log("Selected template:", templateId);
  }

  return (
    <div className="overflow-y-auto w-full grid grid-cols-2 gap-y-6 gap-x-3">
      {Templates.map((tpl) => (
        <Card
          key={tpl.id}
          className="cursor-pointer hover:shadow-lg rounded-none transition border"
          onClick={() => handleSelectTemplate(tpl.id)}
        >
          <div className="relative">
            <CardContent className="p-2">
              <img
                src={tpl.preview}
                alt={`${tpl.name} template`}
                className="w-full object-contain"
              />
            </CardContent>

            {selected === tpl.id && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Check className="h-8 w-8 text-white rounded-full bg-blue-600" />
              </div>
            )}
          </div>
          <p className="text-sm font-medium text-center py-2">{tpl.name}</p>
        </Card>
      ))}
    </div>
  );
};

export default TemplatesSidebar;
