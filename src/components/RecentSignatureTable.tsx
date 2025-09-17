import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
const recentSignatures = [
  { id: 1, name: "Signature #1", date: "2025-09-15", template: "Professional" },
  { id: 2, name: "Signature #2", date: "2025-09-14", template: "Minimal" },
];
const RecentSignatures = () => {
  return (
   <>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-semibold text-gray-900">
      Recent Signatures
    </h2>
    <Button
      variant="outline"
      className="text-sm text-blue-600 hover:bg-blue-50"
    >
      View All
    </Button>
  </div>

  <div className="bg-gray-100 rounded-xl border border-gray-300 shadow-md p-5 ">
    <Table>
      <TableHeader className="">
        <TableRow>
          <TableHead className="text-gray-600 font-medium">Name</TableHead>
          <TableHead className="text-gray-600 font-medium">Date</TableHead>
          <TableHead className="text-gray-600 font-medium">Template</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {recentSignatures.map((sig) => (
          <TableRow
            key={sig.id}
            className="hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <TableCell className="font-medium text-gray-900">
              {sig.name}
            </TableCell>
            <TableCell className="text-gray-500">{sig.date}</TableCell>
            <TableCell className="text-gray-500">{sig.template}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</>

  );
};

export default RecentSignatures;
