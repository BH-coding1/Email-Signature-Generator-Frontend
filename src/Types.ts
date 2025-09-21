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
};
