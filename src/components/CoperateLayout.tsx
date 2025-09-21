"use client";

import { useSignature } from "@/context/SignatureContext";
import { Linkedin, Twitter, Facebook, User, Phone, Mail, Globe, MapPin } from "lucide-react";

const CorporateLayout = () => {
  const { data } = useSignature();
  const { company, style, images } = data;

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
      className={`flex border border-gray-300 w-full overflow-hidden shadow-md bg-white ${alignmentClass}`}
      style={{
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        color: style.textColor,
        borderStyle: style.borderStyle,
        borderColor: style.borderColor,
        borderRadius: style.borderRadius,
      }}
    >
      {/* Left: Profile / Logo */}
      <div className="bg-gray-50 flex flex-col items-center justify-center px-6 py-4 min-w-[140px]">
        {images.ProfilePictureUrl ? (
          <img
            src={images.ProfilePictureUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
        ) : (
          <User className="w-20 h-20 text-gray-400" />
        )}
        <div className="mt-2 font-semibold text-gray-700">{companyName}</div>
      </div>

      {/* Right: Info */}
      <div className="flex flex-col justify-center px-6 py-4 flex-1 space-y-2">
        <div>
          <span
            className="text-lg"
            style={{ fontWeight: style.boldName ? "bold" : "normal", color: style.themeColor }}
          >
            {firstName} {lastName}
          </span>
          <div className="text-sm text-gray-600">
            {jobTitle}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} color={style.themeColor} /> {phone}
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} color={style.themeColor} /> {email}
          </div>
          <div className="flex items-center gap-2">
            <Globe size={14} color={style.themeColor} /> {website}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} color={style.themeColor} /> {address}
          </div>
        </div>

        {style.showSocialIcons && (
          <div className="flex gap-3 mt-2">
            {socialLinks.map(({ name, url, Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                <Icon size={16} color={style.themeColor} />
              </a>
            ))}
          </div>
        )}

        {images.SignatureUrl && (
          <div className="mt-2">
            <img src={images.SignatureUrl} alt="Signature" className="h-10 object-contain" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CorporateLayout;
