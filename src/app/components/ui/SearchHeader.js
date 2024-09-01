"use client";
import { useState } from "react";
import Search from "./Search";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";

export default function SearchHeader() {
  const [menuViewOpen, setMenuViewOpen] = useState(false);
  const [position, setPosition] = useState("absolute");
  const [styles, setStyles] = useState("top-[128px] my-2 px-3 pb-1 text-templateDeadBlue");

  const handleMenuView = () => {
    if (menuViewOpen === true) {
      setMenuViewOpen(false);
      setPosition("absolute");
      setStyles("top-[128px] my-2 px-3 pb-1 text-templateDeadBlue");
    } else {
      setMenuViewOpen(true);
      setPosition("relative");
      setStyles(
        "flex items-center justify-between gap-3 my-2 px-3 pb-1 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
      );
    }
  };

  return (
    <div
      style={{ width: "calc(100% - 16px)" }}
      className={`flex ${position} ${styles}`}
    >
      <button onClick={() => handleMenuView()}>
        {menuViewOpen === true ? (
          <FaSearchMinus className={"text-xl"} />
        ) : (
          <FaSearchPlus className={"text-xl"} />
        )}
      </button>
      {menuViewOpen && (
        <>
          <Search searchValue={"pr"} label={"pelo procedimento:"} />
          <Search searchValue={"nu"} label={"pelo número:"} />
          <Search searchValue={"pl"} label={"pela placa:"} />
          <Search searchValue={"ch"} label={"pelo chassi:"} />
        </>
      )}
    </div>
  );
}
