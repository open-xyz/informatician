import {positionsData} from "@/utils/Constants";

export default function JobSection() {
    return (
        <section className="px-8 py-14 space-y-20 max-w-5xl mx-auto">
            <div id="jobs-section" className="border p-4 py-12 shadow-md rounded-lg">
                <h2 className="text-customColor text-4xl text-center text-pink-900">
                    READY TO <strong> JOIN US? </strong>
                </h2>
                <p className="text-center text-xl mt-4 md:text-2xl">
                    See what
                    <strong> awesome positions </strong>
                    are Available and start your next chapter today.
                </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {positionsData.map((position, index) => (
                    <li
                        key={index}
                        className="border dark:border-2 border-gray-300 p-2 rounded-xl shadow-md shadow-slate-800/70 max-w-sm w-full h-full"
                    >
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-center mt-2 mb-2">
                                {position.title}
                            </h2>
                            <p className="text-center mb-2">{position.count} positions</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}