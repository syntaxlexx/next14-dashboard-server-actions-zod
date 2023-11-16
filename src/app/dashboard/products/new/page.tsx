import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Props {}

const Page = async ({}: Props) => {
  return (
    <div>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <form action="" className="space-y-4">
            <Input placeholder="title" name="title" required />

            <Select name="cat">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="computer">Computer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input placeholder="price" type="number" name="price" required />
            <Input placeholder="stock" type="number" name="stock" required />
            <Input placeholder="color" type="number" name="color" required />
            <Input placeholder="size" type="number" name="size" required />
            <Textarea
              placeholder="Description"
              rows={16}
              name="description"
              id="description"
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
