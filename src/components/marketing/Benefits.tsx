import BenefitCard from "./BenefitCard";
import type { BenefitsContent } from "src/types/campaign";

export default function Benefits({
    heading,
    title,
    benefits
}: {
    heading: string;
    title: string;
    benefits: BenefitsContent['items'];
}) {
        return (
        <section className="bg-white px-6 py-20 text-[#016874] md:px-16 md:py-24">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#668b61]">{heading}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    {title}
                </h2>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {benefits.map((benefit) => (
                        <BenefitCard  key={benefit.number} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
}