import Hero from "components/marketing/Hero";
import Benefits from "components/marketing/Benefits";
import CallToAction from "components/marketing/CallToAction";
import { campaign } from "../data/campaign";

export default function CampaignDemoPage() {
    return (
        <main className="min-h-screen bg-white">
            <header className="bg-white px-6 py-5 text-[#016874] md:px-16">
                <div className="mx-auto flex max-w-6xl items-center justify-between">
                    <a href="/demo" className="text-xl font-bold tracking-tight">
                        {campaign.brand}<span className="text-[#668b61]">.</span>
                    </a>
                    <a 
                        href="#get-started"
                        className="rounded-full border border-[#d5dfd2] px-5 py-2.5 text-sm font-semibold hover:bg-[#f4f6f1] focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        {campaign.navigationCta}
                    </a>
                </div>
            </header>

            <Hero {...campaign.hero} />
            <Benefits
                heading={campaign.benefits.heading}
                title={campaign.benefits.title}
                benefits={campaign.benefits.items} 
            />
            <CallToAction {...campaign.callToAction} />

            <footer className="bg-[#0e363d] px-6 py-8 text-center text-sm text-white/70">
                {campaign.footer}
            </footer>
        </main>
    );
}