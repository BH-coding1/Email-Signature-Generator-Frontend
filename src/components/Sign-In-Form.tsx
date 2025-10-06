"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "@tanstack/react-router";
import { useSignIn } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const formSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function SignInForm() {
  const { signIn,isLoaded,setActive } = useSignIn();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate()
  const [showPasssword, setShowPassword] = useState(false);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  async function onSubmit(values: FormSchemaType) {
    if(!isLoaded){
      return null;
    }
    try {
      const SignInResult = await signIn?.create({
        strategy:'password',
        identifier:values.email,
        password:values.password,
      }) 

      if (SignInResult?.status === 'complete'){
        await setActive({session: SignInResult.createdSessionId})
        navigate({to:'/PlatformTools/dashboard'})
      }else{
        throw new Error('Sign in failed')
      }
      alert("✅ Signed in successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong, try again.");
    }
  }

  
  async function handleGoogleSignIn() {
    try {
      if (!signIn) return;
      if (isSignedIn) {
      navigate({ to: "/PlatformTools/dashboard" });
      return
    }
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/PlatformTools/dashboard",

      });
    } catch (err) {
      console.error("Google popup sign-in error:", err);
      alert("❌ Google sign-in failed, try again.");
    }
  }


  return (
    <div className="w-full max-w-lg mx-auto   bg-white ">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-3 text-center">
        Welcome Back to MailGen
      </h2>
      <h2 className="text-lg  text-gray-600 mb-8 text-center">
        Get started for free — no credit card needed
      </h2>

      <div className="flex w-full flex-col">
        <div className="">
          <Button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-3xl mb-0 border border-gray-300 bg-white text-gray-700 font-medium py-5 hover:bg-gray-50 mb-6"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="text-xl" />
            Continue with Google
          </Button>
        </div>
        <div className="divider">OR</div>
        
          {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your Work Email"
                    {...field}
                    className={`h-13 text-lg px-4 bg-white border ${
                      fieldState.invalid
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                        : "border-gray-400 focus:border-gray-600 focus:ring-1 focus:ring-gray-300"
                    }`}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-lg font-normal">Password</FormLabel>
                <div className="relative">
                <FormControl>
                  <Input
                    type={showPasssword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className={`h-13 text-lg px-4 bg-white border ${
                      fieldState.invalid
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                        : "border-gray-400 focus:border-gray-600 focus:ring-1 focus:ring-gray-300"
                    }`}
                  />
                </FormControl>
                <Button
                        type="button"
                        onClick={() => {
                          setShowPassword(!showPasssword);
                        }}
                        className={`absolute right-2 bg-white text-black hover:bg-white  top-1/6`}
                      >
                        {showPasssword ? <Eye /> : <EyeOff />}
                      </Button>
                    </div>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            className="w-full rounded-3xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-5"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-blue-500 hover:underline font-medium"
        >
          Register
        </Link>
      </p>
        </div>
      </div>
    
  );
}
