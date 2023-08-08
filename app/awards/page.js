import bookAwardsData from "./bookAwardsData";
import BookAward from "./BookAward";

export const metadata = {
  title: "Awards",
};

const BookAwards = () => {
  return (
    <section className="book-formats-container mt-24 px-4 md:px-0 py-6">
      <h1 className="text-6xl font-bold text-center">Book Awards</h1>
      {bookAwardsData.map((award) => (
        <BookAward key={award.id} award={award} />
      ))}
    </section>
  );
};

export default BookAwards;
