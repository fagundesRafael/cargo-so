import { fetchMoto } from "@/actions/fetchItem/Moto";
import { EditForm } from "./_components/EditForm";
import Upload from "@/components/ui/UpLoad";

export default async function Update({ params }) {
  const { id } = params;

  let fetchedMoto = null;
  fetchedMoto = await fetchMoto(id);

  return (
    <div
      style={{ width: "calc(100% - 16px)" }}
      className={"flex gap-4"}
    >
      {fetchMoto && <EditForm moto={JSON.stringify(fetchedMoto)} />}
      <div
        className={
          "w-full relative flex flex-col my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
        }
      >
        <Upload imageUrl={JSON.stringify(fetchedMoto.imagem)} />
      </div>
    </div>
  );
}
