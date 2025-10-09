"use client";


import { SignIn, useSignIn, useUser} from "@clerk/clerk-react";
import { Navigate } from "@tanstack/react-router";


export default function SignInForm() {
  
  const {isSignedIn} = useUser()
  const {isLoaded} =useSignIn()
  if (isLoaded && isSignedIn){
    return(<Navigate to='/PlatformTools/dashboard' />)
  }

  return (
    <div className="w-full max-w-lg mx-auto   bg-white ">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/register"
        forceRedirectUrl="/PlatformTools/dashboard"
        appearance={{
          variables:{
            colorPrimary:'blue'

          },
          elements: {
            formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
            formFieldInput: "border border-gray-300 rounded-md",
            card: "shadow-md",
          },
        }}
      />
    </div>
    
  );
}
