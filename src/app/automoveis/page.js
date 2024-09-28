import { LuChevronsUpDown } from "react-icons/lu";
import { MdOutlineAddCircleOutline, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import { fetchAutos } from "@/actions/fetchItem/Auto";
import { formatDate } from "@/utils/formatDate";
import Pagination from "../../components/ui/pagination";
import SearchHeader from "../../components/ui/SearchHeader";

export default async function Automoveis({ searchParams }) {
  const pr = searchParams?.pr || "";
  const nu = searchParams?.nu || "";
  const pl = searchParams?.pl || "";
  const ch = searchParams?.ch || "";
  const ma = searchParams?.ma || "";
  const mo = searchParams?.mo || "";
  const page = searchParams?.page || 1;
  const { count, autos } = await fetchAutos(pr, nu, pl, ch, ma, mo, page);

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
            href={"/automoveis/registrar"}
            className={"flex gap-1 text-templateGreen items-center pb-2"}
          >
            <h2 className={"underline "}>Registrar novo veículo</h2>
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
              {autos &&
                autos.map((auto, index) => (
                  <tr
                    key={index}
                    className={"flex justify-between text-[12px]"}
                  >
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.procedimento}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[80px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.numero}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.marca}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.modelo}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[80px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.placa}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.chassi}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.cor}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {formatDate(auto.createdAt)}
                    </td>
                    <td
                      className={
                        "flex justify-between items-center w-[100px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      {auto.situacao}
                    </td>

                    <td
                      className={
                        "flex justify-end items-center w-[60px] p-1 border-b-2 overflow-hidden text-ellipsis whitespace-nowrap "
                      }
                    >
                      <Link href={`/automoveis/${auto.id}`}>
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
