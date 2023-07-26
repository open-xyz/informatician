import Image from "next/image";

export default function Logo() {
    return (
      <>
        <Image
          loading="lazy"
          src={"/assets/logos/dark_logo.png"}
          width={300}
          height={100}
          className="hidden dark:block h-12 w-fit ml-1 mb-3  hover:shadow "
          alt="Informatician logo"
        />
        <Image
          loading="lazy"
          src={"/assets/logos/light_logo.png"}
          width={300}
          height={100}
          className="dark:hidden h-12 w-fit ml-1 mb-3  hover:shadow "
          alt="Informatician logo"
        />
      </>
    );
}