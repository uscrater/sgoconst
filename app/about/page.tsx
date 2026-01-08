import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | SGO Construction",
    description: "Learn about SGO Construction, our history, values, and commitment to excellence in home remodeling and construction services.",
};

export default function AboutPage() {
    return <AboutClient />;
}
