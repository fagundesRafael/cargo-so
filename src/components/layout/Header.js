"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={"p-3 bg-headerBackGround flex gap-2 items-center relative"}>
      <Link href="/">
        <Image
          src="/cargo-utils/logos/Cargo-logo-01.png"
          alt="Logo"
          width={30}
          height={30}
        />
      </Link>
      <Link className={"absolute"} href="/">
        <h1 className={"text-templateBlue ml-10"}>
          CARGO <span className={"text-templateWhite"}>SO</span>{" "}
        </h1>
      </Link>
    </header>
  );
}
