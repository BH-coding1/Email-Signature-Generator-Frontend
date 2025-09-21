"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSignature } from "@/context/SignatureContext"; // 👈 import context

// --- Schema ---
const formSchema = z.object({
  FirstName: z.string().min(2, "First name must be at least 2 characters"),
  LastName: z.string().min(2, "Last name must be at least 2 characters").optional(),
  JobTitle: z.string().optional(),
  CompanyName: z.string().optional(),
  PhoneNumber: z
    .string()
    .regex(/^[\d+\-() ]+$/, "Invalid phone number format")
    .optional(),
  EmailAddress: z.string().email("Invalid email address"),
  Website: z.string().url("Invalid URL").optional(),
  Address: z.string().optional(),
});

type SchemaKeys = keyof z.infer<typeof formSchema>;

export type FieldType = {
  Name: SchemaKeys;
  Type: string;
  description?: string;
  label: string;
  placeholder: string;
};

const Fields: FieldType[] = [
  { Name: "FirstName", placeholder: "John", Type: "text", label: "First Name" },
  { Name: "LastName", placeholder: "Doe", Type: "text", label: "Last Name" },
  { Name: "JobTitle", placeholder: "Software Engineer", Type: "text", label: "Job Title" },
  { Name: "CompanyName", placeholder: "Acme Inc.", Type: "text", label: "Company Name" },
  { Name: "PhoneNumber", placeholder: "+1 555 123 4567", Type: "tel", label: "Phone Number" },
  { Name: "EmailAddress", placeholder: "john.doe@example.com", Type: "email", label: "Email Address" },
  { Name: "Website", placeholder: "https://example.com", Type: "url", label: "Website" },
  { Name: "Address", placeholder: "123 Main Street, New York, USA", Type: "text", label: "Address" },
];

const CompanyEditor = () => {
  const { data, setCompany } = useSignature(); // context
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data.company, // prefill with context values
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCompany(values); // 👈 save to context
    console.log("Updated Context:", values);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Company Information</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* --- Personal Info --- */}
          <div className="space-y-4 border-b pb-6">
            <h3 className="text-sm font-medium text-gray-700">Personal Info</h3>
            {Fields.slice(0, 3).map((f) => (
              <FormField
                key={f.Name}
                control={form.control}
                name={f.Name}
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4">
                    <FormLabel className="w-40 text-sm font-medium text-gray-600">
                      {f.label}
                    </FormLabel>
                    <div className="flex-1">
                      <FormControl>
                        <Input placeholder={f.placeholder} {...field} type={f.Type} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* --- Company Info --- */}
          <div className="space-y-4 border-b pb-6">
            <h3 className="text-sm font-medium text-gray-700">Company Info</h3>
            {Fields.slice(3, 4).map((f) => (
              <FormField
                key={f.Name}
                control={form.control}
                name={f.Name}
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4">
                    <FormLabel className="w-40 text-sm font-medium text-gray-600">
                      {f.label}
                    </FormLabel>
                    <div className="flex-1">
                      <FormControl>
                        <Input placeholder={f.placeholder} {...field} type={f.Type} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* --- Contact Info --- */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Contact Info</h3>
            {Fields.slice(4).map((f) => (
              <FormField
                key={f.Name}
                control={form.control}
                name={f.Name}
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4">
                    <FormLabel className="w-40 text-sm font-medium text-gray-600">
                      {f.label}
                    </FormLabel>
                    <div className="flex-1">
                      <FormControl>
                        <Input placeholder={f.placeholder} {...field} type={f.Type} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 cursor-pointer transition duration-300"
            >
              Save Company Info
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CompanyEditor;
