"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSignature } from "@/context/SignatureContext";

// ✅ Form Schema
const formSchema = z.object({
  LogoUrl: z.string().url("Invalid URL").optional(),
  ProfilePictureUrl: z.string().url("Invalid URL").optional(),
  SignatureUrl: z.string().url("Invalid URL").optional(),
});

const ImagesEditor = () => {
  const { data,setImages} = useSignature(); // update context
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:data.images
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
   setImages(values)
    console.log("Saved:", values);
  }

  // 🔹 file picker handler
  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof z.infer<typeof formSchema>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file); // temp preview
      form.setValue(fieldName, fileUrl, { shouldValidate: true });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Images</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* 🔹 Logo Section */}
          <Card>
            <CardHeader>
              <CardTitle>Company Logo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border rounded-md p-5 bg-gray-50">
                <span className="text-sm text-gray-600">Upload your company logo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="logo-upload"
                  onChange={(e) => handleFileSelect(e, "LogoUrl")}
                />
                <label htmlFor="logo-upload">
                  <Button asChild variant="outline" className="bg-blue-600 text-white">
                    <span>Upload File</span>
                  </Button>
                </label>
              </div>

              <FormField
                control={form.control}
                name="LogoUrl"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>OR Logo URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/logo.png" {...field} />
                    </FormControl>
                    {field.value && (
                      <div className="mt-2">
                        <img
                          src={field.value}
                          alt="Logo preview"
                          className="h-16 object-contain rounded border"
                        />
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* 🔹 Profile Picture Section */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border rounded-md p-5 bg-gray-50">
                <span className="text-sm text-gray-600">Upload your profile picture</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="profile-upload"
                  onChange={(e) => handleFileSelect(e, "ProfilePictureUrl")}
                />
                <label htmlFor="profile-upload">
                  <Button asChild variant="outline" className="bg-blue-600 text-white">
                    <span>Upload File</span>
                  </Button>
                </label>
              </div>

              <FormField
                control={form.control}
                name="ProfilePictureUrl"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>OR Profile Picture URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/profile.png" {...field} />
                    </FormControl>
                    {field.value && (
                      <div className="mt-2">
                        <img
                          src={field.value}
                          alt="Profile preview"
                          className="h-16 w-16 rounded-full object-cover border"
                        />
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* 🔹 Signature Section */}
          <Card>
            <CardHeader>
              <CardTitle>Handwritten Signature</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border rounded-md p-5 bg-gray-50">
                <span className="text-sm text-gray-600">Upload your signature image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="signature-upload"
                  onChange={(e) => handleFileSelect(e, "SignatureUrl")}
                />
                <label htmlFor="signature-upload">
                  <Button asChild variant="outline" className="bg-blue-600 text-white">
                    <span>Upload File</span>
                  </Button>
                </label>
              </div>

              <FormField
                control={form.control}
                name="SignatureUrl"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>OR Signature URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/signature.png" {...field} />
                    </FormControl>
                    {field.value && (
                      <div className="mt-2">
                        <img
                          src={field.value}
                          alt="Signature preview"
                          className="h-12 object-contain border"
                        />
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 transition duration-300 cursor-pointer"
          >
            Save Images
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ImagesEditor;
