import { AiFillDatabase } from "react-icons/ai";
import { BiCar } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { FaMobileAlt, FaUsersCog } from "react-icons/fa";
import { GiPistolGun, GiPowder } from "react-icons/gi";
import { PiMotorcycleFill } from "react-icons/pi";

export const menuItens = [
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
          path: "/outros",
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
