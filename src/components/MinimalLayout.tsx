"use client";

import {type SignatureData } from "@/context/SignatureContext";
import {
  Linkedin,
  Twitter,
  Facebook,
  User,
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

type MinimalLayoutProps ={
  signature:SignatureData
}
const MinimalLayout = ({signature}:MinimalLayoutProps) => {
  
  const { company, style, images } = signature;

  const firstName = company.FirstName || "John";
  const lastName = company.LastName || "Doe";
  const jobTitle = company.JobTitle || "Software Engineer";
  const companyName = company.CompanyName || "Acme Inc.";
  const phone = company.PhoneNumber || "+1 555 123 4567";
  const email = company.EmailAddress || "john.doe@example.com";
  const website = company.Website || "https://example.com";
  const address = company.Address || "123 Main Street, NY";

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", Icon: Twitter },
    { name: "Facebook", url: "https://facebook.com", Icon: Facebook },
  ];
 const alignmentClass =
    style.alignment === "center"
      ? "items-center text-center"
      : style.alignment === "right"
      ? "items-end text-right"
      : "items-start text-left";
  return (
    <div
      className={`flex items-center bg-white shadow-md p-10 justify-between w-full border-t-2 pt-4 ${alignmentClass}`}
      style={{
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        color: style.textColor,
         borderStyle: style.borderStyle,
        borderColor: style.borderColor,
        borderRadius: style.borderRadius,
      }}
    >
      {/* Left: Profile + Name */}
      <div className="flex items-center gap-3">
        {images.ProfilePictureUrl ? (
          <img
            src={images.ProfilePictureUrl}
            alt="Profile"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
        ) : (
          <User className="w-12 h-12 text-gray-400" />
        )}
        <div>
          <div
            className="text-lg"
            style={{
              fontWeight: style.boldName ? "bold" : "normal",
              color: style.themeColor,
            }}
          >
            {firstName} {lastName}
          </div>
          <div
            className="text-sm text-gray-600"
            style={{
              fontStyle: style.italicJob ? "italic" : "normal",
            }}
          >
            {jobTitle} • {companyName}
          </div>
        </div>
      </div>

      {/* Right: Info + Social */}
      <div className="flex flex-col items-end text-sm space-y-1">
        <div className="flex items-center gap-2">
          <Phone size={14} color={style.themeColor} />
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} color={style.themeColor} />
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={14} color={style.themeColor} />
          <a href={website} className="hover:underline">
            {website}
          </a>
        </div>
        {address && (
          <div className="flex items-center gap-2">
            <MapPin size={14} color={style.themeColor} />
            <span>{address}</span>
          </div>
        )}

        {images.SignatureUrl && (
          <img
            src={images.SignatureUrl}
            alt="Signature"
            className="h-8 object-contain mt-2"
          />
        )}

        {style.showSocialIcons && (
          <div className="flex gap-3 mt-2">
            {socialLinks.map(({ name, url, Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                <Icon size={16} color={style.themeColor} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalLayout;
