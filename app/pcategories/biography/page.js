import BkCards from "@/components/BkCards/BkCards";
import { Books } from "@/utils/Constants";
import Biography from "./Biography";

export const metadata = {
  title: "Biography",
};

export default function page() {
  return (
    <div className="mx-auto max-w-6xl mt-32 text-center p-4">
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105 mx-6">
        <h1 className="text-4xl font-bold">Biography &amp; Memoir</h1>
        <p className="text-xl font-bold mt-3">
          Discover captivating life stories and memoirs
        </p>
        <p className="mt-3 text-lg text-left max-h-96 overflow-hidden transition-max-height duration-500 ease">
          Discover captivating tales of individuals who have truly embraced life
          to its fullest. Immerse yourself in a diverse collection of books that
          delve into the lives of renowned icons, infamous figures, and
          fascinating personalities across art, sports, politics, and music.
          From the world's most celebrated names to lesser-known individuals
          with captivating stories and unique perspectives, Informatician offers
          an extensive selection that will captivate and enlighten you.
          Subscribe now to embark on a journey through the extraordinary lives
          that have shaped our world.
        </p>
      </div>
      <div className="my-9">
        <p className="text-xl font-bold">
          The most talked-about and well-loved Biography & Memoir titles this
          month.
        </p>

        <BkCards bkhead="Trending titles" books={Books} />
        <BkCards bkhead="Must-Read Biographies of Great Leaders" books={Books} />

        <Biography />
      </div>
    </div>
  );
}
