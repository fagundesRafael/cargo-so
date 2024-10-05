import Image from "next/image";

export default function Loading() {
  return (
    <div className={"flex flex-col justify-center items-center"} >
      <Image
            src={"/cargo-utils/logos/Cargo-logo-02.png"}
            alt={""}
            width={50}
            height={50}
          />
          <h1 className={"text-templateDeadBlue"} >Carregando...</h1>
          <div class="loader" ></div>
    </div>
  )
}
