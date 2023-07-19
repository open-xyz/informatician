'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Slider() {
    const quotes = [
        {
            author: "Stephen King",
            quote: "If you don't have time to read, you don't have the time to write. Simple as that.",
            imageSrc: "https://lit216.pbworks.com/f/1363869393/stephen%20king.jpg",
        },
        {
            author: "Jack Kerouac",
            quote: "One day I will find the right words, and they will be simple.",
            imageSrc: "http://laurencecoupe.co.uk/wp-content/uploads/2018/01/kerouac-picture.jpg",
        },
        {
            author: "Saul Bellow",
            quote: "You never have to change anything you got up in the middle of the night to write.",
            imageSrc:
                "https://media.newyorker.com/photos/59096d586552fa0be682ff3d/master/w_1920,c_limit/Brody-Saul-Bellow-Film-Critic.jpg",
        },
        {
            author: "Aldous Huxley",
            quote: "Words can be like X-rays if you use them properly they'll go through anything. You read and you're pierced.",
            imageSrc:
                "https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2Fgettyimages-2665140-a1c77ccabe8660fb5123c8b6c5741316.jpg",
        },
        {
            author: "Anne Frank",
            quote: "I can shake off everything as I write; my sorrows disappear, my courage is reborn.",
            imageSrc: "https://media.npr.org/assets/img/2015/03/13/ap070308060493-67009388c842c192821be288e72bbc06977b72ce-s400-c85.webp",
        },
        {
            author: "Sylvia Plath",
            quote: "Let me live, love, and say it well in good sentences.",
            imageSrc: "https://ychef.files.bbci.co.uk/1600x900/p09pxt8c.webp",
        },
        {
            author: "John Steinbeck",
            quote: "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.",
            imageSrc: "https://www.theparisreview.org/il/c625e7c0b9/large/JohnSteinbeck-thumb.jpg",
        },
        {
            author: "Madeleine L'Engle",
            quote:
                "You have to write the book that wants to be written & if the book will be too difficult for grown-ups, then you write it for children.",
            imageSrc: "https://upload.wikimedia.org/wikipedia/en/c/c9/Madeleine_lengle.jpg",
        },
    ];

    return (
            <Swiper
                slidesPerView={1}
                spaceBetween={25}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                className="space-y-12 w-full"
            >
            {quotes.map((quote, index) => (
                <SwiperSlide key={index} className="bg-blue-100/70 dark:bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-md duration-150 dark:text-black">
                    <div className="flex flex-col items-center h-72 sm:h-60">
                        <Image
                            loading="lazy"
                            width={100}
                            height={100}
                            className="rounded-full w-24 h-24 object-cover"
                            src={quote.imageSrc}
                            alt={quote.author}
                        />
                        <h4 className="mt-4 text-xl font-medium text-green-700">- {quote.author}</h4>
                        <p className="mt-2">"{quote.quote}"</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
