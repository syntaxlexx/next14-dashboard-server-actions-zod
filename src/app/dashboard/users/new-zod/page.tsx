import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addUser } from "@/lib/actions";
import Content from "./content";

interface Props {}

const Page = async ({}: Props) => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
