// PlatformTools/SignatureLibrary/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import SideBarLayout from "@/components/SidebarLayout";
import ClassicLayout from "@/components/ClassicLayout";
import MinimalLayout from "@/components/MinimalLayout";
import CompactLayout from "@/components/CompactLayout";
import CorporateLayout from "@/components/CoperateLayout";
import {
  queryOptions,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useApi } from "@/lib/axios";

const fetchSignature = async (api: ReturnType<typeof useApi>) => {
  console.log("fetching");
  const res = await api.get("/signature", { withCredentials: true });
  return res.data;
};

const signatureQueryOptions = (api: ReturnType<typeof useApi>) =>
  queryOptions({
    queryKey: ["signatures"],
    queryFn: () => fetchSignature(api),
    staleTime: 0, 
  });

export const Route = createFileRoute("/PlatformTools/SignatureLibrary/")({
  component: RouteComponent,
});

function RouteComponent() {
  const api = useApi();
  const { data: signatures } = useSuspenseQuery(signatureQueryOptions(api));
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/signature/${id}`, { withCredentials: true });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["signatures"] });
      await queryClient.refetchQueries({ queryKey: ["signatures"] });
      console.log("query key invalidated", { queryKey: ["signatures"] });
    },
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this signature?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <SideBarLayout>
      {/* Container */}
      <div className="flex flex-col items-center space-y-6 p-6 ">
        {signatures && signatures.length > 0 ? (
          signatures.map((signature: any) => {
            const RenderedLayout = (() => {
              switch (signature.selectedTemplate) {
                case "classic":
                  return <ClassicLayout signature={signature}/>;
                case "minimal":
                  return <MinimalLayout signature={signature} />;
                case "compact":
                  return <CompactLayout signature={signature}/>;
                case "coperate":
                  return <CorporateLayout signature={signature}/>;
                default:
                  return <ClassicLayout signature={signature}/>;
              }
            })();

            return (
              <div
                key={signature._id}
                className="bg-white rounded-xl shadow-xl border border-gray-300 w-full max-w-3xl p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 text-center text-gray-600 uppercase bg-purple-200 p-1 rounded-xl border font-semibold">
                    Saved
                  </div>
                </div>

                {/* Preview */}
                <div className="flex justify-center">{RenderedLayout}</div>

                {/* Actions */}
                <div className="grid grid-cols-2 justify-center gap-4">
                  <Link
                    to='/PlatformTools/SignatureLibrary/$SignatureID/Editor' params={{SignatureID:signature._id}}
                    className="bg-blue-600 text-center mt-5 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-500 transition-colors"
                  >
                    Edit Signature
                  </Link>
                  <button
                    onClick={() => handleDelete(signature._id)}
                    className="bg-white border text-red-600 border-red-600 text-center mt-5 font-medium rounded-lg px-4 py-2 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Delete Signature
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-400 text-white p-6 shadow-lg w-full max-w-4xl text-center">
              <div className="text-xl font-semibold">No signatures yet</div>
              <div className="mt-2">
                Go and try out our latest Templates and create your very own
                Signature Now
              </div>
              <div className="mt-4">
                <Link
                  to="/PlatformTools/SignatureGenerator/Editor"
                  className="px-5 py-2 bg-white text-blue-600 rounded-md font-medium"
                >
                  Create
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </SideBarLayout>
  );
}