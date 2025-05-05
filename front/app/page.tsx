import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { CTAButton } from "./components/layout/CTAButton";
import { LinkCard } from "./components/layout/LinkCard";
import { Header } from "./components/ui/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <Header />

      {/* Ícone Instagram */}
      <Link
        href="https://instagram.com/seu_usuario"
        target="_blank"
        className="mt-4"
        aria-label="Instagram"
      >
        <FaInstagram size={28} />
      </Link>

      {/* LINKS PRINCIPAIS */}
      <main className="mt-8 w-full max-w-md px-4 space-y-4">
        <LinkCard
          href="/bio"
          title="Serviços ❤️"
          imageSrc="/images/thumb1.jpg"
        />
        <LinkCard
          href="/calendar"
          title="Agenda 💜"
          imageSrc="/images/thumb2.jpg"
        />

        {/* BOTÃO CHAMADA PRA AÇÃO */}
        <CTAButton href="https://instabio.cc/" text="Create a free bio site" />
      </main>
    </div>
  );
}
