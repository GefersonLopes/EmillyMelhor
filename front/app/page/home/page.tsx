import { Header } from "@/app/components/ui/Header";

import { About } from "./components/about";
import { ListLinks } from "./components/ListLinks";
import { links } from "./utils/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <Header />
      <About />
      <ListLinks links={links} />
    </div>
  );
}
