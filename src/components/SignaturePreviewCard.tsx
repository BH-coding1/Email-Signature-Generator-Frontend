import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ClassicLayout from "./ClassicLayout";
import { useSignature } from "@/context/SignatureContext";
export default function SignaturePreviewCard() {
  const {data} = useSignature()
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
        <ClassicLayout signature={data}/>
      </CardContent>
    </Card>
  );
}
