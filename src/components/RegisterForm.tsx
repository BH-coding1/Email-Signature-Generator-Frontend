"use client";
import { SignUp ,useSignIn,useUser} from "@clerk/clerk-react";
import { Navigate } from "@tanstack/react-router";
export default function SignUpForm() {
  const {isSignedIn} = useUser()
  const {isLoaded} =useSignIn()
  if (isLoaded && isSignedIn){
    return(<Navigate to='/PlatformTools/dashboard' />)
  }
  return (
    <div className="w-full max-w-lg mx-auto bg-white">
      <SignUp
        routing="path"
        path="/register"
        signInUrl="/sign-in"
        forceRedirectUrl="http://mailgen-eta.vercel.app/PlatformTools/dashboard"
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
