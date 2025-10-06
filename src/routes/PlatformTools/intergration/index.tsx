import SideBarLayout from "@/components/SidebarLayout";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@clerk/clerk-react";
export const Route = createFileRoute("/PlatformTools/intergration/")({
  beforeLoad: async () => {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      throw redirect({
        to: "/sign-in",
        search: { redirect: "/PlatformTools/intergration/" },
      });
    }
  },
  component: RouteComponent,
  errorComponent: () => (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Denied</h1>
      <p className="text-gray-600">Please sign in to access integrations.</p>
      <Link
        to="/sign-in"
        className="btn mt-5 h-12 sm:h-13 w-full sm:w-40 lg:w-50 bg-white border border-blue-600 text-blue-600 rounded-4xl text-base sm:text-lg hover:bg-blue-100 transition duration-300"
      >
        Sign In
      </Link>
    </div>
  ),
});

const intergrationApps = [
  {
    name: "Gmail",
    logo: "../../public/google_mail_gmail_logo_icon_159346.png",
    description:
      "Easily apply and preview your signatures in Gmail with one click.",
  },
  {
    name: "Outlook",
    logo: "../../public/microsoft_office_outlook_logo_icon_145721.png",
    description:
      "Seamlessly sync signatures across Outlook desktop and web apps.",
  },
  {
    name: "Yahoo",
    logo: "../../public/1485482357-yahoo_78671.png",
    description:
      "Add professional signatures to your Yahoo Mail with quick setup.",
  },
  {
    name: "Airmail",
    logo: "../../public/Airmail.png",
    description:
      "Integrate signatures directly into Airmail for a smooth workflow.",
  },
];

function RouteComponent() {
  return (
    <SideBarLayout>
      <div className="p-10 pt-2`">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Integrations</h1>
        <p className="text-gray-600 mb-8">
          Connect your email client to preview and deploy signatures seamlessly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  gap-6">
          {intergrationApps.map((app) => (
            <Card
              key={app.name}
              className="shadow-sm border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <CardHeader className="flex ">
                <div className="h-20 w-20 flex items-center justify-center rounded-lg bg-gray-50 border">
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="h-12 object-contain"
                  />
                </div>
              </CardHeader>

              <CardContent className=" space-y-2">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {app.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{app.description}</p>
              </CardContent>

              <CardFooter className="flex justify-center"></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SideBarLayout>
  );
}
