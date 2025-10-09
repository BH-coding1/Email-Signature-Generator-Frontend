import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from '@/components/RegisterForm'
export const Route = createFileRoute("/(auth)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full min-h-screen bg-white shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Right Form Section (take 2/3) */}
        <div className="md:col-span-2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <RegisterForm/>
          </div>
        </div>

        {/* Left Welcome Section (take 1/3) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-r from-cyan-600 to-blue-500  p-10">
          <p className=" text-white text-center text-xl  max-w-xs">
            Register to create your account and start creating amazing emails
            with <span className="font-semibold">MailGen</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
