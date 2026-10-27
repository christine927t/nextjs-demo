import type { CallToActionContent } from "src/types/campaign";

export default function CallToAction({
    title,
    description,
    link
}: CallToActionContent) {
    return (
        <section 
            id="get-started"
            className="bg-[#eaf0e2] px-6 py-20 text-center text-[#016874] md:py-24"    
        >
            <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {title}
                </h2>
                <p className="mt-5 leading-7 text-[#5b6c65]">
                    {description}     
                </p>
                {link && (
                    <a 
                        href={link.href}
                        className="mt-8 inline-flex rounded-full bg-[#0e363d] px-7 py-4 font-semibold text-white hover:bg-[#24564d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0e363d]"
                    >
                        {link.text} <span className="ml-3" aria-hidden="true">→</span>
                    </a>
                )}
            </div>
        </section>
    );
}