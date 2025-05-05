import { useRouter } from "next/navigation";

import { LinkCardProps } from "@/app/page/interfaces/types";

export function LinkCard({ href, title, icon }: LinkCardProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="h-28 w-full flex items-center bg-[#1b1b1b] hover:bg-[#1b1b1b] transition rounded-lg"
    >
      <div className="w -full h-full flex items-center gap-2">
        <div className="w-24 h-full rounded-lg overflow-hidden p-0.5 bg-white flex items-center justify-center">
          {icon}
        </div>
        <span className="ml-4 text-xl font-medium">{title}</span>
      </div>
    </button>
  );
}
