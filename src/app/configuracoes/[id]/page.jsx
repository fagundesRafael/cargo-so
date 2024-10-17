import { fetchAuto } from "@/actions/fetchItem/Auto";
import { EditForm } from "./_components/EditForm";
import Upload from "@/components/ui/UpLoad";

export default async function Update({ params }) {
  const { id } = params;

  let fetchedAuto = null;
  fetchedAuto = await fetchAuto(id);

  return (
    <div
      style={{ width: "calc(100% - 16px)" }}
      className={"flex gap-4"}
    >
      {fetchAuto && <EditForm auto={JSON.stringify(fetchedAuto)} />}
      <div
        className={
          "w-full relative flex flex-col my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
        }
      >
        <Upload imageUrl={JSON.stringify(fetchedAuto.imagem)} />
      </div>
    </div>
  );
}
