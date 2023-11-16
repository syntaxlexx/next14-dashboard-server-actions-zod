import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addUser } from "@/lib/actions";

interface Props {}

const Page = async ({}: Props) => {
  return (
    <div>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <form action={addUser} className="space-y-4">
            <div className="grid md:grid-cols-2 md:gap-4">
              <Input placeholder="username" name="username" required />
              <Input
                placeholder="password"
                name="password"
                type="password"
                required
              />
              <Input placeholder="email" name="email" type="email" required />
              <Input placeholder="phone" name="phone" type="phone" />
              <Label htmlFor="isAdmin">
                <Checkbox name="isAdmin" id="isAdmin" />
                <span className="pl-1">Is Admin?</span>
              </Label>
              <Label htmlFor="isActive">
                <Checkbox name="isActive" id="isActive" />
                <span className="pl-1">Is Active?</span>
              </Label>
            </div>

            <Textarea
              placeholder="Address"
              rows={4}
              name="address"
              id="address"
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
