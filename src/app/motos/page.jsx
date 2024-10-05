import { LuChevronsUpDown } from "react-icons/lu";
import { MdOutlineAddCircleOutline, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import { fetchMotos } from "@/actions/fetchItem/Moto";
import { formatDate } from "@/utils/formatDate";
import Pagination from "../../components/ui/pagination";
import SearchHeader from "../../components/ui/SearchHeader";

export default async function Motos({ searchParams }) {
  const pr = searchParams?.pr || "";
  const nu = searchParams?.nu || "";
  const pl = searchParams?.pl || "";
  const ch = searchParams?.ch || "";
  const ma = searchParams?.ma || "";
  const mo = searchParams?.mo || "";
  const page = searchParams?.page || 1;
  const { count, motos } = await fetchMotos(pr, nu, pl, ch, ma, mo, page);

  return (
    <div className={"flex flex-col min-h-[100vh] w-full"}>
      <SearchHeader />

      <div
        style={{ width: "calc(100% - 16px)" }}
        className={
          "flex flex-col justify-between my-2 p-3 bg-templateWhite rounded-lg shadow-lg  text-templateDeadBlue"
        }
      >
        <div className={"flex justify-between"}>
          <div className={"flex justify-between"}>
            <span>{""}</span>
          </div>
          <Link
            href={"/motos/registrar"}
            className={"flex gap-1 text-templateGreen items-center pb-2"}
          >
            <h2 className={"underline "}>Registrar nova motocicleta</h2>
            <MdOutlineAddCircleOutline className={"text-xl"} />
          </Link>
        </div>

        <div>
          <table className={"flex flex-col"}>
            <thead className={"w-full text-templateWhite text-sm"}>
              <tr className={"flex justify-between"}>
                <td
                  className={
                    "flex justify-between items-center w-[100px] p-1 bg-templateDeadBlue "
                  }
                >
                  Procedimento
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[80px] p-1 bg-templateDeadBlue "
                  }
                >
                  Número
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[100px] p-1 bg-templateDeadBlue "
                  }
                >
                  Marca
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[100px] p-1 bg-templateDeadBlue "
                  }
                >
                  Modelo
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[80px] p-1 bg-templateDeadBlue "
                  }
                >
                  Placa
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[100px] p-1 bg-templateDeadBlue "
                  }
                >
                  Chassi
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[100px] p-1 bg-templateDeadBlue "
                  }
                >
                  Cor
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[100px] p-1 bg-templateDeadBlue "
                  }
                >
                  Data
                  <LuChevronsUpDown />
                </td>
                <td
                  className={
                    "flex justify-between items-center w-[100px] p-1 bg-templateDeadBlue "
                  }
                >
                  Situação
                  <LuChevronsUpDown />
                </td>

                <td
                  className={
                    "flex justify-between items-center w-[60px] p-1 bg-templateDeadBlue "
                  }
                >
                  Ações
                </td>
              </tr>
            </thead>
            <tbody>
              {motos.length === 0 && (
                <div className={"text-center mb-6 mt-10 text-templateGray"}>
                  Nenhuma motocicleta foi encontrada no banco de dados!
                </div>
              )}
              {motos &&
                motos.map((moto, index) => (
                  <tr
                    key={index}
                    className={"flex justify-between text-[12px]"}
                  >
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.procedimento}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[80px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.numero}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.marca}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.modelo}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[80px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.placa}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.chassi}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.cor}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {formatDate(moto.createdAt)}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {moto.situacao}
                    </td>

                    <td
                      className={
                        "flex justify-end items-center w-[60px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      <Link href={`/motos/${moto.id}`}>
                        <FaRegEdit
                          className={
                            "text-templateGreen w-6 transition-transform duration-200 ease-in-out hover:scale-125 hover:text-green-900 "
                          }
                        />
                      </Link>
                      <button>
                        <MdDelete className="text-red-600 w-7 transition-transform duration-200 ease-in-out hover:scale-150 hover:text-red-800 hover:cursor-not-allowed " />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination count={count} />
        </div>
      </div>
    </div>
  );
}
