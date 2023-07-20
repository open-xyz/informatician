import Image from "next/image";

export default function Benefits() {
    return (
        <section className="text-center mt-10 px-8">
            <h2 className="mb-11 text-4xl font-bold">BENEFITS</h2>
            {/* Benefits Section */}
            <div className="grid justify-center mx-auto place-items-center gap-20 max-w-5xl grid-cols-1 md:grid-cols-2">
                {benefitsData.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="border-2 h-full rounded-xl py-6 px-4 hover:scale-105 ease-in-out transition-transform hover:shadow-2xl shadow-slate-800 max-md:max-w-md"
                    >
                        <Image
                            loading="lazy"
                            width={100}
                            height={100}
                            src={benefit.imageSrc}
                            className="mx-auto w-24 hover:animate-spin"
                            alt={benefit.imageAlt}
                        />
                        <div>
                            <h2 className="text-2xl font-bold mt-6 mb-3">{benefit.title}</h2>
                            <p>{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const benefitsData = [
    {
        title: "Medical, dental and vision",
        description:
            "We offer competitive medical, dental, vision insurance for employees and dependents. This includes medical, dental, and vision premiums.",
        imageSrc: "https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_03_health.svg?a974a5f44",
        imageAlt: "Icon representing health benefits",
    },
    {
        title: "Diversity, Equity, and Inclusion",
        description:
            "We follow DEI policy that promotes fair representation, equal opportunities, and respectful treatment of individuals from different backgrounds, ensuring a diverse workforce or community, fostering an inclusive environment, and striving for equitable outcomes for all.",
        imageSrc: "https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31",
        imageAlt: "Benefits icon showcasing diversity, equity, and inclusion",
    },
    {
        title: "Wellbeing",
        description:
            "Resources, workshops & events to support your wellbeing journey: Mind, Body & Soul.",
        imageSrc: "https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_07_wellbeing.svg?a974a5f44",
        imageAlt: "Illustration of a flower representing wellbeing",
    },
    {
        title: "Monthly stipend",
        description:
            "We offer everyone a monthly stipend to use toward services that fit their personal needs. This gives you the opportunity to choose your own adventure and use the funds for whatever matters most to you.",
        imageSrc: "https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31",
        imageAlt: "Benefits icon showcasing diversity, equity, and inclusion",
    },
    {
        title: "Parental leave",
        description:
            "We offer biological, adoptive, and foster parents paid time off to spend quality time with family.",
        imageSrc: "https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_06_parental.svg?a974a5f44",
        imageAlt: "Parental leave icon",
    },
    {
        title: "Time off",
        description:
            "We want you to take time off to rest and rejuvenate. Notion offers flexible paid vacation as well as 10+ observed holidays by country.",
        imageSrc: "https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_05_pto.svg?a974a5f44",
        imageAlt: "Benefits icon depicting paid time off",
    },
];
