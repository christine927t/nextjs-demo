export type HeroContent = {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    image?: ImageContent;
    link?: LinkContent;
};

export type BenefitContent = {
    number: string;
    title: string;
    description: string;
};

export type BenefitsContent = {
    heading: string;
    title: string;
    items: BenefitContent[];
}

export type CallToActionContent = {
    title: string;
    description: string;
    link?: LinkContent;
}

export type CampaignContent = {
    brand: string;
    navigationCta: string;
    hero: HeroContent;
    benefits: BenefitsContent;
    callToAction: CallToActionContent;
    footer: string;
};

export type ImageContent = {
    src: string;
    alt: string;
}

export type LinkContent = {
    text: string;
    href: string;
}