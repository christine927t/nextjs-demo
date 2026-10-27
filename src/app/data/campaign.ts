import type { CampaignContent } from "src/types/campaign";

export const campaign: CampaignContent = {
    brand: 'suncoast',
    navigationCta: 'Become a member',
    hero: {
        eyebrow: 'A better kind of banking',
        title: 'Your goals deserve a better banking partner.',
        description:
        'Banking should help you move forward. Discover a more personal approach to saving, spending, and planning for what comes next.',
        image: {
            src: '/images/campaign-hero.avif',
            alt: 'A welcoming scene representing a brighter financial future',
        },
        link: {
            text: 'Explore membership',
            href: '#get-started',
        }
    },
    benefits: {
        heading: 'Banking, reimagined',
        title: 'More than an account. A partner in what comes next.',
        items: [
            {
                number: "01",
                title: "Banking that fits your life",
                description:
                "Manage your money on your schedule with convenient digital banking and tools that keep you in control.",
            },
            {
                number: "02",
                title: "More room to grow",
                description:
                "Explore flexible savings options designed to help you prepare for the plans and milestones ahead.",
            },
            {
                number: "03",
                title: "Real people, real support",
                description:
                "Get helpful guidance from a team that understands your goals and puts your financial well-being first.",
            },
        ]
    },
    callToAction: {
        title: 'Ready for a fresh start?',
        description: 'Your next financial chapter starts with a conversation.',
        link: {
            text: 'Get started',
            href: 'mailto:hello@example.com',
        }
    },
    footer: 'Suncoast Credit Union - A concept campaign demo'
}
