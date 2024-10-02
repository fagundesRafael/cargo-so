import Image from "next/image";

export default function Loading() {
  return (
    <div className={"flex justify-center items-center"} >
      <Image
            src={"/cargo-utils/logos/Cargo-logo-02.png"}
            alt={""}
            width={50}
            height={50}
          />
    </div>
  )
}
