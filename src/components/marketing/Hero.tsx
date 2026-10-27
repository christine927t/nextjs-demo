import type { HeroContent } from "src/types/campaign";

export default function Hero({
    eyebrow,
    title,
    description,
    buttonText,
    buttonHref,
    image,
    link
}: HeroContent) {
    return (
          <section className="relative overflow-hidden bg-[#0e363d] px-6 py-24 text-white md:px-16 md:py-32">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#d7e7a5]/15 blur-3xl" />
            <div 
                className={`relative mx-auto grid max-w-6xl items-center gap-12 ${
                    image ? 'md:grid-cols-2' : ''
                }`}
            >
                <div>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7e7a5]">
                        {eyebrow}
                    </p>
                    <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">{description}</p>
                    {link && (
                        <a 
                            href={link.href} 
                            className="mt-8 inline-flex rounded-full bg-[#d7e7a5] px-7 py-4 font-semibold text-[#0e363d] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {link.text} <span className="ml-3" aria-hidden="true">→</span>
                        </a>
                    )}
                </div>
                {image && (
                    <div className="flex min-h-72 items-center justify-center md:min-h-96">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full max-h-96 w-full rounded-[2rem] object-cover"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}