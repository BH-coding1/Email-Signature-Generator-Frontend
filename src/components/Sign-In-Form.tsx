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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function SignInForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    try {
      console.log("Submitted:", values);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("✅ Signed in successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong, try again.");
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto  bg-white ">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-3 text-center">
        Welcome Back to MailGen
      </h2>
      <h2 className="text-lg  text-gray-600 mb-8 text-center">
        Get started for free — no credit card needed
      </h2>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          {/* Username */}
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field}
                    className={`h-13 text-lg px-4 bg-white border ${
                      fieldState.invalid
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                        : "border-gray-400 focus:border-gray-600 focus:ring-1 focus:ring-gray-300"
                    }`}
                  />
                </FormControl>
                <FormDescription>
                  This will be your public display name.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

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
                <FormLabel className="text-lg font-medium">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
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
  );
}
