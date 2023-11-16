"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  perPage?: number;
  total: number;
}

const Pagination: FC<Props> = ({ perPage = 2, total }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);

  const totalPages = Math.ceil(total / perPage);

  const hasPrev = perPage * (Number(page) - 1) > 0;
  const hasNext = perPage * (Number(page) - 1) + perPage < total;

  const handleClick = (type: "prev" | "next") => {
    type == "prev"
      ? params.set("page", String(Number(page) - 1))
      : params.set("page", String(Number(page) + 1));

    router.replace(`${pathname}?${params}`);
  };

  return (
    <div className="w-full my-4 md:my-6 flex justify-between items-center">
      <Button disabled={!hasPrev} onClick={(e) => handleClick("prev")}>
        <ChevronLeft className="w-4 h-4 pr-1" />
        Prev
      </Button>
      <div>
        Showing {perPage} of {total} items &middot; Page {page}/{totalPages}
      </div>
      <Button disabled={!hasNext} onClick={(e) => handleClick("next")}>
        Next <ChevronRight className="w-4 h-4 pl-1" />
      </Button>
    </div>
  );
};

export default Pagination;
