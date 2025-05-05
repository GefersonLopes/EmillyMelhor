import { FaCalendarAlt } from "react-icons/fa";
import { PiEyeClosedDuotone } from "react-icons/pi";

export const links = [
  {
    href: "/page/servicos",
    title: "Serviços 🤍",
    icon: (
      <PiEyeClosedDuotone className="text-primary" size={50} />
    ) as React.ReactNode,
  },
  {
    href: "/page/agenda",
    title: "Agende aqui 🤍",
    icon: (
      <FaCalendarAlt className="text-primary" size={50} />
    ) as React.ReactNode,
  },
];
