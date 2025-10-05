import ClassicLayout from "@/components/ClassicLayout";
import SideBarLayout from "@/components/SidebarLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import MinimalLayout from "@/components/MinimalLayout";
import CorporateLayout from "@/components/CoperateLayout";
import CompactLayout from "@/components/CompactLayout";
import { useSignature } from "@/context/SignatureContext";
import {useApi} from "@/lib/axios";
import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import type React from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/PlatformTools/SignatureGenerator/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSignature();
   const RenderedLayout = (() => {
    switch (data.selectedTemplate) {
      case "classic":
        return <ClassicLayout signature={data} />;
      case "minimal":
        return <MinimalLayout signature={data}/>;
      case "compact":
       
        return <CompactLayout signature={data}/>; 
      case "coperate":
        
        return <CorporateLayout signature={data}/>; 
      default:
        return <ClassicLayout signature={data}/>;
    }
  })();
const api = useApi()
const queryClient = useQueryClient()
const SaveSignatureMutation:UseMutationResult = useMutation({
  mutationFn: async (data)=>{
    const res = await api.post('/signature',data,{withCredentials:true})
    
    return res.data
  },
  onSuccess:async ()=>{
    await queryClient.invalidateQueries({ queryKey: ["signatures"] });
  await queryClient.refetchQueries({ queryKey: ["signatures"] });
  },onError:(err:any)=>{
    console.error(err.response?.data?.message || err.message)
  }
})

const handleSave = (e:React.FormEvent)=>{
  e.preventDefault()
  
  SaveSignatureMutation.mutate(data)
  
}

  return (
    <SideBarLayout>
      {/* Container */}
      <div className="flex flex-col items-center space-y-6 p-6 ">
        {/* Preview Card */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-300 w-full max-w-3xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1 text-center text-gray-600 uppercase bg-green-100 p-1 rounded-xl border  font-semibold">
              Preview
            </div>

            {/* Empty div to balance flex */}
          </div>

          {/* Preview */}
          <div className="flex justify-center ">
            {RenderedLayout}
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <Link
              to="/PlatformTools/SignatureGenerator/Editor"
              className="bg-blue-600 text-center mt-5 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-500 transition-colors"
            >
              Edit Signature
            </Link>
            <Button
              onClick={handleSave}
              
              className="bg-white text-center mt-5 text-blue-600 border border-blue-600 font-medium rounded-lg px-4 py-2 hover:bg-blue-100 transition-colors"
            >
              Save Signature
            </Button>
          </div>
        </div>
      </div>
    </SideBarLayout>
  );
}
