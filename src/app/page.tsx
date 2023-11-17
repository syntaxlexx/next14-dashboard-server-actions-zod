import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Next14 Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4 flex flex-col items-center justify-center">
          <p>Proceed to view the dasboard</p>
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
