import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const About = () => {
  return (
    <div className="mt-4 flex gap-1">
      <Link
        href="https://instagram.com/emillymelhorlash"
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram size={28} className="hover:text-primary" />
      </Link>
      <Link
        href="https://api.whatsapp.com/send?phone=5575982008306"
        target="_blank"
        aria-label="Instagram"
      >
        <FaWhatsapp size={28} className="hover:text-primary" />
      </Link>
    </div>
  );
};
