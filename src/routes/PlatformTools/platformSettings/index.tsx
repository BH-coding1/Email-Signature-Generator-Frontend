import SideBarLayout from '@/components/SidebarLayout'
import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useUser } from '@clerk/clerk-react'

export const Route = createFileRoute('/PlatformTools/platformSettings/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {user} = useUser()
  return(
    <SideBarLayout>
      
       <div className="w-full p-8 space-y-8">

      {/* Profile & Account */}
      <Card className="w-full shadow-sm border border-gray-200 rounded-xl">
        <CardHeader>
          <CardTitle>Profile & Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Full Name" defaultValue={user?.username?.toUpperCase() as string}/>
            <Input placeholder="Email" type="email" defaultValue={user?.emailAddresses as any} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Current Password" type="password" />
            <Input placeholder="New Password" type="password" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Update Profile</Button>
        </CardContent>
      </Card>

      {/* Company / Branding */}
      <Card className="w-full shadow-sm border border-gray-200 rounded-xl">
        <CardHeader>
          <CardTitle>Company / Branding</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Company Name" defaultValue="" />
          <Input placeholder="Website" type="url" defaultValue="" />
          <div className="flex items-center gap-4">
            <input type="file" />
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="w-full shadow-sm border border-gray-200 rounded-xl">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="w-full shadow-sm border border-gray-200 rounded-xl">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email me when signature is shared</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span>Reminders for unused signatures</span>
            <Switch />
          </div>
        </CardContent>
      </Card>

      
    </div>
    </SideBarLayout>
  )
}
