import { createContext, useContext, useState,useEffect, type ReactNode } from "react";

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
  borderStyle: "none" | "solid" | "dashed" | "dotted";
  borderColor: string;
  borderRadius: number;
  showSocialIcons: boolean;
  alignment: "left" | "center" | "right";
};

type ImageData = {
  LogoUrl?: string;
  ProfilePictureUrl?: string;
  SignatureUrl?: string;
};

export type SignatureData = {

  company: CompanyData;
  style: StyleData;
  images: ImageData;
  selectedTemplate: "classic" | "minimal" | "coperate" | "compact", 
};

// -------------------- Context --------------------
type SignatureContextType = {
  data: SignatureData;
  setCompany: (company: Partial<CompanyData>) => void;
  setStyle: (style: Partial<StyleData>) => void;
  setImages: (images: Partial<ImageData>) => void;
 setTemplate: (template: SignatureData["selectedTemplate"]) => void; // new setter
};

// Create context
const SignatureContext = createContext<SignatureContextType | undefined>(
  undefined
);




// -------------------- Provider --------------------
export const SignatureProvider = ({ children }: { children: ReactNode }) => {
  const defaultData :SignatureData = {
  company: {
      FirstName: '',
      LastName: "",
      JobTitle: "",
      CompanyName: "",
      PhoneNumber: "",
      EmailAddress: "",
      Website: "",
      Address: "",
    },
    style: {
      fontFamily: "Arial",
      fontSize: 14,
      textColor: "#000000",
      linkColor: "#1a73e8",
      boldName: true,
      italicJob: false,
      themeColor: "#1a73e8",
      borderStyle: "none",
      borderColor: "#000000",
      borderRadius: 2,
      showSocialIcons: true,
      alignment: "left",
    },
    images: {
      LogoUrl: "",
      ProfilePictureUrl: "",
      SignatureUrl: "",
    },
    selectedTemplate: "classic", 
  }
  const [data, setData] = useState<SignatureData>(()=>{
    try{
      const savedData = localStorage.getItem('Signature')
      // have to merge it with the default data , otherwise it saves partially
      return savedData ? {...defaultData, ...JSON.parse(savedData)} : defaultData
    }catch(err){
      console.error(err)
      return defaultData
    }
    
  });

  // ---------Save to local storage when updated --------
  useEffect(()=>{
    try{
      const savedDataString = JSON.stringify(data)
      console.log('saving to local storage',data)
      localStorage.setItem('Signature',savedDataString)
    }catch(err){
      console.error(err)
    }
  },[data])





  // Update helpers
  const setCompany = (company: Partial<CompanyData>) =>
    setData((prev) => ({ ...prev, company: { ...prev.company, ...company } }));

  const setStyle = (style: Partial<StyleData>) =>
    setData((prev) => ({ ...prev, style: { ...prev.style, ...style } }));

  const setImages = (images: Partial<ImageData>) =>
    setData((prev) => ({ ...prev, images: { ...prev.images, ...images } }));

const setTemplate = (template: SignatureData["selectedTemplate"]) =>
  setData(prev => ({ ...prev, selectedTemplate: template }));
  return (
    <SignatureContext.Provider
      value={{ data, setCompany, setStyle, setImages, setTemplate }}
    >
      {children}
    </SignatureContext.Provider>
  );
};

// -------------------- Hook --------------------
export const useSignature = () => {
  const context = useContext(SignatureContext);
  if (!context) {
    throw new Error("useSignature must be used within a SignatureProvider");
  }
  return context;
};
