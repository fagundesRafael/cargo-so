import Link from "next/link";
import { BsFillHouseGearFill } from "react-icons/bs";
import { procedures } from "@/utils/avaliableOptions";
import { fetchCarBrands, fetchMotoBrands } from "@/actions/fetchItem/Brands";
import ConfigComponent from "./_components/ConfigComponent";

export default async function Configuracoes() {
  const carBrands = await fetchCarBrands();
  const motoBrands = await fetchMotoBrands();

  return (
    <div className={"flex flex-col min-h-[100vh] w-full"}>
      <div
        style={{ width: "calc(100% - 16px)" }}
        className={
          "flex flex-col justify-between my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
        }
      >
        {/* <BsFillHouseGearFill className={"text-2xl mb-1"} /> */}
        <ConfigComponent carBrands={JSON.stringify(carBrands)} motoBrands={JSON.stringify(motoBrands)} />
      </div>
    </div>
  );
}
