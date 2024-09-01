"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ label, searchValue }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set(`${searchValue}`, e.target.value);
    } else {
      params.delete(`${searchValue}`);
    }
    replace(`${pathname}?${params}`);
  }, 200);

  return (
    <div className={"relative flex flex-col justify-start"}>
      <label className={"text-[10px]"}>{label}</label>
      <input
        className={" bg-slate-200 w-28 px-2 "}
        name="searchOptions"
        type="search"
        placeholder="Filtrar"
        onChange={handleSearch}
      />
      <MdSearch
        className={"absolute text-[10px] right-1 top-1 text-templateDeadBlue"}
      />
    </div>
  );
}
