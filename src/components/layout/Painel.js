export default function Painel() {
  return (
    <div className={" bg-templateWhite my-2 p-3 rounded-lg shadow-lg"}>
      <div>
        <h1 className={"text-templateDeadBlue mb-1"} >Últimos registros:</h1>
      </div>
      <table className={"flex flex-col"}>
        <thead className={"w-full text-templateWhite text-sm"}>
          <tr className={"flex justify-between"}>
            <td className={"w-[100px] p-1 bg-templateDeadBlue"}>
              Pocedimento
            </td>
            <td className={"w-[100px] p-1 bg-templateDeadBlue"}>Origem</td>
            <td className={"w-[100px] p-1 bg-templateDeadBlue"}>
              Descrição
            </td>
            <td className={"w-[100px] p-1 bg-templateDeadBlue"}>Marca</td>
            <td className={"w-[100px] p-1 bg-templateDeadBlue"}>Data</td>
            <td className={"w-[100px] p-1 bg-templateDeadBlue"}>
              Situação
            </td>
            <td className={"w-[100px] p-1 bg-templateDeadBlue"}>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr className={"flex justify-between"}>
            <td
              className={
                "w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
              }
            >
              1
            </td>
            <td
              className={
                "w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
              }
            >
              1
            </td>
            <td
              className={
                "w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
              }
            >
              1
            </td>
            <td
              className={
                "w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
              }
            >
              1
            </td>
            <td
              className={
                "w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
              }
            >
              1
            </td>
            <td
              className={
                "w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
              }
            >
              1
            </td>
            <td
              className={
                "w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
              }
            >
              1
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
