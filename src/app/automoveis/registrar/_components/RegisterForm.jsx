"use client";
import { addNewAuto } from "@/actions/addItem/Auto";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { colors, procedures, carBrands } from "@/utils/avaliableOptions";

export default function Registrar() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [brand, setBrand] = useState("");

  const session = useSession();
  const status = session.status;
  if (session.status === "authenticated") {
    var userNameSession = session.data.user.name;
  }
  console.log(status);
  console.log(userNameSession);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("createdBy", userNameSession);
    await addNewAuto(formData);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "flex flex-wrap gap-2 my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
      }
    >
      <label className={"w-full p-1 mb-2"}>
        PREENCHA CORRETAMENTE OS DADOS DA NOVA MOTOCICLETA:
      </label>
      <select
        className={"w-44"}
        name="procedimento"
        id="procedimento"
        title="Informe se é o procedimento é um Inquérito, BO, TCO, etc."
        required={true}
        disabled={loading}
      >
        {procedures.map((procedure) => (
          <option key={procedure.label} value={procedure.value}>
            {procedure.label}
          </option>
        ))}
      </select>
      <input
        className={"w-44"}
        type="text"
        name="numero"
        id="numero"
        placeholder="NÚMERO"
        required={true}
        disabled={loading}
        title="Números separados por barras, pontos ou traços. Exemplo: 123/2022 ou 123.2022 ou 123-2022"
        pattern="^(?=.*[\/\.\-])[0-9\/\.\-]*$"
      />
      <select
        className={"w-44"}
        name="marca"
        id="marca"
        required={true}
        disabled={loading}
        onChange={(e) => setBrand(e.target.value)}
      >
        {carBrands.map((brand) => (
          <option key={brand.brand} value={brand.brand}>
            {brand.brand}
          </option>
        ))}
      </select>

      <select
        className={"w-44"}
        name="modelo"
        id="modelo"
        required={true}
        disabled={loading || !brand}
      >
        <option value="" disabled={loading} selected>
          MODELO
        </option>
        {carBrands
          .filter((car) => car.brand === brand)
          .flatMap((car) => car.models)
          .map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
      </select>

      <input
        className={"w-44"}
        name="placa"
        id="placa"
        type="text"
        placeholder="PLACA"
        disabled={loading}
        style={{ textTransform: "uppercase" }}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/\s/g, "").toUpperCase();
        }}
      />

      <input
        className={"w-44"}
        name="chassi"
        id="chassi"
        type="text"
        placeholder="CHASSI"
        disabled={loading}
        style={{ textTransform: "uppercase" }}
        onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
      />

      <select
        className={"w-44"}
        name="cor"
        id="cor"
        required={true}
        disabled={loading}
      >
        {colors.map((color) => (
          <option key={color.label} value={color.value}>
            {color.label}
          </option>
        ))}
      </select>

      <select
        className={"w-44"}
        name="chave"
        id="chave"
        required={true}
        disabled={loading}
        title="Informe se a chave do veículo foi apreendida ou não."
      >
        <option value="">CHAVE APREENDIDA?</option>
        <option value={true}>SIM</option>
        <option value={false}>NÃO</option>
      </select>
      
      <select
        className={"w-44"}
        name="situacao"
        id="situacao"
        required={true}
        title="Informe a localização do veículo em tela."
      >
        <option value="">SITUAÇÃO</option>
        <option value="PÁTIO">PÁTIO</option>
        <option value="RESTITUÍDO">RESTITUÍDO</option>
        <option value="OUTRO">OUTRO</option>
      </select>
      <input
        className={"w-44"}
        name="imagem"
        id="imagem"
        type="text"
        placeholder="imagem URL"
        disabled={loading}
        onInput={(e) => (e.target.value = e.target.value)}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <textarea
        className={"w-full min-h-24 p-2 bg-slate-100 mb-2 "}
        name="observacao"
        id="observacao"
        cols="14"
        disabled={loading}
        placeholder="Observações adicionais:"
      ></textarea>
      <button
        type={"submit"}
        className={"bg-templateDeadBlue text-templateWhite p-2 rounded-lg"}
        disabled={loading}
      >
        REGISTRAR VEÍCULO
      </button>
    </form>
  );
}
