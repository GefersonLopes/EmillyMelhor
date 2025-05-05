import { FaArrowRight } from "react-icons/fa";

interface CTAButtonProps {
  href: string;
  text: string;
}

export function CTAButton({ href, text }: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center border border-white hover:bg-white hover:text-black transition py-3 rounded-full text-base sm:text-lg font-semibold"
    >
      <span className="mr-2">{text}</span>
      <FaArrowRight />
    </a>
  );
}
