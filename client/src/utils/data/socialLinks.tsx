import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { hrefInstagram, hrefWhatsApp } from "../const/socialLinks";

export const socialLinks = [
  {
    href: hrefInstagram,
    title: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: hrefWhatsApp,
    title: "WhatsApp",
    icon: <WhatsAppIcon />,
  },
];
