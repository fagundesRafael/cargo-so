import CardStatus from "./components/layout/CardStatus";
import BlueReport from "./components/layout/BlueReport";
import Painel from "./components/layout/Painel";

export default function Home() {

  return (
    <div className={"min-h-[100vh] w-full"}>
      <div className={"flex gap-6"}>
        <div className={"flex flex-col"}>
          <div className={"flex gap-6 w-full"}>
            <CardStatus />
            <CardStatus />
            <CardStatus />
            <CardStatus />
          </div>
          <div>
            <Painel />
          </div>
        </div>
        <div>
        <BlueReport />
      </div>
      </div>
    </div>
  );
}
