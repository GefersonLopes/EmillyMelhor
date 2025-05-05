import Image from "next/image";
import Link from "next/link";

interface LinkCardProps {
  href: string;
  title: string;
  imageSrc: string;
}

export function LinkCard({ href, title, imageSrc }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="flex items-center bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={56}
          height={56}
          className="object-cover"
        />
      </div>
      <span className="ml-4 text-base sm:text-lg font-medium">{title}</span>
    </Link>
  );
}
