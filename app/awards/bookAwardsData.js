import pulitzer from "@/public/assets/awards/pulitzer.webp";
import manbooker from "@/public/assets/awards/manbooker.webp";
import national from "@/public/assets/awards/national.webp";
import penFaulkner from "@/public/assets/awards/pen-faulkner.webp";
import womenprize from "@/public/assets/awards/womenprize.webp";

const bookAwardsData = [
  {
    id: 1,
    name: "Pulitzer Prize",
    image: pulitzer,
    description:
      "The Pulitzer Prize is one of the most renowned literary awards, honoring excellence in various categories, including Fiction, Non-Fiction, and Poetry. This prestigious award recognizes exceptional works that display profound storytelling, masterful writing, and thought-provoking themes.",
    winners: [
      {
        category: "Fiction",
        book: "The Overstory",
        author: "Richard Powers",
      },
      {
        category: "Non-Fiction",
        book: "Evicted: Poverty and Profit in the American City",
        author: "Matthew Desmond",
      },
      {
        category: "Poetry",
        book: "The Tradition",
        author: "Jericho Brown",
      },
    ],
  },
  {
    id: 2,
    name: "Man Booker Prize",
    image: manbooker,
    description:
      "The Man Booker Prize is a highly regarded literary award presented annually for the best original novel written in English. It celebrates works that showcase exceptional writing, innovation, and exploration of new literary territories.",
    winners: [
      {
        category: null,
        book: "The Testaments",
        author: "Margaret Atwood",
      },
      { category: null, book: "Milkman", author: "Anna Burns" },
      {
        category: null,
        book: "Lincoln in the Bardo",
        author: "George Saunders",
      },
    ],
  },
  {
    id: 3,
    name: "National Book Award",
    image: national,
    description:
      "The National Book Award is an esteemed literary award that recognizes outstanding works in Fiction, Non-Fiction, Poetry, and Young People's Literature. It celebrates authors who push boundaries, offer fresh perspectives, and contribute to the richness of the literary landscape.",
    winners: [
      { category: "Fiction", book: "The Friend", author: "Sigrid Nunez" },
      {
        category: "Non-Fiction",
        book: "The New Negro: The Life of Alain Locke",
        author: "Jeffrey C. Stewart",
      },
      {
        category: "Poetry",
        book: "Indecency",
        author: "Justin Phillip Reed",
      },
    ],
  },
  {
    id: 4,
    name: "PEN/Faulkner Award for Fiction",
    image: penFaulkner,
    description:
      "The PEN/Faulkner Award for Fiction is a prestigious literary prize that honors the best works of fiction by American authors. It recognizes novels that exhibit excellence in storytelling, character development, and language.",
    winners: [
      {
        category: null,
        book: "Behold the Dreamers",
        author: "Imbolo Mbue",
      },
      {
        category: null,
        book: "The Buddha in the Attic",
        author: "Julie Otsuka",
      },
      {
        category: null,
        book: "The Great Man",
        author: "Kate Christensen",
      },
    ],
  },
  {
    id: 5,
    name: "Women's Prize for Fiction",
    image: womenprize,
    description:
      "The Women's Prize for Fiction, formerly known as the Orange Prize, celebrates exceptional novels written by women from all over the world. It aims to recognize and promote outstanding literary works that highlight women's voices and perspectives.",
    winners: [
      {
        category: null,
        book: "An American Marriage",
        author: "Tayari Jones",
      },
      { category: null, book: "Home Fire", author: "Kamila Shamsie" },
      {
        category: null,
        book: "The Glorious Heresies",
        author: "Lisa McInerney",
      },
    ],
  },
];

export default bookAwardsData;
