"use client";
import { BsFillGearFill } from "react-icons/bs";
import { BiCar } from "react-icons/bi";
import { GiPistolGun, GiPowder } from "react-icons/gi";
import { FaMobileAlt, FaUsersCog, FaUserCircle } from "react-icons/fa";
import { PiMotorcycleFill } from "react-icons/pi";
import { AiFillDatabase } from "react-icons/ai";
import { MdLogin, MdLogout } from "react-icons/md";
import MenuLink from "../ui/MenuLink";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const menuItens = [
    {
      title: "ITENS",
      list: [
        {
          label: "Motocicletas",
          path: "/motocicletas",
          icon: <PiMotorcycleFill />,
        },
        {
          label: "Automóveis",
          path: "/automoveis",
          icon: <BiCar />,
        },
        {
          label: "Armas/munições",
          path: "/armasemunicoes",
          icon: <GiPistolGun />,
        },
        {
          label: "Telefones",
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
    await signOut({ callbackUrl: "/login" });
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
        <FaUserCircle className={"text-templateDeadBlue text-[28px]"} />
        {status === "authenticated" && (
          <h2 className={"text-templateGrey text-[12px] font-bold"}>
            Bem vindo{" "}
            <span className={"text-templateGreen"}>
              {userNameSession?.split(" ")[0]}
            </span>
          </h2>
        )}
      </div>
      <ul>
        {menuItens.map((item) => (
          <li className={"mt-6 text-templateDeadBlue"} key={item.title}>
            <span>{item.title}</span>
            {item.list.map((item) => (
              <MenuLink key={item.label} item={item} />
            ))}
          </li>
        ))}
      </ul>
      {session.status === "authenticated" ? (
        <button
          onClick={handleSignOut}
          className={
            "flex gap-2 items-center mt-8 text-templateDeadBlue text-[12px] font-bold"
          }
        >
          <MdLogout className={"text-[26px]"} />
          Sair (logout)
        </button>
      ) : (
        <Link
          href={"/login"}
          className={
            "flex gap-2 items-center mt-8 text-templateGreen text-[12px] font-bold"
          }
        >
          <MdLogin className={"text-[26px]"} />
          Entrar (login)
        </Link>
      )}
    </div>
  );
}
