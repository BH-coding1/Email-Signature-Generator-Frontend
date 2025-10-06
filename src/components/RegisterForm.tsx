"use client";
import { FaGoogle } from "react-icons/fa";
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
import { useSignIn, useSignUp, useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

// Define the Zod schema for the form
const formSchema = z.object({
  firstName: z.string().min(1, "First name must be at least 1 character."),
  lastName: z.string().min(1, "Last name must be at least 1 character."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function SignUpForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const { isLoaded, signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission for sign-up
  async function onSubmit(values: FormSchemaType) {
    if (!isLoaded || !signUp) {
      return;
    }
    try {
      await signUp.create({
        firstName: values.firstName, 
        lastName: values.lastName,  
        emailAddress: values.email,  
        password: values.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      const errorMessage = err.errors?.[0]?.message || "Sign up failed. Try again.";
      alert(errorMessage);
    }
  }

  // Handle email verification
  async function onPressVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded || !signUp) {
      return;
    }
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: emailCode,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        alert("Email verified");
        navigate({ to: "/PlatformTools/dashboard" });
      } else {
        console.log(result);
        alert("Verification failed. Please check the code.");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      const errorMessage = err.errors?.[0]?.message || "Wrong code. Please check your email.";
      alert(errorMessage);
    }
  }

  // Handle Google OAuth sign-in
  async function handleGoogleSignIn() {
    try {
      if (!signIn) return;
      if (isSignedIn) {
        navigate({ to: "/PlatformTools/dashboard" });
        return;
      }
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/PlatformTools/dashboard",
      });
    } catch (err: any) {
      console.error("Google popup sign-in error:", JSON.stringify(err, null, 2));
      alert("Google sign-in failed. Try again.");
    }
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-3 text-center">
        Welcome to MailGen
      </h2>
      <h2 className="text-lg text-gray-600 mb-7 text-center">
        Get started for free — no credit card needed
      </h2>
      <div className="divider">OR</div>

      {pendingVerification ? (
        <form onSubmit={onPressVerify} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter 6-digit code"
            value={emailCode}
            onChange={(e) => setEmailCode(e.target.value)}
            className="h-13 text-lg px-4 bg-white border border-gray-400"
          />
          <Button
            type="submit"
            className="w-full rounded-3xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-5"
          >
            Verify Email
          </Button>
        </form>
      ) : (
        <>
          <Button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-3xl mb-0 border border-gray-300 bg-white text-gray-700 font-medium py-5 hover:bg-gray-50 mb-6"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="text-xl" />
            Continue with Google
          </Button>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your first name"
                        {...field}
                        className={`h-13 text-lg px-4 bg-white border ${
                          fieldState.invalid
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-400 focus:ring-gray-300"
                        }`}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your last name"
                        {...field}
                        className={`h-13 text-lg px-4 bg-white border ${
                          fieldState.invalid
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-400 focus:ring-gray-300"
                        }`}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your work email"
                        {...field}
                        className={`h-13 text-lg px-4 bg-white border ${
                          fieldState.invalid
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-400 focus:ring-gray-300"
                        }`}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-normal">Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                          className={`h-13 text-lg px-4 bg-white border ${
                            fieldState.invalid
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-400 focus:ring-gray-300"
                          }`}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 bg-white text-black hover:bg-white top-1/6"
                      >
                        {showPassword ? <Eye /> : <EyeOff />}
                      </Button>
                    </div>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full rounded-3xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-5"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Registering..." : "Register"}
              </Button>
            </form>
          </Form>
        </>
      )}

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-blue-500 hover:underline font-medium">
          Sign-in
        </Link>
      </p>
    </div>
  );
}