import { CTAButton } from "../components/layout/CTAButton";
import { LinkCard } from "../components/layout/LinkCard";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { List } from "../components/ui/List";
import SocialMidia from "../components/ui/SocialMidia";
import { hrefWhatsApp } from "../utils/const/socialLinks";
import { footerSections } from "../utils/data/footer";
import { socialLinks } from "../utils/data/socialLinks";
import { tasks } from "../utils/data/tasks";

function HomePage() {
  return (
    <main className="relative min-h-screen bg-dark text-slate-50 flex flex-col">
      <Header />
      <SocialMidia links={socialLinks} />
      <List items={tasks}>
        {(item) => <LinkCard {...item} className="max-w-lg" />}
      </List>
      <section className="w-full flex items-center justify-center mb-4">
        <CTAButton
          href={hrefWhatsApp}
          text="Entrar em contato"
          className="w-full max-w-lg mx-4"
        />
      </section>
      <Footer
        logo="/assets/cover.jpg"
        sections={footerSections}
        socialLinks={socialLinks}
        className="mt-auto"
      />
    </main>
  );
}

export default HomePage;
