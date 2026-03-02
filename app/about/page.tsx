import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About SGO Construction | Home Remodeling Contractor Taunton MA",
    description: "SGO Construction is a top-rated general contractor in Taunton, MA. Over 10 years of experience in kitchen remodeling, basement finishing, and home additions.",
    keywords: ["Home Remodeling Contractor Taunton MA", "General Contractor near me", "Basement Finishing Taunton", "Kitchen Remodeling Taunton", "SGO Construction"],
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
