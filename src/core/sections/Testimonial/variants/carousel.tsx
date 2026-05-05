/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function TestimonialCarousel({
    items,
    title,
    __background,
}: any) {
    const [index, setIndex] = useState(0);
    const total = items?.length || 0;

    if (!total) return null;

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    return (
        <section
            id="testimonial"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            {title && (
                <h2 className="text-3xl font-bold text-center mb-12">
                    {title}
                </h2>
            )}
            <div className="max-w-3xl mx-auto px-6 relative">
                <div className="p-6 bg-white shadow rounded-lg text-center">
                    <p className="mb-4 text-gray-700">"{items[index].quote}"</p>
                    <div className="font-semibold">{items[index].name}</div>
                    <div className="text-sm text-gray-500">
                        {items[index].company}
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={prev}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        Prev
                    </button>
                    <button
                        onClick={next}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
