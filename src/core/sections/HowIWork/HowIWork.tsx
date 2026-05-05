import { Reveal } from "../../engine/animationEngine";

type Step = {
    title: string;
    description: string;
};

type Props = {
    title: string;
    subtitle?: string;
    steps: Step[];
    __background?: string;
};

export default function HowIWork({
    title,
    subtitle,
    steps,
    __background,
}: Props) {
    return (
        <section
            id="howiwork"
            className={`relative py-32 overflow-hidden ${
                __background || "bg-gray-50"
            }`}
        >
            <div
                className="max-w-5xl mx-auto px-6"
                style={{ maxWidth: "var(--container-width)" }}
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <Reveal>
                        <h2
                            className="text-4xl md:text-5xl font-extrabold"
                            style={{
                                fontFamily: "var(--font-heading)",
                                color: "var(--color-primary)",
                            }}
                        >
                            {title}
                        </h2>
                    </Reveal>

                    {subtitle && (
                        <Reveal delay={0.2}>
                            <p className="mt-4 text-xl text-gray-600">
                                {subtitle}
                            </p>
                        </Reveal>
                    )}
                </div>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="flex items-start gap-6">
                                {/* Number */}
                                <div
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg"
                                    style={{
                                        background: "var(--color-primary)",
                                        color: "#fff",
                                        padding: "10px",
                                    }}
                                >
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mt-1">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
