"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FC } from "react";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  query: string | undefined | null;
}

const Filters: FC<Props> = ({ query }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (e.target.value) {
        {
          if (e.target.value.length >= 2) {
            params.set("q", encodeURI(e.target.value));
          }
        }
      } else {
        params.delete("q");
      }
      router.replace(`${pathname}?${params}`);
    },
    300
  );

  return (
    <div className="relative">
      <Input
        placeholder="Search for a user"
        onChange={handleSearch}
        className="pr-4"
        // value={q}
      />

      <Search className="w-4 text-slate-500 absolute top-0 bottom-0 right-2 grid h-full items-center" />
    </div>
  );
};

export default Filters;
