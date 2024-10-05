"use client";
import { updateAuto } from "@/actions/updateItem/Auto";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { formatDateWithTime } from "@/utils/formatDate";
import { colors, procedures, carBrands } from "@/utils/selectOptions";

export const EditForm = ({ auto }) => {
  const [data, setData] = useState(JSON.parse(auto));
  const [brand, setBrand] = useState(data.marca);
  const [imageUrl, setImageUrl] = useState(data.imagem);
  const [loading, setLoading] = useState(false);

  const createdAt = formatDateWithTime(data.createdAt);
  const updatedAt = formatDateWithTime(data.updatedAt);

  console.log("fetched data", data);
  console.log("fetched auto", auto);

  const session = useSession();
  const status = session.status;
  if (session.status === "authenticated") {
    var userNameSession = session.data.user.name;
  }
  console.log(status);
  console.log(userNameSession);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("updatedBy", userNameSession);

    await updateAuto(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "flex flex-wrap gap-2 my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
      }
    >
      <label className={"w-full p-1 mb-2"}>
        ATUALIZE CORRETAMENTE OS DADOS DO NOVO VEÍCULO:
      </label>
      <input type="hidden" name="id" value={data._id} />
      <select
        className={"w-44"}
        name="procedimento"
        id="procedimento"
        title="Informe se é o procedimento é um Inquérito, BO, TCO, etc."
        defaultValue={data.procedimento}
        required={true}
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
        title="Números separados por barras, pontos ou traços. Exemplo: 123/2022 ou 123.2022 ou 123-2022"
        pattern="^(?=.*[\/\.\-])[0-9\/\.\-]*$"
        defaultValue={data.numero}
      />

      <select
        className={"w-44"}
        name="marca"
        id="marca"
        required={true}
        disabled={loading}
        onChange={(e) => setBrand(e.target.value)}
        defaultValue={data.marca}
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
        defaultValue={data.modelo}
      >
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
        disabled={false}
        style={{ textTransform: "uppercase" }}
        defaultValue={
          data.placa === "SEM PLACA" ? (data.placa = "") : data.placa
        }
      />

      <input
        className={"w-44"}
        name="chassi"
        id="chassi"
        type="text"
        placeholder="CHASSI"
        disabled={false}
        style={{ textTransform: "uppercase" }}
        defaultValue={
          data.chassi === "SEM CHASSI" ? (data.chassi = "") : data.chassi
        }
      />

      <select
        className={"w-44"}
        name="cor"
        id="cor"
        required={true}
        disabled={false}
        defaultValue={data.cor}
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
        disabled={false}
        title="Informe se a chave do veículo foi apreendida ou não."
        defaultValue={data.chave}
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
        defaultValue={data.situacao}
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
        onInput={(e) => (e.target.value = e.target.value)}
        onChange={(e) => setImageUrl(e.target.value)}
        value={imageUrl}
      />

      <textarea
        className={"w-full min-h-24 p-2 bg-slate-100 mb-2 "}
        name="observacao"
        id="observacao"
        cols="14"
        disabled={false}
        placeholder="Observações adicionais:"
        defaultValue={data.observacao}
      ></textarea>
      <button
        type="submit"
        className={"bg-templateDeadBlue text-templateWhite p-2 rounded-lg"}
      >
        REGISTRAR VEÍCULO
      </button>
      <div className={"flex text-center items-center ml-auto"}>
        <span id="spanCreatedBy">
          Criado por{" "}
          <span className={"underline font-semibold"}>{data.createdBy}</span>{" "}
          <br />
          dia {createdAt.slice(0, 10)}, às {createdAt.slice(11, 14)}h{" "}
          {createdAt.slice(15, 17)}m.
        </span>
        {data.updatedAt && (
          <span id="spanCreatedBy">
            Atualizado por{" "}
            <span className={"underline font-semibold"}>{data.updatedBy}</span>{" "}
            <br />
            no dia {updatedAt.slice(0, 10)}, às {updatedAt.slice(11, 14)}h{" "}
            {updatedAt.slice(15, 17)}m.
          </span>
        )}
      </div>
    </form>
  );
};
