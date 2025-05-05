import Image from "next/image";
import teste from 'teste';

export const Header = () => {
  return (
    <header className="w-full relative">
      <div className="h-[280px] w-full overflow-hidden">
        <Image
          src="/assets/cover.jpg"
          alt="Capa"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="absolute top-32 sm:top-36 md:top-40 left-1/2 -translate-x-1/2">
        <div className="w-[232px] h-[232px] rounded-full overflow-hidden">
          <Image
            src="/assets/profile.jpg"
            alt="Avatar"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      <div className="pt-20 sm:pt-24 md:pt-28 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Emilly Melhor
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-400">
          CONHEÇA O MELHOR DE MIM! 😉
        </p>
      </div>
    </header>
  );
};
