import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Props {}

const Page = async ({}: Props) => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to Your Account</CardTitle>
          <CardDescription>Provide your credentials</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form action="" className="space-y-4">
            <Input type="text" name="username" placeholder="Username/email" />
            <Input type="password" name="password" placeholder="Password" />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
