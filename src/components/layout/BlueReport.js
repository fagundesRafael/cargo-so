import Link from "next/link";

export default function BlueReport() {
  return (
    <>
      <div
        style={{ width: "calc(100% - 16px)" }}
        className={
          " text-white my-2 rounded-xl bg-gradient-to-r from-[#383f6b] to-[#1d2138] p-4"
        }
      >
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          consectetur, doloribus tenetur natus libero quidem aliquid recusandae
          ipsum culpa dolorum, eius laborum adipisci nam error obcaecati
          mollitia sint neque voluptatibus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dignissimos repudiandae delectus
          commodi, fugiat illo odit culpa doloremque eius alias enim.
        </h1>
      </div>
      <div
        style={{ width: "calc(100% - 16px)" }}
        className={
          " text-white my-2 rounded-xl bg-gradient-to-r from-[#383f6b] to-[#1d2138] p-4"
        }
      >
        <h1 className={"flex flex-col"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          iusto repellat?
          <Link className={"underline"} href="/blue-report">
          clique aqui {">>"} </Link>
        </h1>
      </div>
    </>
  );
}
