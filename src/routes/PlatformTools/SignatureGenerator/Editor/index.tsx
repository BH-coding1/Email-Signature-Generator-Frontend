"use client";;
import { createFileRoute, Link, redirect } from "@tanstack/react-router"

import { useSignature } from "@/context/SignatureContext";
import ClassicLayout from "@/components/ClassicLayout";
import MinimalLayout from "@/components/MinimalLayout";
import EditSidebarLayout from "@/components/EditSideBarLayout";
import CompactLayout from "@/components/CompactLayout";
import CorporateLayout from "@/components/CoperateLayout";
import { useAuth } from "@clerk/clerk-react";
export const Route = createFileRoute('/PlatformTools/SignatureGenerator/Editor/')({
  beforeLoad: async () => {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      throw redirect({
        to: "/sign-in",
        search: { redirect: "/PlatformTools/SignatureGenerator/Editor/" },
      });
    }
  },
  component: RouteComponent,
  errorComponent: () => (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Denied</h1>
      <p className="text-gray-600">Please sign in to access Signature Generator Editor.</p>
      <Link
        to="/sign-in"
        className="btn mt-5 h-12 sm:h-13 w-full sm:w-40 lg:w-50 bg-white border border-blue-600 text-blue-600 rounded-4xl text-base sm:text-lg hover:bg-blue-100 transition duration-300"
      >
        Sign In
      </Link>
    </div>
  ),
});

function RouteComponent() {
  const { data } = useSignature();

  const RenderedLayout = (() => {
    switch (data.selectedTemplate) {
      case "classic":
        return <ClassicLayout signature={data}/>;
      case "minimal":
        return <MinimalLayout signature={data}/>;
      case "compact":
       
        return <CompactLayout signature={data}/>; 
      case "coperate":
        
        return <CorporateLayout signature={data}/>; 
      default:
        return <ClassicLayout signature={data} />;
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
