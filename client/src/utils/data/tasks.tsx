import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiEyeClosedDuotone } from "react-icons/pi";

import { generateWhatsAppLink } from "../generics/generateMessageToSendWhatsApp";

//TODO: add more tasks

export const tasks = [
  {
    href: generateWhatsAppLink(
      import.meta.env.VITE_CELLPHONE_NUMBER,
      "Olá, tudo bem? Gostaria de agendar um horário contigo",
    ),
    target: "_blank",
    title: "Agende aqui 🤍",
    icon: (
      <FaCalendarAlt className="text-primary" size={50} />
    ) as React.ReactNode,
  },
  {
    href: "/servicos",
    title: "Serviços 🤍",
    icon: (
      <PiEyeClosedDuotone className="text-primary" size={50} />
    ) as React.ReactNode,
  },
  {
    href: generateWhatsAppLink(
      import.meta.env.VITE_CELLPHONE_NUMBER,
      "Olá, tudo bem? Gostaria de agendar um horário contigo",
    ),
    title: "Localização 🤍",
    target: "_blank",
    icon: (
      <FaMapMarkerAlt className="text-primary" size={50} />
    ) as React.ReactNode,
  },
];
