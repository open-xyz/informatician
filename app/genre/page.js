import genreDetailsData from "./genreDetailsData";
import SGenre from "./SGenre";

export const metadata = {
  title: "Genre",
};

const GenrePage = () => {
  return (
    <div className="mt-24 px-4 md:px-0 py-6">
      <h1 className="text-6xl font-bold text-center">Book Genres</h1>
      {genreDetailsData.map((genre) => (
        <SGenre key={genre.title} genre={genre} />
      ))}
    </div>
  );
};

export default GenrePage;
