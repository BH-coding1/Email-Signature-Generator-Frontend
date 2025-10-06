
import { createFileRoute, Link, redirect } from '@tanstack/react-router';
import { useApi } from '@/lib/axios';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import ClassicLayout from '@/components/ClassicLayout';
import MinimalLayout from '@/components/MinimalLayout';
import CompactLayout from '@/components/CompactLayout';
import CorporateLayout from '@/components/CoperateLayout';
import EditSidebarLayout from '@/components/EditSideBarLayout2';
import {type SignatureData, SavedSignatureProvider, useSignature } from '@/context/SavedSignatureContext';
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';

const fetchSignature = async (api: ReturnType<typeof useApi>, id: string) => {
  console.log('fetching signature:', id);
  const res = await api.get(`/signature/${id}`, { withCredentials: true });
  return res.data;
};

const signatureQueryOptions = (api: ReturnType<typeof useApi>, id: string) =>
  queryOptions({
    queryKey: ['signature', id],
    queryFn: () => fetchSignature(api, id),
    staleTime: 0,
  });

export const Route = createFileRoute('/PlatformTools/SignatureLibrary/$SignatureID/Editor/')({
    beforeLoad: async () => {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      throw redirect({
        to: "/sign-in",
        search: { redirect: "/PlatformTools/SignatureLibrary/" },
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
  const api = useApi();
  const { SignatureID } = Route.useParams();
  const { data: signature } = useSuspenseQuery(signatureQueryOptions(api, SignatureID));

  return (
    <SavedSignatureProvider signatureId={SignatureID} initialData={signature}>
      <SignatureRenderer signature={signature} />
    </SavedSignatureProvider>
  );
}

function SignatureRenderer({ signature }: { signature: SignatureData }) {
  const { setData } = useSignature();
  const { SignatureID } = Route.useParams();
  
  useEffect(() => {
    setData(signature, signature._id || SignatureID);
  }, [signature, setData]);

  const RenderedLayout = signature ? (
    (() => {
      switch (signature.selectedTemplate) {
        case 'classic':
          return <ClassicLayout signature={signature} />;
        case 'minimal':
          return <MinimalLayout signature={signature} />;
        case 'compact':
          return <CompactLayout signature={signature} />;
        case 'coperate':
          return <CorporateLayout signature={signature} />;
        default:
          return <ClassicLayout signature={signature} />;
      }
    })()
  ) : null;

  return (
    <EditSidebarLayout>
      <div className="flex justify-center w-full p-6">
        {RenderedLayout || <div>Loading...</div>}
      </div>
    </EditSidebarLayout>
  );
}