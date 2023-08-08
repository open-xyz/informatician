import bookFormatsData from "./bookFormatsData";
import SBook from "./SBook";

export const metadata = {
  title: "Book Formats",
};

const BookbookFormats = () => {
  return (
    <section className="mt-24 px-4 md:px-0 py-6">
      <h1 className="text-6xl font-bold text-center">Book Formats</h1>
      {bookFormatsData.map((bookFormat) => (
        <SBook key={bookFormat.title} bookFormat={bookFormat} />
      ))}
    </section>
  );
};

export default BookbookFormats;
