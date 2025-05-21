import clsx from "clsx";

import { Link } from "../Link";

interface LinkCardProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export default function SocialMidia({
  className,
  links,
}: {
  className?: string;
  links?: LinkCardProps[];
}) {
  return (
    <section
      className={clsx("mt-4 flex gap-1 items-center justify-center", className)}
    >
      {links?.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          aria-label={link.title}
        >
          {link.icon}
        </Link>
      ))}
    </section>
  );
}
