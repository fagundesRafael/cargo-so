"use client";
import Link from "next/link";
import { FiBox } from "react-icons/fi";

export default function CardStatus({
  description = "Descrição",
  status = "Apreendidos",
  number = "10%",
  icon = <FiBox />,
  path = "/",
}) {
  return (
    <>
      <Link
        href={path}
        className={
          " bg-templateWhite my-2 p-3 rounded-lg shadow-lg text-templateDeadBlue"
        }
      >
        <h2 className={"text-xs"}>{description}</h2>
        <div className={"flex gap-2 items-center"}>
          <h1 className={" font-semibold"}>{status}</h1>
          <span className={"text-xs text-green-700 font-bold"}>{number}</span>
          <div
            className={
              "relative -top-[6px] bg-gradient-to-r text-templateWhite from-[#20c0f7] to-[#215cf7] p-1 rounded-sm"
            }
          >
            {icon}
          </div>
        </div>
      </Link>
    </>
  );
}
