
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const errorCodes = [
  {
    code: "ERROR_NOT_AUTHORIZED",
    description: "User is not authorized to perform the requested action. Check your rules to ensure they are correct.",
  },
  {
    code: "ERROR_RETRY_LIMIT_EXCEEDED",
    description: "The maximum time limit on an operation (upload, download, delete, etc.) has been exceeded. Try uploading again.",
  },
];

export default function DocsPage() {
  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline">
          API Documentation
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Standardized codes and conventions for the Legitimate Shed API.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Error Codes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Error Code</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {errorCodes.map((error) => (
                  <TableRow key={error.code}>
                    <TableCell className="font-mono">{error.code}</TableCell>
                    <TableCell>{error.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
