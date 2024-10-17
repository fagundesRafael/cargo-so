"use client";
import { addNewCarModel } from "@/actions/addItem/Brands";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

export default function SingleConfigForms({ id }) {
  const [loading, setLoading] = useState(false);
  const [itemLog, setItemLog] = useState("");
  const [model, setModel] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("id", id); // Adiciona o id ao formData
    try {
      await addNewCarModel(formData);
      setItemLog("Item atualizado com sucesso!");
      setModel(""); // Limpa o campo de input
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

  return (
    <form className={"flex mt-1 gap-1"} onSubmit={handleSubmit}>
      <input
        className={"w-16 max-h-5"}
        type="text"
        name="model"
        id="model"
        placeholder="modelo"
        title="Informe o nome do modelo"
        required={true}
        disabled={loading}
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{ textTransform: "uppercase" }}
      />
      <button
        type={"submit"}
        className={"flex items-center max-h-5 transition-transform duration-200 ease-in-out hover:scale-150 hover:text-green-900 text-templateGreen "}
        disabled={loading}
      >
        <MdAddCircleOutline />
        {/* <span className={"text-[11px] "}>add</span> */}
      </button>
      {itemLog && <span>{itemLog}</span>}
    </form>
  );
}