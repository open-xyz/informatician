import Search from "./Search";
import Slider from "./Slider";

export default function BookList(props) {
  return (
    <div className="p-6 sm:p-12 grid place-items-center gap-4 mt-16">
      <div className="text-center space-y-6 sm:mb-16">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-sky-700">Find your next learning adventure</h1>
      <p className="text-base sm:text-xl text-gray-600 mb-8">From Art to Universe, we have lots of textbooks to offer you.</p>
      </div>

      <Search />

      <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 sm:mb-10 text-sky-700">Quotes</h3>
      <Slider />
    </div>
  );
}
