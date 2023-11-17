"use client";

import { Button } from "@/components/ui/button";
import { deleteUserClient } from "@/lib/actions";
import { FC } from "react";
import { toast } from "sonner";

interface Props {
  id: string;
}

const DeleteClient: FC<Props> = ({ id }) => {
  return (
    <Button
      size="sm"
      variant="destructive"
      type="button"
      onClick={(e) => {
        if (confirm("Sure to delete?")) {
          deleteUserClient({ id })
            .then(() => {
              console.log("deleted");
            })
            .catch((err) => {
              toast.error("Could not delete!", { description: "Try again" });
              //   console.error(err);
            });
        }
      }}
    >
      Delete (Client)
    </Button>
  );
};

export default DeleteClient;
