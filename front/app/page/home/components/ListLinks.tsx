"use client";

import { motion } from "framer-motion";

import { CTAButton } from "@/app/components/layout/CTAButton";
import { LinkCard } from "@/app/components/layout/LinkCard";

import { LinkCardProps } from "../../interfaces/types";
import { container, item } from "../utils/link.animations";

export const ListLinks = ({ links }: { links: LinkCardProps[] }) => {
  return (
    <main className="mt-8 w-full max-w-md px-4 space-y-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        {links.map((link) => (
          <motion.div key={link.href} variants={item}>
            <LinkCard href={link.href} title={link.title} icon={link.icon} />
          </motion.div>
        ))}
      </motion.div>
      <CTAButton
        href="https://api.whatsapp.com/send?phone=5575982008306"
        text="Entrar em contato"
      />
    </main>
  );
};
