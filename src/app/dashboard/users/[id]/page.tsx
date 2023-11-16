import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fetchUser, updateUser } from "@/lib/actions";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string | number;
  };
}

const Page = async ({ params: { id } }: Props) => {
  const user = await fetchUser(id);

  if (!user) return notFound();

  return (
    <div>
      <Card>
        <CardContent className="pt-6 grid md:grid-cols-3 gap-4">
          <div>
            <Avatar className="h-32 w-32">
              <AvatarImage src={user.img} alt="avatar" />
              <AvatarFallback>{user.username.substring(0, 1)}</AvatarFallback>
            </Avatar>
          </div>

          <form action={updateUser} className="space-y-4 md:col-span-2">
            <input name="id" type="hidden" value={user.id} />

            <div className="grid md:grid-cols-2 md:gap-4">
              <Input
                placeholder="username"
                name="username"
                defaultValue={user.username}
                required
              />
              <Input
                placeholder="new password"
                name="password"
                type="password"
              />
              <Input
                placeholder="email"
                name="email"
                type="email"
                required
                defaultValue={user.email}
              />
              <Input
                placeholder="phone"
                name="phone"
                type="phone"
                defaultValue={user.phone}
              />
              <Label htmlFor="isAdmin">
                <Checkbox
                  name="isAdmin"
                  id="isAdmin"
                  defaultChecked={user.isAdmin}
                />
                <span className="pl-1">Is Admin?</span>
              </Label>
              <Label htmlFor="isActive">
                <Checkbox
                  name="isActive"
                  id="isActive"
                  defaultChecked={user.isActive}
                />
                <span className="pl-1">Is Active?</span>
              </Label>
            </div>

            <Textarea
              placeholder="Address"
              rows={4}
              name="address"
              id="address"
              defaultValue={user.address}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
