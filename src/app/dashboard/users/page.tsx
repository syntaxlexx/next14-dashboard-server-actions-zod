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
import Link from "next/link";
import { fetchUsers } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Filters from "./filters";
import Pagination from "@/components/pagination";
import { deleteUser, deleteUserClient } from "@/lib/actions";
import DeleteClient from "./delete-client";

interface Props {
  searchParams: {
    q: string;
    page: string;
  };
}

const Page = async ({ searchParams: { q, page } }: Props) => {
  const query = decodeURI(q ?? "");

  const { count, users } = await fetchUsers({
    q: query,
    page: page ? Number(page) : 1,
  });

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <Filters query={query} />

          <div className="flex gap-2">
            <Link href={`/dashboard/users/new`}>
              <Button>Add New</Button>
            </Link>
            <Link href={`/dashboard/users/new-zod`}>
              <Button>Add New (Zod)</Button>
            </Link>
          </div>
        </div>

        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => {
              const url = `/dashboard/users/${item.id}`;

              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <Link
                      href={url}
                      className="font-medium flex items-center gap-2"
                    >
                      <Avatar>
                        <AvatarImage src={item.img} alt="avatar" />
                        <AvatarFallback>
                          {item.username.substring(0, 1)}
                        </AvatarFallback>
                      </Avatar>

                      {item.username}
                    </Link>
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{formatDate(item.createdAt)}</TableCell>
                  <TableCell>{item.isAdmin ? "Admin" : "Client"}</TableCell>
                  <TableCell className="flex flex-wrap gap-2">
                    <Link href={url}>
                      <Button size="sm">View</Button>
                    </Link>

                    <form action={deleteUser}>
                      <input type="hidden" value={item.id} name="id" />
                      <Button size="sm" variant="destructive" type="submit">
                        Delete
                      </Button>
                    </form>

                    <DeleteClient id={item.id} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                Total
              </TableCell>
              <TableCell className="text-right">{users.length}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5}>
                <Pagination total={count} perPage={2} />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Page;
