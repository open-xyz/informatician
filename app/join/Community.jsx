import Image from 'next/image';

export default function Community() {
    return (
        <section className="bg-pink-900 text-white py-10 px-8">
            <div className="container flex-col pb-6 mx-auto">
                <h2 className="text-4xl text-center">
                    <strong>We're a community</strong>
                </h2>
                <p className="text-center text-2xl mt-4 text-mono">
                    Every day should be exciting, and we work hard to make it happen.
                </p>
            </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {communityData.map((item) => (
                        <li key={item.title} className="rounded-3xl max-w-xs mx-auto">
                            <Image
                                loading="lazy"
                                width={700}
                                height={300}
                                src={item.imageSrc}
                                className="mx-auto rounded-3xl max-w-xs w-full"
                                alt={item.imageAlt}
                            />
                            <div>
                                <h2 className="font-bold text-center mt-6 mb-3 text-lg uppercase">
                                    {item.title}
                                </h2>
                                <p className="mb-5 text-justify">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
        </section>
    );
}

const communityData = [
    {
        title: 'Community',
        description:
            'Community and culture are paramount at Informatician. We curate meaningful moments to bring employees together for connection, collaboration, and celebration. Whether it\'s spending the day giving back philanthropically, channeling your inner entrepreneur at our annual Hackweek, showing off your hidden skills at the Informatician talent show, or joining one of Informatician\'s Employee Resource Groups, there is something for everyone.',
        imageSrc: 'https://s-f.scribdassets.com/images/about/03_careers_E_img_01_@2x.jpg?a974a5f44',
        imageAlt: 'A group of people excited',
    },
    {
        title: 'Characters with character',
        description:
            'We believe diverse stories and backgrounds are what make Informatician great. From candidates all the way to extending offers, our hiring practices prioritize diversity, equity, and inclusion. We have company-wide goals to hire more folks from underrepresented groups or that have unique experiences!',
        imageSrc: 'https://s-f.scribdassets.com/images/about/03_careers_E_img_02_@2x.jpg?a974a5f44',
        imageAlt: 'Three people staring at you',
    },
    {
        title: 'Growth Mentality',
        description:
            'We believe that ongoing training and development bring out the best in our employees and our company as a whole. We\'re constantly researching and implementing opportunities to help our people grow and thrive along their career journey.',
        imageSrc: 'https://s-f.scribdassets.com/images/about/03_careers_E_img_03_@2x.jpg?a974a5f44',
        imageAlt: 'A girl sitting and reading a book',
    },
];
