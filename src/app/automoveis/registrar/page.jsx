import RegisterForm from "@/app/automoveis/registrar/_components/RegisterForm";
import Upload from "@/components/ui/UpLoad";

export default function Registrar() {

  return (
    <div
      style={{ width: "calc(100% - 16px)" }}
      className={"flex gap-4"}
    >
      <RegisterForm/>
      <div
        className={
          "w-full relative flex flex-col my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
        }
      >
        <Upload/>
      </div>
    </div>
  );
}
