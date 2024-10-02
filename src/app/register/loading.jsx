import Image from "next/image";

export default function Loading() {
  return (
    <div className={"m-auto"} >
        <h1 className={"text-[100px]"} >Carregando página...</h1>
      <Image
            src={"/cargo-utils/logos/Cargo-logo-02.png"}
            alt={""}
            width={100}
            height={100}
          />
    </div>
  )
}
