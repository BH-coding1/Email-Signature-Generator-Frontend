import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SignaturePreviewCard() {
  return (
    <Card className="col-span-2 shadow-sm border">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-xl font-semibold">
            Professional Signature Preview
          </CardTitle>
          <CardDescription>
            How your signature will appear in inboxes
          </CardDescription>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">Copy HTML</Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Edit
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="bg-white p-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo512.png"
              className="h-14 w-14 rounded-full"
              alt="avatar"
            />

            <div>
              <div className="text-lg font-semibold">John Hancock</div>
              <div className="text-sm text-slate-600">
                Head of Sales • Acme Inc.
              </div>
              <div className="text-sm text-slate-500 mt-2">
                📞 +27 73 744 9823 • 🌐 acme.co
              </div>
            </div>
          </div>

          <div className="mt-5 border-t pt-4 text-sm text-slate-700">
            <p>Best regards,</p>
            <p className="font-semibold mt-2">John Hancock</p>
            <p className="text-xs text-slate-500 mt-1">Acme Inc • Sales</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
