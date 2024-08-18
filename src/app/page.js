"use client";
import { usePathname } from "next/navigation";
import RouteHeaderMenu from "./components/layout/RouteMenu";
import CardStatus from "./components/layout/CardStatus";
import BlueReport from "./components/layout/BlueReport";

export default function Home() {
  const pathName = usePathname();

  return (
    <div className={"min-h-[200vh] w-full"}>
      <RouteHeaderMenu pathName={pathName} />
      <div className={"flex gap-6"}>
        <div className={"flex flex-col"}>
          <div className={"flex gap-6 w-full"}>
            <CardStatus />
            <CardStatus />
            <CardStatus />
            <CardStatus />
          </div>
          <div>
            <h1>Hello World!</h1>
          </div>
        </div>
        <div>
        <BlueReport />
      </div>
      </div>
    </div>
  );
}
