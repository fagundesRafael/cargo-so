"use client";
import { updateAuto } from "@/actions/updateItem/Auto";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { formatDateWithTime } from "@/utils/formatDate";

export const EditForm = ({ auto }) => {
  const [data, setData] = useState(JSON.parse(auto));
  const [imageUrl, setImageUrl] = useState(data.imagem);

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
        <option value="">PROCEDIMENTO</option>
        <option value="APF">FLAGRANTE</option>
        <option value="IPL">INQUÉRITO</option>
        <option value="BOL">BOLETIM</option>
        <option value="TCO">TERMO CIRCUNSTANCIADO</option>
        <option value="BOC">BOC</option>
        <option value="MPE">MINISTÉRIO PÚBLICO</option>
        <option value="JUD">JUDICIÁRIO</option>
        <option value="SEI">SEI</option>
        <option value="OUTRO">OUTRO</option>
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

      <input
        className={"w-44"}
        name="marca"
        id="marca"
        type="text"
        placeholder="MARCA"
        disabled={false}
        style={{ textTransform: "uppercase" }}
        defaultValue={data.marca}
      />

      <input
        className={"w-44"}
        name="modelo"
        id="modelo"
        type="text"
        placeholder="MODELO"
        disabled={false}
        style={{ textTransform: "uppercase" }}
        defaultValue={data.modelo}
      />

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
        <option value="">COR</option>
        <option value="BRANCO">BRANCO</option>
        <option value="CINZA">CINZA</option>
        <option value="AZUL">AZUL</option>
        <option value="PRETO">PRETO</option>
        <option value="VERMELHO">VERMELHO</option>
        <option value="ROSA">ROSA</option>
        <option value="VERDE">VERDE</option>
        <option value="AMARELO">AMARELO</option>
        <option value="ROXO">ROXO</option>
        <option value="OUTRO">OUTRO</option>
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
      <div className={"flex text-center items-center ml-auto"} >
      <span id="spanCreatedBy">
        Criado por <span className={"underline font-semibold"} >{data.createdBy}</span> <br />
        dia {createdAt.slice(0, 10)}, às {createdAt.slice(11, 14)}h {" "}
        {createdAt.slice(15, 17)}m.
      </span>
      {data.updatedAt && (
        <span id="spanCreatedBy">
        Atualizado por <span className={"underline font-semibold"} >{data.updatedBy}</span> <br />
        no dia {updatedAt.slice(0, 10)}, às {updatedAt.slice(11, 14)}h {" "}
        {updatedAt.slice(15, 17)}m.
      </span>
      )}
      </div>
    </form>
  );
};
