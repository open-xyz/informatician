import biography from "@/public/assets/Genre/biography.webp";
import romance from "@/public/assets/Genre/romance.webp";
import thriller from "@/public/assets/Genre/thriller.webp";
import horror from "@/public/assets/Genre/horror.webp";
import science from "@/public/assets/Genre/science.webp";
import mystery from "@/public/assets/Genre/mystery.webp";
import fantasy from "@/public/assets/Genre/fantasy.jpeg";
import historical from "@/public/assets/Genre/historical.jpeg";
import adventure from "@/public/assets/Genre/adventure.jpeg";

const genreDetailsData = [
  {
    title: "Mystery",
    slug: "mystery",
    image: mystery,
    description:
      "The Mystery genre keeps readers on the edge of their seats with its suspenseful narratives and captivating plot twists. It revolves around solving perplexing crimes, untangling intricate puzzles, and uncovering hidden secrets.",
    topBooks: [
      { title: "Gone Girl", author: "Gillian Flynn" },
      { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
      { title: "The Da Vinci Code", author: "Dan Brown" },
    ],
  },
  {
    title: "Romance",
    slug: "romance",
    image: romance,
    description:
      "Romance novels are known for their exploration of love, passion, and emotional connections between characters. They depict heartwarming and often tumultuous relationships that captivate readers and evoke a range of emotions.",
    topBooks: [
      { title: "Pride and Prejudice", author: "Jane Austen" },
      { title: "Outlander", author: "Diana Gabaldon" },
      { title: "The Notebook", author: "Nicholas Sparks" },
    ],
  },
  {
    title: "Science Fiction",
    slug: "science",
    image: science,
    description:
      "Science Fiction is a genre that takes readers beyond the realm of reality, offering imaginative and futuristic narratives. It explores speculative ideas, advanced technology, and the impact of scientific advancements on society and individuals.",
    topBooks: [
      { title: "Dune", author: "Frank Herbert" },
      { title: "1984", author: "George Orwell" },
      { title: "Ender's Game", author: "Orson Scott Card" },
    ],
  },
  {
    title: "Thriller",
    slug: "thriller",
    image: thriller,
    description:
      "The Thriller genre is synonymous with gripping suspense, adrenaline-pumping action, and unexpected plot twists. These books keep readers on the edge of their seats, holding their breath as they follow characters caught in dangerous and high-stakes situations.",
    topBooks: [
      { title: "The Girl on the Train", author: "Paula Hawkins" },
      { title: "The Da Vinci Code", author: "Dan Brown" },
      { title: "The Silence of the Lambs", author: "Thomas Harris" },
    ],
  },
  {
    title: "Horror",
    slug: "horror",
    image: horror,
    description:
      "Horror books aim to evoke fear and create a sense of dread in readers. They delve into the darkest corners of the human psyche, exploring supernatural entities, psychological terrors, and the macabre.",
    topBooks: [
      { title: "Dracula", author: "Bram Stoker" },
      { title: "The Shining", author: "Stephen King" },
      { title: "The Exorcist", author: "William Peter Blatty" },
    ],
  },
  {
    title: "Biography",
    slug: "biography",
    image: biography,
    description:
      "Biography is a genre that offers a glimpse into the lives of real people, providing a captivating exploration of their experiences, achievements, and challenges.",
    topBooks: [
      { title: "The Diary of a Young Girl", author: "Anne Frank" },
      {
        title: "The Autobiography of Malcolm X",
        author: "Malcolm X and Alex Haley",
      },
      { title: "Steve Jobs", author: "Walter Isaacson" },
    ],
  },
  {
    title: "Fantasy",
    slug: "fantasy",
    image: fantasy,
    description:
      "Fantasy is a genre that invites readers into enchanting worlds filled with magic, mythical creatures, and epic quests. It sparks imagination and explores realms beyond reality.",
    topBooks: [
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
      { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
      { title: "A Song of Ice and Fire (Game of Thrones)", author: "George R.R. Martin" },
    ],
  },
  {
    title: "Historical Fiction",
    slug: "historical",
    image: historical,
    description:
      "Historical Fiction transports readers to different eras in history, offering a blend of real events and imaginative storytelling. It provides insights into past cultures, societies, and events.",
    topBooks: [
      { title: "The Book Thief", author: "Markus Zusak" },
      { title: "All the Light We Cannot See", author: "Anthony Doerr" },
      { title: "The Nightingale", author: "Kristin Hannah" },
    ],
  },
  {
    title: "Adventure",
    slug: "adventure",
    image: adventure,
    description:
      "Adventure novels take readers on thrilling journeys, often filled with daring escapades, exploration, and challenges. These stories ignite a sense of excitement and curiosity.",
    topBooks: [
      { title: "The Hobbit", author: "J.R.R. Tolkien" },
      { title: "Treasure Island", author: "Robert Louis Stevenson" },
      { title: "The Call of the Wild", author: "Jack London" },
    ],
  },
];

export default genreDetailsData;
