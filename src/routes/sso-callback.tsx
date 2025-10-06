"use client";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

export const Route = createFileRoute("/sso-callback")({
  component: SsoCallbackPage,
});

function SsoCallbackPage() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate({to:"/PlatformTools/dashboard" });
    }
  }, [isSignedIn, navigate]);

  return (<AuthenticateWithRedirectCallback />) ;
}

