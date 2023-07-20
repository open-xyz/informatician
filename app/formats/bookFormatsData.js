import ebook from "@/public/assets/Formats/ebook.webp";
import audiobook from "@/public/assets/Formats/audiobook.webp";
import paperback from "@/public/assets/Formats/paperback.webp";
import comics from "@/public/assets/Formats/comics.webp";
import magazines from "@/public/assets/Formats/magazines.webp";

const bookFormatsData = [
  {
    title: "Ebooks",
    image: ebook,
    description:
      "E-books are digital versions of printed books that can be read on electronic devices such as e-readers, tablets, or smartphones. They offer a convenient way for readers to access a wide range of literature without the need for physical books.",
    topBooks: [
      {
        title: "Never Lie: An addictive psychological thriller",
        author: "Freida McFadden",
      },
      {
        title: "Maybe Someday",
        author: "Colleen Hoover",
      },
      {
        title: "The Housemaid",
        author: "Freida McFadden",
      },
    ],
  },
  {
    title: "Audiobooks",
    image: audiobook,
    description:
      "Audiobooks provide an immersive storytelling experience by allowing readers to listen to narrators who bring the characters and narratives to life through spoken word. They are particularly beneficial for readers who prefer to listen to stories rather than read them.",
    topBooks: [
      {title: "Audible"},
      {title: "Scribd"},
      {title: "Blinkist"},
    ],
  },
  {
    title: "Paperback Books",
    image: paperback,
    description:
      "Paperback books are the most common and affordable format. They are lightweight and portable, making them easy to carry and hold. Paperback books offer a tactile experience, allowing readers to flip through pages and physically interact with the text.",
    topBooks: [
      {
        title: "Atomic Habits",
        author: "James Clear",
      },
      {
        title: "The Psychology of Money",
        author: "Morgan Housel",
      },
      {
        title: "Ikigai",
        author: "Francesc Miralles",
      },
    ],
  },
  {
    title: "Digital Magazines",
    image: magazines,
    description:
      "Digital magazines provide a visual and interactive reading experience. They cover a wide range of topics and interests, from lifestyle and fashion to technology and science. Digital magazines often include multimedia elements, enhancing the reading experience.",
    topBooks: [
      {title: "National Geographic"},
      {title: "People"},
      {title: "Forbes"},
    ],
  },
  {
    title: "Comics and Graphic Novels",
    image: comics,
    description:
      "Comics and graphic novels combine illustrations and text to tell stories in a visually engaging format. They cover various genres, including superheroes, fantasy, science fiction, memoirs, and more. Comics and graphic novels offer a unique reading experience.",
    topBooks: [
      {title: "Detective Conan"},
      {title: "Naruto"},
      {title: "Dragon Ball"},
    ],
  },
];

export default bookFormatsData;
