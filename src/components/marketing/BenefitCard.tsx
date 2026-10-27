type BenefitCardProps = {
    number: string;
    title: string;
    description: string;
}

export default function BenefitCard({
    number,
    title,
    description,
}: BenefitCardProps) {
     return (
        <article className="rounded-2xl border border-[#e2e8df] p-7 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold text-[#668b61]">{number}</p>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-4 leading-7 text-[#5b6c65]">{description}</p>
        </article>
);
}