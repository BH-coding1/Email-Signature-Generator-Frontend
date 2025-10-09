"use client";


import { SignIn} from "@clerk/clerk-react";


export default function SignInForm() {
  


  return (
    <div className="w-full max-w-lg mx-auto   bg-white ">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/register"
        fallbackRedirectUrl="http://mailgen-eta.vercel.app/PlatformTools/dashboard"
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
