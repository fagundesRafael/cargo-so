"use client";
// import { addNewAuto } from "@/actions/addItem/Auto";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";


export default function ConfigForms() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    await addNewBrand(formData);
    setLoading(false);
  }

  return (
    <form className={"flex mt-1 gap-1"} 
    onSubmit={handleSubmit}>
      {/* <label className={"w-3 p-1 mb-2"}>NOME DA MARCA</label> */}
      <input
        className={"w-16 max-h-5"}
        type="text"
        name="brand"
        id="brand"
        placeholder="marca"
        title="Informe o nome da marca"
        required={true}
        disabled={loading}
      ></input>
      <input
        className={"w-16 max-h-5"}
        type="text"
        name="model"
        id="model"
        placeholder="modelo"
        required={true}
        disabled={loading}
        title="Informe o nome do modelo"
      />
      <button
        type={"submit"}
        className={"flex items-center max-h-5 text-templateGreen "}
        disabled={loading}
      >
        <MdAddCircleOutline />
        <span className={"text-[11px]"} >add</span>
      </button>
    </form>
  );
}
