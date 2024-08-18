"use client";
import { BsBoxes, BsFillGearFill } from "react-icons/bs";
import { BiCar } from "react-icons/bi";
import { GiPistolGun, GiPowder } from "react-icons/gi";
import { FaMobileAlt, FaUsersCog, FaUserCircle } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import MenuLink from "../ui/MenuLink";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const menuItens = [
    {
      title: "ITENS",
      list: [
        {
          label: "Listar todos",
          path: "/",
          icon: <BsBoxes />,
        },
        {
          label: "Veículos em geral",
          path: "/veiculos",
          icon: <BiCar />,
        },
        {
          label: "Armas e munições",
          path: "/armasemunicoes",
          icon: <GiPistolGun />,
        },
        {
          label: "Aparelhos telefônicos",
          path: "/telefones",
          icon: <FaMobileAlt />,
        },
        {
          label: "Entorpecentes",
          path: "/entorpecentes",
          icon: <GiPowder />,
        },
        {
          label: "Outros",
          path: "/outrositens",
          icon: <AiFillDatabase />,
        },
      ],
    },
    {
      title: "SISTEMA",
      list: [
        {
          label: "Log de usuários",
          path: "/usuarios",
          icon: <FaUsersCog />,
        },
        {
          label: "Configurações",
          path: "/configuracoes",
          icon: <BsFillGearFill />,
        },
      ],
    },
  ];

  const pathname = usePathname();

  let sideBarStick = "sticky top-0 w-[220px] h-[90vh] p-4";

  if (pathname === "/login" || pathname === "/register") {
    sideBarStick = "absolute left-[-220px] top-0 h-[90vh] p-4";
  } else {
    sideBarStick = "sticky top-0 w-[220px] h-[90vh] p-4";
  }

  const handleSignOut = async () => {
    await signOut({callbackUrl: "/login"});
  };

  const session = useSession();
  const status = session.status;
  // console.log(status);
  // console.log(session.data.user.name);
  if (session.status === "authenticated") {
    var userNameSession = session.data.user.name;
  }

  return (
    <div className={`${sideBarStick}`}>
      <div className={"flex gap-2 items-center mt-3"}>
        <FaUserCircle className={"text-templateiconDeadBlue text-[28px]"} />
        {status === "authenticated" && (
          <h2 className={"text-templateTextGrey text-[12px] font-bold"}>
            Bem vindo{" "}
            <span className={"text-templateTextGreen"}>{userNameSession?.split(" ")[0]}</span>
          </h2>
        )}
      </div>
      <ul>
        {menuItens.map((item) => (
          <li className={"mt-6 text-templateTextDeadBlue"} key={item.title}>
            <span>{item.title}</span>
            {item.list.map((item) => (
              <MenuLink key={item.label} item={item} />
            ))}
          </li>
        ))}
      </ul>

      <button
        onClick={handleSignOut}
        className={
          "flex gap-2 items-center mt-8 text-templateTextDeadBlue text-[12px] font-bold"
        }
      >
        <MdLogout className={"text-[26px]"} />
        Sair (logout)
      </button>
    </div>
  );
}
