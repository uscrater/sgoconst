import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Home Remodeling Financing Taunton MA | SGO Construction",
    description: "Explore flexible financing options for your home remodeling, roof replacement, or siding project in Taunton, MA. Get affordable monthly payments with SGO Construction.",
    keywords: ["Home remodeling financing Taunton MA", "General contractor payment plans", "Roof replacement financing", "Siding contractor financing near me"],
}

export default function FinancingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
