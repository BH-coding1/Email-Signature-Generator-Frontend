"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useParams } from "@tanstack/react-router";

import { useSignature } from "@/context/SavedSignatureContext";

// --- Form schema ---
const formSchema = z.object({
  fontFamily: z.string().min(1, "Please select a font"),
  fontSize: z.number().min(10).max(48),
  textColor: z.string(),
  linkColor: z.string(),
  boldName: z.boolean(),
  italicJob: z.boolean(),
  themeColor: z.string(),
  alignment: z.enum(["left", "center", "right"]),
  borderStyle: z.enum(["none", "solid", "dashed", "dotted"]),
  borderColor: z.string(),
  borderRadius: z.number().min(0).max(50),
  profileImage: z.string().optional(),
  showSocialIcons: z.boolean(),
});

type StylesFormValues = z.infer<typeof formSchema>;

const fonts = ["Arial", "Helvetica", "Roboto", "Times New Roman", "Georgia"];

const StylesEditor = () => {
  // get styles + updater from context
  const { data, setStyle } = useSignature();
    const { SignatureID } = useParams({ from: "/PlatformTools/SignatureLibrary/$SignatureID/Editor/" });
  const form = useForm<StylesFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: data.style, //  prefill with current context styles
  });

  const onSubmit = (values: StylesFormValues) => {
    setStyle(values,SignatureID); 
  };

  return (
    <div className="max-w-3xl bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-10">Signature Style Editor</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          {/* Typography Section */}
          <section>
            <h3 className="text-lg font-medium mb-4">Typography</h3>
            <div className="space-y-4">
              {/* Font Family */}
              <FormField
                control={form.control}
                name="fontFamily"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Font Family</FormLabel>
                    <FormControl className="flex-1">
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          {fonts.map((font) => (
                            <SelectItem key={font} value={font}>
                              {font}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Font Size */}
              <FormField
                control={form.control}
                name="fontSize"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Font Size</FormLabel>
                    <FormControl className="flex-1">
                      <Slider
                        value={[field.value]}
                        min={10}
                        max={48}
                        step={1}
                        onValueChange={(val) => field.onChange(val[0])}
                        className="w-[200px]"
                      />
                    </FormControl>
                    <span className="ml-4 text-sm text-gray-500">{field.value}px</span>
                  </FormItem>
                )}
              />

              {/* Bold Name */}
              <FormField
                control={form.control}
                name="boldName"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Bold Name</FormLabel>
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="h-4 w-4"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Italic Job */}
              <FormField
                control={form.control}
                name="italicJob"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Italic Job Title</FormLabel>
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="h-4 w-4"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </section>

          <Separator />

          {/* Colors Section */}
          <section>
            <h3 className="text-lg font-medium mb-4">Colors</h3>
            <div className="space-y-4">
              {["themeColor", "textColor", "linkColor", "borderColor"].map((colorKey) => (
                <FormField
                  key={colorKey}
                  control={form.control}
                  name={colorKey as keyof StylesFormValues}
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <FormLabel className="w-40 text-gray-600 capitalize">
                        {colorKey.replace(/([A-Z])/g, " $1")}
                      </FormLabel>
                      <FormControl>
                        <input
                          type="color"
                          value={typeof field.value === "string" ? field.value : "#000000"}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-16 h-8 border rounded-md cursor-pointer"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </section>

          <Separator />

          {/* Layout Section */}
          <section>
            <h3 className="text-lg font-medium mb-4">Layout & Borders</h3>
            <div className="space-y-4">
              {/* Alignment */}
              <FormField
                control={form.control}
                name="alignment"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Alignment</FormLabel>
                    <FormControl className="flex-1">
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-[200px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="left">Left</SelectItem>
                          <SelectItem value="center">Center</SelectItem>
                          <SelectItem value="right">Right</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Border Style */}
              <FormField
                control={form.control}
                name="borderStyle"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Border Style</FormLabel>
                    <FormControl className="flex-1">
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-[200px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="solid">Solid</SelectItem>
                          <SelectItem value="dashed">Dashed</SelectItem>
                          <SelectItem value="dotted">Dotted</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Border Radius */}
              <FormField
                control={form.control}
                name="borderRadius"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Border Radius</FormLabel>
                    <FormControl className="flex-1">
                      <Slider
                        value={[field.value]}
                        min={0}
                        max={50}
                        step={1}
                        onValueChange={(val) => field.onChange(val[0])}
                        className="w-[200px]"
                      />
                    </FormControl>
                    <span className="ml-4 text-sm text-gray-500">{field.value}px</span>
                  </FormItem>
                )}
              />
            </div>
          </section>

          <Separator />

          {/* Icons Section */}
          <section>
            <h3 className="text-lg font-medium mb-4">Icons</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="showSocialIcons"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormLabel className="w-40 text-gray-600">Show Social Icons</FormLabel>
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="h-4 w-4"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </section>

          <div className="flex justify-end pt-6">
            <Button type="submit" className="px-6 bg-blue-600 hover:bg-blue-500 cursor-pointer">
              Save Styles
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StylesEditor;
