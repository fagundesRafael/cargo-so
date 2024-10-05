"use client";
import { useState } from "react";
import Search from "./Search";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";

export default function SearchHeader() {
  const [menuViewOpen, setMenuViewOpen] = useState(false);
  const [position, setPosition] = useState("absolute");
  const [styles, setStyles] = useState(
    "top-[128px] my-2 px-3 pb-1 text-templateDeadBlue transition-all duration-600 ease-in"
  );
  const [percentageValue, setPercentageValue] = useState("60%");

  const handleMenuView = () => {
    if (menuViewOpen === true) {
      setMenuViewOpen(false);
      setPosition("absolute");
      setStyles("top-[128px] my-2 px-3 pb-1 text-templateDeadBlue transition-all duration-600 ease-in");
      setPercentageValue("60%");
    } else {
      setMenuViewOpen(true);
      setPosition("relative");
      setStyles(
        "flex items-center justify-between gap-3 my-2 px-3 pb-1 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue transition-all duration-600 ease-in"
      );
      setPercentageValue("100%");
    }
  };

  return (
    <div
      style={{ width: `calc(${percentageValue} - 16px)` }}
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
          <Search searchValue={"ma"} label={"pela marca:"} />
          <Search searchValue={"mo"} label={"pelo modelo:"} />
          <div className={"invisible"} ></div>
        </>
      )}
    </div>
  );
}
