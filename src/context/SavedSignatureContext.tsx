// context/SavedSignatureContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useApi } from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// -------------------- Types --------------------
type CompanyData = {
  FirstName: string;
  LastName?: string;
  JobTitle?: string;
  CompanyName?: string;
  PhoneNumber?: string;
  EmailAddress: string;
  Website?: string;
  Address?: string;
};

type StyleData = {
  fontFamily: string;
  fontSize: number;
  textColor: string;
  linkColor: string;
  boldName: boolean;
  italicJob: boolean;
  themeColor: string;
  borderStyle: 'none' | 'solid' | 'dashed' | 'dotted';
  borderColor: string;
  borderRadius: number;
  showSocialIcons: boolean;
  alignment: 'left' | 'center' | 'right';
};

type ImageData = {
  LogoUrl?: string;
  ProfilePictureUrl?: string;
  SignatureUrl?: string;
};

export type SignatureData = {
  _id?: string;
  company: CompanyData;
  style: StyleData;
  images: ImageData;
  selectedTemplate: 'classic' | 'minimal' | 'coperate' | 'compact';
};

// -------------------- Context --------------------
type SavedSignatureContextType = {
  data: SignatureData;
  setCompany: (company: Partial<CompanyData>, signatureId: string) => Promise<void>;
  setStyle: (style: Partial<StyleData>, signatureId: string) => Promise<void>;
  setImages: (images: Partial<ImageData>, signatureId: string) => Promise<void>;
  setTemplate: (template: SignatureData['selectedTemplate'], signatureId: string) => Promise<void>;
  setData: (data: SignatureData, signatureId?: string) => void;
};

// Create context
const SavedSignatureContext = createContext<SavedSignatureContextType | undefined>(undefined);

// -------------------- Provider --------------------
export const SavedSignatureProvider = ({
  children,
  signatureId, 
  initialData,
}: { children: ReactNode; signatureId?: string; initialData?: SignatureData }) => {
  const api = useApi();
  const queryClient = useQueryClient();

  const defaultData: SignatureData = {
    company: {
      FirstName: '',
      LastName: '',
      JobTitle: '',
      CompanyName: '',
      PhoneNumber: '',
      EmailAddress: '',
      Website: '',
      Address: '',
    },
    style: {
      fontFamily: 'Arial',
      fontSize: 14,
      textColor: '#000000',
      linkColor: '#1a73e8',
      boldName: true,
      italicJob: false,
      themeColor: '#1a73e8',
      borderStyle: 'none',
      borderColor: '#000000',
      borderRadius: 2,
      showSocialIcons: true,
      alignment: 'left',
    },
    images: {
      LogoUrl: '',
      ProfilePictureUrl: '',
      SignatureUrl: '',
    },
    selectedTemplate: 'classic',
  };

  const [data, setData] = useState<SignatureData>(initialData || defaultData);

  const updateSignatureMutation = useMutation({
    mutationFn: async ({ signatureId, updateData }: { signatureId: string; updateData: Partial<SignatureData> }) => {
      console.log('data going to db',updateData)
      const response = await api.put(`/signature/edit/${signatureId}`, updateData, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: ['signature', signatureId] });
    },
    onError: (err: any) => {
      console.error('Failed to update signature in database:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
      });
      throw err; 
    },
    retry: false,
  });

  const setCompany = async (company: Partial<CompanyData>, signatureId: string) => {
    if (!signatureId) {
      throw new Error('signatureId is required for saved signatures');
    }
     const newData = { ...data, company: { ...data.company, ...company } };
    console.log('setCompany - New data prepared:', newData);
    setData(newData);
    console.log('setCompany - State updated, sending to mutation:', { signatureId, company: newData.company });
    await updateSignatureMutation.mutateAsync({ signatureId, updateData: newData });
  };

  const setStyle = async (style: Partial<StyleData>, signatureId: string) => {
    if (!signatureId) {
      throw new Error('signatureId is required for saved signatures');
    }
    const newData = { ...data, style: { ...data.style, ...style } };
    setData(newData);
    await updateSignatureMutation.mutateAsync({ signatureId, updateData: newData });
  };

  const setImages = async (images: Partial<ImageData>, signatureId: string) => {
    if (!signatureId) {
      throw new Error('signatureId is required for saved signatures');
    }
    const newData = { ...data, images: { ...data.images, ...images } };
    setData(newData);
    await updateSignatureMutation.mutateAsync({ signatureId, updateData: newData });
  };

  const setTemplate = async (template: SignatureData['selectedTemplate'], signatureId: string) => {
    if (!signatureId) {
      throw new Error('signatureId is required for saved signatures');
    }
    const newData = { ...data, selectedTemplate: template };
    setData(newData);
    await updateSignatureMutation.mutateAsync({ signatureId, updateData: newData});
  };

 
  return (
    <SavedSignatureContext.Provider
      value={{ data, setCompany, setStyle, setImages, setTemplate, setData }}
    >
      {children}
    </SavedSignatureContext.Provider>
  );
};

// -------------------- Hook --------------------
export const useSignature = () => {
  const context = useContext(SavedSignatureContext);
  if (!context) {
    throw new Error('useSignature must be used within a SavedSignatureProvider');
  }
  return context;
};