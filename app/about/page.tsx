import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About SGO Construction | Licensed General Contractor in Easton & Mansfield, MA",
    description: "SGO Construction has over 10 years of experience in home remodeling across Easton, Mansfield, Norton, and Taunton, MA. Fully licensed, insured, and committed to quality craftsmanship.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
