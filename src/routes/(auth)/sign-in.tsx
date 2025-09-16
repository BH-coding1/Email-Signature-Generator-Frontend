import SignInForm from "@/components/Sign-In-Form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full min-h-screen bg-white shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Right Form Section (take 2/3) */}
        <div className="md:col-span-2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <SignInForm />
          </div>
        </div>

        {/* Left Welcome Section (take 1/3) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-t from-sky-500 to-indigo-500 text-white  p-10">
          <p className=" text-blue-100 text-center text-xl max-w-xs">
            Sign in to access your account and continue creating amazing emails
            with <span className="font-semibold">MailGen</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
