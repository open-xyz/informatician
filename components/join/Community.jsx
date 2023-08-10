import { communityData } from "@/utils/Constants";
import Image from "next/image";

export default function Community() {
  return (
    <section className="bg-pink-900 text-white py-10 px-8">
      <div className="container flex-col pb-6 mx-auto">
        <h2 className="text-4xl text-center">
          <strong>We're a community</strong>
        </h2>
        <p className="text-center text-2xl mt-4 text-mono">
          Every day should be exciting, and we work hard to make it happen.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {communityData.map((item) => (
          <li key={item.title} className="rounded-3xl max-w-xs mx-auto">
            <Image
              loading="lazy"
              width={700}
              height={300}
              src={item.imageSrc}
              className="mx-auto rounded-3xl max-w-xs w-full"
              alt={item.imageAlt}
            />
            <div>
              <h2 className="font-bold text-center mt-6 mb-3 text-lg uppercase">
                {item.title}
              </h2>
              <p className="mb-5 text-justify">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
