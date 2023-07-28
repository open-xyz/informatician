import BkCards from "@/components/BkCards/BkCards";
import CgCards from "@/components/Home/CgCards/CgCards";
import ImgSection from "@/components/Home/ImgSection/ImgSection";
import {Books} from "@/utils/Constants";

export default function Home() {
  return (
    <section className="min-h-screen items-center justify-between py-12">
      <ImgSection
        txt={["Start Reading", "Be a Reader"]} />
      <div className="sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
        <CgCards />
        <BkCards
          bkhead="Bestselling Books & Audiobooks" books={Books} />
        <BkCards
          bkhead="Current New York Times Bestsellers" books={Books} />
      </div>
    </section>
  )
}