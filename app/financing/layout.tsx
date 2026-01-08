import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Financing Options | SGO Construction",
    description: "Explore flexible financing options for your home improvement project. Make your dream home a reality with our trusted financing partners.",
}

export default function FinancingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
