"use client";

import { type SignatureData } from "@/context/SignatureContext";

import { Linkedin, Twitter, Facebook, User, Phone, Mail, Globe, MapPin } from "lucide-react";

type ClassicLayoutProps ={
  signature:SignatureData
}
const ClassicLayout = ({signature}:ClassicLayoutProps) => {
  
  const { company, style, images } = signature;

  // Social Links
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", Icon: Twitter },
    { name: "Facebook", url: "https://facebook.com", Icon: Facebook },
  ];

  // Fallback/default values
  const firstName = company.FirstName || "John";
  const lastName = company.LastName || "Doe";
  const jobTitle = company.JobTitle || "Software Engineer";
  const companyName = company.CompanyName || "Acme Inc.";
  const phone = company.PhoneNumber || "+1 555 123 4567";
  const email = company.EmailAddress || "john.doe@example.com";
  const website = company.Website || "https://example.com";
  const address = company.Address || "123 Main Street, NY";

  // Alignment classes
  const alignmentClass =
    style.alignment === "center"
      ? "items-center text-center"
      : style.alignment === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div
      className={`bg-white w-full p-6 rounded-xl shadow-md flex flex-col ${alignmentClass}`}
      style={{
        maxWidth: "600px",
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        color: style.textColor,
        borderStyle: style.borderStyle,
        borderColor: style.borderColor,
        borderWidth: style.borderStyle !== "none" ? "2px" : "0",
        borderRadius: style.borderRadius,
      }}
    >
      {/* Header: Logo + Profile */}
      <div className="flex items-center gap-4 mb-4">
        {images.ProfilePictureUrl ? (
          <img
            src={images.ProfilePictureUrl}
            alt="Profile"
            className="h-14 w-14 rounded-full object-cover border-2 border-gray-200"
          />
        ) : (
          <User size={56} className="text-gray-300" />
        )}

        <div className="flex flex-col">
          <div
            className="text-lg font-semibold"
            style={{ color: style.themeColor, fontWeight: style.boldName ? "bold" : "normal" }}
          >
            {firstName} {lastName}
          </div>
          <div
            className="text-sm text-gray-600"
            style={{ fontStyle: style.italicJob ? "italic" : "normal" }}
          >
            {jobTitle} • {companyName}
          </div>
          <div className="text-sm text-gray-500 mt-1 flex flex-wrap gap-2">
            <span className="flex items-center gap-1">
              <Phone size={14} color={style.themeColor} /> {phone}
            </span>
            <span className="flex items-center gap-1">
              <Globe size={14} color={style.themeColor} /> {website}
            </span>
          </div>

          <div className="text-sm text-gray-500 mt-1 flex flex-wrap gap-2">
            <span className="flex items-center gap-1">
              <Mail size={14} color={style.themeColor} /> {email}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} color={style.themeColor} /> {address}
            </span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-gray-200 my-4 w-full" />

      {/* Signature */}
      <div className="flex flex-col gap-1">
        <p>Best regards,</p>
        {images.SignatureUrl ? (
          <img src={images.SignatureUrl} alt="Signature" className="h-16 object-contain" />
        ) : (
          <span className="text-gray-400 font-semibold">{firstName} {lastName}</span>
        )}
        <p className="text-xs text-gray-500">{companyName} • {jobTitle}</p>
      </div>

      {/* Social Icons */}
      {style.showSocialIcons && (
        <div className="flex gap-3 mt-4">
          {socialLinks.map(({ name, url, Icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
              <Icon size={20} color={style.themeColor} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassicLayout;
