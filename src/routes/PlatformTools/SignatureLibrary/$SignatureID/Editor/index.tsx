
import { createFileRoute, Navigate, } from '@tanstack/react-router';
import { useApi } from '@/lib/axios';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import ClassicLayout from '@/components/ClassicLayout';
import MinimalLayout from '@/components/MinimalLayout';
import CompactLayout from '@/components/CompactLayout';
import CorporateLayout from '@/components/CoperateLayout';
import EditSidebarLayout from '@/components/EditSideBarLayout2';
import {type SignatureData, SavedSignatureProvider, useSignature } from '@/context/SavedSignatureContext';
import { useEffect } from 'react';
import { Protect, } from '@clerk/clerk-react';

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
 component: () => (
    <Protect
      fallback={<Navigate to="/sign-in" search={{ redirect: window.location.pathname }} />}
    >
      <RouteComponent />
    </Protect>
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