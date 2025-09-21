"use client";;
import { createFileRoute } from "@tanstack/react-router"

import { useSignature } from "@/context/SignatureContext";
import ClassicLayout from "@/components/ClassicLayout";
import MinimalLayout from "@/components/MinimalLayout";
import EditSidebarLayout from "@/components/EditSideBarLayout";
import CompactLayout from "@/components/CompactLayout";
import CorporateLayout from "@/components/CoperateLayout";
export const Route = createFileRoute('/PlatformTools/SignatureGenerator/Editor/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSignature();

  const RenderedLayout = (() => {
    switch (data.selectedTemplate) {
      case "classic":
        return <ClassicLayout />;
      case "minimal":
        return <MinimalLayout />;
      case "compact":
       
        return <CompactLayout />; 
      case "coperate":
        
        return <CorporateLayout />; 
      default:
        return <ClassicLayout />;
    }
  })();

  return (
    <EditSidebarLayout>
      <div className="flex justify-center w-full p-6">
        {RenderedLayout}
      </div>
    </EditSidebarLayout>
  );
}
