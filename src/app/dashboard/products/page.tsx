import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { formatDate } from "@acelords/js-utils";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";
import Link from "next/link";

const products: Product[] = [
  {
    image: "https://i.pravatar.cc/50?u=1",
    createdAt: new Date(),
    id: "1",
    title: "Product One",
    description: "product one description",
    price: 4500,
    currency: "$",
    cat: "phone",
    color: "red",
    size: "l",
    stock: 34,
  },
];

interface Props {}

const Page = async ({}: Props) => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div>
            <Input placeholder="Search for a product" />
          </div>

          <Link href="/dashboard/products/new">
            <Button>Add New</Button>
          </Link>
        </div>

        <Table>
          <TableCaption>A list of products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  {item.title}
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{formatDate(item.createdAt)}</TableCell>
                <TableCell>{item.cat}</TableCell>
                <TableCell>
                  {item.currency}
                  {item.price}
                </TableCell>
                <TableCell className="flex flex-wrap gap-2">
                  <Button size="sm">View</Button>
                  <Button size="sm" variant="destructive">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Total
              </TableCell>
              <TableCell className="text-right">{products.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Page;
