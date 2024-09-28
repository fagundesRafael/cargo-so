"use client";

import Link from "next/link";

export default function MenuLink({ item }) {
  return (
    <Link href={item.path} className={"flex items-center my-2 gap-1"}>
      <div
        className={
          "flex items-center shadow-lg justify-center border rounded-[4px] w-7 h-7 bg-white"
        }
      >
        {item.icon}
      </div>
      {item.label}
    </Link>
  );
}
