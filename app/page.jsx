/** @format */

import BkCards from "@/components/BkCards/BkCards";
import CgCards from "@/components/Home/CgCards/CgCards";
import TNYCards from "@/components/TNYCards/BkCards";
import ImgSection from "@/components/Home/ImgSection/ImgSection";
import { Books } from "@/utils/Constants";
import NewsLetter from "@/components/Footer/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <>
      <section className="min-h-screen items-center justify-between py-12">
        <ImgSection txt={["Start Reading", "Be a Reader"]} />
        <div className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
          <CgCards />
          <BkCards bkhead="Bestselling Books & Audiobooks" books={Books} />
          <TNYCards bkhead="Current New York Times Bestsellers" />
        </div>
        <NewsLetter />
      </section>
    </>
  );
}
