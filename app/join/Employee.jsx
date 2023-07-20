import Image from "next/image";
import quotationmark from "@/public/assets/join/quotationmark.webp";

const employees = [
    {
        name: "Rohan Sharma",
        imageSrc:
            "https://avatars.githubusercontent.com/u/33249782?v=4",
        testimonial:
            "The vibrant and dynamic environment fosters creativity and innovation. Being part of a talented team that is passionate about improving access to knowledge and reading has been incredibly fulfilling.",
    },
    {
        name: "Deepak",
        imageSrc:
            "https://images.weserv.nl/?output=webp&url=https://avatars.githubusercontent.com/u/96341431?v=4",
        testimonial:
            "If you're motivated and persistent, your impact will definitely be felt by the company. There is nothing more rewarding than seeing your hard work turned into something fruitful that directly helps the company.",
    },
];

export default function Employee() {
    return (
        <section className="my-20 px-8 mx-auto max-w-5xl space-y-20">
            <div className="border p-4 py-12 shadow-md rounded-lg">
                <h2 className="text-4xl text-center text-blue-300">
                    STRAIGHT FROM <strong> THE SOURCE </strong>
                </h2>
                <p className="text-center text-2xl mt-4 text-mono">
                    Sure, we can tell you how great it is to work at Informatician,
                    <strong> but what do our Employees have to say? </strong>
                </p>
            </div>
            <div className="flex justify-center items-center">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 md:max-w-3xl">
                    {employees.map((employee, index) => (
                        <li
                            key={index}
                            className="border-2 rounded-2xl p-4 hover:scale-105 ease-in-out transition-transform flex flex-col items-center max-w-md"
                        >
                            <Image
                                loading="lazy"
                                width={200}
                                height={200}
                                src={employee.imageSrc}
                                className="w-32 rounded-full"
                                alt={employee.name}
                            />
                            <div>
                                <p className="ml-5 mt-10 mb-5 text-slate-500">
                                    <Image
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                        src={quotationmark}
                                        alt="quotation mark"
                                        className="w-5 mr-1 mb-2 inline"
                                    />
                                    {employee.testimonial}
                                    <br />
                                    <strong className="text-slate-600">{employee.name}</strong>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
