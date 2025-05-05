import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { CTAButtonProps } from "@/types/components/layout/CTAButton";

export function CTAButton({ href, text }: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center border border-white hover:bg-white hover:text-primary transition py-3 mt-5 rounded-full text-base sm:text-lg font-semibold"
    >
      <span className="mr-2">{text}</span>
      <motion.span
        animate={{ x: [0, 12] }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <FaArrowRight size={20} />
      </motion.span>
    </a>
  );
}
