import { Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"


export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/70 border-b border-slate-200 w-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Left Side (Logo + Title) */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            MG
          </div>
          <div>
            <h1 className="text-lg font-semibold">MailGen</h1>
            <p className="text-xs text-slate-500">
              Manage signatures, templates & integrationsdescription
            </p>
          </div>
        </div>

        {/* Right Side (Buttons) */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-slate-200"
          >
            <Mail className="h-4 w-4 text-slate-600" />
            <span className="text-sm text-slate-700">Inbox</span>
          </Button>

          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <User className="h-4 w-4" />
            <span className="text-sm">Account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}