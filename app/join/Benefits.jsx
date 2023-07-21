import Image from "next/image";
import benefitsData from '@/utils/join/benefitsData'

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