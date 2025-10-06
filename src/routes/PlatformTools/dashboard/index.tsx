import MetricsSection from "@/components/MetricsSection";
import SideBarLayout from "@/components/SidebarLayout";
import SignaturePreviewCard from "@/components/SignaturePreviewCard";
import { useAuth } from "@clerk/clerk-react";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/PlatformTools/dashboard/")({
  beforeLoad: async () => {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      throw redirect({
        to: "/sign-in",
        search: { redirect: "/PlatformTools/dashboard/" },
      });
    }
  },
  component: SignatureDashboard,
  errorComponent: () => (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Denied</h1>
      <p className="text-gray-600">Please sign in to access dashboard.</p>
      <Link
        to="/sign-in"
        className="btn mt-5 h-12 sm:h-13 w-full sm:w-40 lg:w-50 bg-white border border-blue-600 text-blue-600 rounded-4xl text-base sm:text-lg hover:bg-blue-100 transition duration-300"
      >
        Sign In
      </Link>
    </div>
  ),
});

export default function SignatureDashboard() {
  // const recent = [
  //   { id: 1, name: "Sales — John Doe", template: "Modern Blue", date: "Sep 14" },
  //   { id: 2, name: "Support — Jane", template: "Minimal", date: "Sep 12" },
  //   { id: 3, name: "Marketing — Team", template: "Corporate", date: "Sep 10" },
  // ];

  const templates = [
    { id: 1, name: "Modern ", accent: "bg-blue-200", badge: "Free" },
    { id: 2, name: "Minimal", accent: "bg-gray-100", badge: "Pro" },
    { id: 3, name: "Corporate", accent: "bg-amber-100", badge: "Free" },
  ];

  return (
    <SideBarLayout>
      <div className="min-h-screen bg-slate-100  text-slate-900 px-8">
        {/* Content area */}
        <main className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-8">
          {/* metrics */}
          <MetricsSection />

          {/* Signature preview + actions */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Preview card */}
            <SignaturePreviewCard />

            {/* Right column: templates + integrations */}
            <aside className="space-y-4 sm:w-full ">
              <div className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm  sm:w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Templates</div>
                    <div className="text-lg font-semibold">Pick a design</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {templates.map((t) => (
                    <div
                      key={t.id}
                      className={`rounded-md p-2 flex items-center justify-center ${t.accent} border border-slate-100`}
                    >
                      <div className="text-sm font-medium">{t.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm h-66">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Integrations</div>
                    <div className="text-lg font-semibold">Connect inboxes</div>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-1 gap-2">
                  <div className="flex items-center justify-between p-2 rounded-md border border-slate-100">
                    <div className="flex items-center gap-3">
                      <img
                        src="/google_mail_gmail_logo_icon_159346.png"
                        className="h-6 w-6"
                      />
                      <div className="text-sm">Gmail</div>
                    </div>
                    <button className="text-sm text-gray-500">Connected</button>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-md border border-slate-100">
                    <div className="flex items-center gap-3">
                      <img
                        src="/microsoft_office_outlook_logo_icon_145721.png"
                        className="h-6 w-6"
                      />
                      <div className="text-sm">Outlook</div>
                    </div>
                    <button className="text-sm text-gray-500">Connected</button>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-md border border-slate-100">
                    <div className="flex items-center gap-3">
                      <img
                        src="/1485482357-yahoo_78671.png"
                        className="h-6 w-6"
                      />
                      <div className="text-sm">Yahoo</div>
                    </div>

                    <button className="text-sm text-gray-500">Connected</button>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-md border border-slate-100">
                    <div className="flex items-center gap-3">
                      <img src="/Airmail.png" className="h-6 w-6" />
                      <div className="text-sm">Airmail</div>
                    </div>
                    <button className="text-sm text-gray-500">Connected</button>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          {/* Recent activity
          <section>
            <div className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <div className="text-sm text-slate-500">Last 30 days</div>
              </div>

              <div className="mt-4 divide-y">
                {recent.map((r) => (
                  <div key={r.id} className="py-3 flex items-center justify-between">
                    <div>
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-slate-500">{r.template}</div>
                    </div>
                    <div className="text-xs text-slate-500">{r.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Footer CTA */}
          <section className="flex items-center justify-center mb-10 ">
            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-lg w-full max-w-4xl text-center">
              <div className="text-xl font-semibold">
                Ready to Create your signature?
              </div>
              <div className="mt-2">
                Go and try out our latest Templates and create your very own
                Signature Now
              </div>
              <div className="mt-4">
                <Link
                  to="/PlatformTools/SignatureGenerator/Editor"
                  className="px-5 py-2 bg-white text-blue-600 rounded-md font-medium"
                >
                  Create
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SideBarLayout>
  );
}
