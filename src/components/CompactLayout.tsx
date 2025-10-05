"use client";

import {  type SignatureData } from "@/context/SignatureContext";
import { Linkedin, Twitter, Facebook, User } from "lucide-react";
type CompactLayoutProps ={
  signature:SignatureData
}
const CompactLayout = ({signature}:CompactLayoutProps) => {
  
  const { company, style, images } = signature;

  const firstName = company.FirstName || "John";
  const lastName = company.LastName || "Doe";
  const jobTitle = company.JobTitle || "Software Engineer";
  const email = company.EmailAddress || "john.doe@example.com";

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", Icon: Twitter },
    { name: "Facebook", url: "https://facebook.com", Icon: Facebook },
  ];

  return (
    <div
      className="flex items-center gap-3 text-sm w-full bg-white px-5 pt-10 pb-10"
      style={{
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        color: style.textColor,
      }}
    >
      {/* Avatar */}
      {images.ProfilePictureUrl ? (
        <img
          src={images.ProfilePictureUrl}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      ) : (
        <User className="w-8 h-8 text-gray-400" />
      )}

      {/* Info */}
      <div className="flex flex-col">
        <span
          className="font-medium"
          style={{ color: style.themeColor, fontWeight: style.boldName ? "bold" : "normal" }}
        >
          {firstName} {lastName}
        </span>
        <span className="text-xs text-gray-600">
          {jobTitle} | {email}
        </span>
      </div>

      {/* Socials inline */}
      {style.showSocialIcons && (
        <div className="flex gap-2 ml-auto">
          {socialLinks.map(({ name, url, Icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              <Icon size={14} color={style.themeColor} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompactLayout;
