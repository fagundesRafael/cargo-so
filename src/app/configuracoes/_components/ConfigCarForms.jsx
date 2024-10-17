"use client";
import { addNewCarBrand } from "@/actions/addItem/Brands";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

export default function ConfigForms() {
  const [loading, setLoading] = useState(false);
  const [itemLog, setItemLog] = useState("");
  const [formData, setFormData] = useState({ brand: "", model: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    try {
      await addNewCarBrand(formData);
      setItemLog("Item atualizado com sucesso!");
      setFormData({ brand: "", model: "" });
      setTimeout(() => {
        setItemLog("");
      }, 3000);
    } catch (error) {
      setItemLog("Houve um erro ao atualizar o item.");
      setTimeout(() => {
        setItemLog("");
      }, 3000);
    }
    setLoading(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.toUpperCase(),
    });
  };

  return (
    <div className={"flex flex-col"} >
      <form className={"flex mt-1 gap-1"} onSubmit={handleSubmit}>
      <input
        className={"w-16 max-h-5"}
        type="text"
        name="brand"
        id="brand"
        placeholder="marca"
        title="Informe o nome da marca"
        required={true}
        disabled={loading}
        value={formData.brand}
        onChange={handleChange}
        // style={{ textTransform: "uppercase" }}
      />
      <input
        className={"w-16 max-h-5"}
        type="text"
        name="model"
        id="model"
        placeholder="modelo"
        disabled={loading}
        title="Informe o nome do modelo"
        value={formData.model}
        onChange={handleChange}
        // style={{ textTransform: "uppercase" }}
      />
      <button
        type={"submit"}
        className={"flex items-center max-h-5 text-templateGreen "}
        disabled={loading}
      >
        <MdAddCircleOutline />
        <span className={"text-[11px]"}>add</span>
      </button>
    </form>
      {itemLog && <span className={"text-[10px] text-templateGreen"} >{itemLog}</span>}
    </div>
  );
}
