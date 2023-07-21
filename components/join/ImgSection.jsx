import Image from 'next/image'
import workinginoffice from "@/public/assets/join/workinginoffice.webp";
import workplace from "@/public/assets/join/workplace.jpeg";

export default function ImgSection() {
  return (
      <section className="mt-20 px-8">
          <div className="flex justify-center items-center">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <li className="mx-auto shadow-lg shadow-slate-800/70 rounded-2xl">
                      <Image
                          loading="lazy"
                          width={500}
                          height={100}
                          src={workplace}
                          className="md:h-80 sm:h-50 rounded-2xl"
                          alt="a group of people around a table"
                      />
                  </li>
                  <li className="mx-auto shadow-lg shadow-slate-800/70 rounded-2xl">
                      <Image
                          loading="lazy"
                          width={500}
                          height={100}
                          src={workinginoffice}
                          className="md:h-80 sm:h-50 rounded-2xl"
                          alt="a group of people sitting at a table with computers"
                      />
                  </li>
              </ul>
          </div>
      </section>
  )
}
