import Image from "next/image";
import { fetchAuto } from "@/actions/fetchItem/Auto";
import { EditForm } from "./_components/EditForm";

export default async function Update({params}) {
  const {id} = params;

  let fetchedAuto = null
  fetchedAuto = await fetchAuto(id);

  return (
    <div
      style={{ width: "calc(100% - 16px)" }}
      className={"flex w-[100vw] gap-4"}
    >
      {fetchAuto && <EditForm auto={JSON.stringify(fetchedAuto)}/>}
      <div
        className={
          "w-[720px] relative flex flex-col my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
        }
      >
        <h1>IMAGEM DO VEÍCULO:</h1>
        <span className={"text-[10px] text-slate-700 "}>
          Aguarde o carregamento da imagem...
        </span>
        <Image
          className={"relative p-2"}
          src={"/generics-utils/no-image.jpg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"no-image"}
        />
      </div>
    </div>
  );
}

