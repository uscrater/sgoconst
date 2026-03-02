export interface CityData {
    slug: string
    name: string
    county: string
    description: string
    highlights: string[]
    nearbyAreas: string[]
}

export const cityData: CityData[] = [
    {
        slug: "taunton",
        name: "Taunton",
        county: "Bristol County",
        description: "As Taunton's trusted siding contractor, SGO Construction has been serving homeowners in the Silver City for over 10 years. From historic homes downtown to newer developments in East Taunton, we understand the unique needs of Taunton properties.",
        highlights: [
            "Headquartered right here in Taunton — fast response times",
            "Experience with Taunton's mix of historic and modern homes",
            "Familiar with local building codes and permit requirements",
            "Trusted by hundreds of Taunton homeowners"
        ],
        nearbyAreas: ["Raynham", "Dighton", "Berkley", "Norton", "Easton"]
    },
    {
        slug: "easton",
        name: "Easton",
        county: "Bristol County",
        description: "Easton homeowners trust SGO Construction for professional siding, window, and door installation. Whether you're in North Easton near Stonehill College or in South Easton, we deliver expert craftsmanship that protects your home from New England weather.",
        highlights: [
            "Serving all Easton neighborhoods including North and South Easton",
            "Experience with colonial and Cape Cod style homes common in Easton",
            "Quick response — just minutes from our Taunton headquarters",
            "Licensed and insured for all exterior work in Bristol County"
        ],
        nearbyAreas: ["Mansfield", "Norton", "Brockton", "Bridgewater", "Taunton"]
    },
    {
        slug: "mansfield",
        name: "Mansfield",
        county: "Bristol County",
        description: "Mansfield residents count on SGO Construction for top-quality siding and exterior services. From homes near the Mansfield Crossing area to neighborhoods throughout town, we provide premium siding installation that boosts curb appeal and home value.",
        highlights: [
            "Extensive experience with Mansfield residential properties",
            "Premium materials including James Hardie fiber cement siding",
            "Energy-efficient window installations to reduce heating costs",
            "Free estimates with same-day response for Mansfield homeowners"
        ],
        nearbyAreas: ["Norton", "Foxboro", "Easton", "Sharon", "Attleboro"]
    },
    {
        slug: "norton",
        name: "Norton",
        county: "Bristol County",
        description: "Norton homeowners choose SGO Construction for reliable, professional siding and exterior work. We've completed dozens of projects throughout Norton, from Chartley to the town center, delivering lasting results that stand up to Massachusetts weather.",
        highlights: [
            "Proven track record with Norton residential projects",
            "Vinyl and fiber cement siding options for every budget",
            "Full-service: siding, windows, and doors in one project",
            "Familiar with Norton's residential building requirements"
        ],
        nearbyAreas: ["Mansfield", "Taunton", "Easton", "Attleboro", "Rehoboth"]
    },
    {
        slug: "raynham",
        name: "Raynham",
        county: "Bristol County",
        description: "SGO Construction is proud to serve Raynham with professional siding, window, and door installation. Located just minutes away in Taunton, we provide fast, reliable service to Raynham homeowners looking to upgrade their home's exterior.",
        highlights: [
            "Minutes from Raynham — fast response and service",
            "Experienced with ranch-style and colonial homes in Raynham",
            "Storm damage repair and full siding replacement",
            "Warranty-backed installations with premium materials"
        ],
        nearbyAreas: ["Taunton", "Bridgewater", "Easton", "Middleborough", "Dighton"]
    },
    {
        slug: "foxboro",
        name: "Foxboro",
        county: "Norfolk County",
        description: "Foxboro homeowners trust SGO Construction for expert siding and exterior services. Whether you're near Patriot Place or in a quiet residential neighborhood, we provide premium installation services that enhance and protect your home.",
        highlights: [
            "Serving Foxboro and Norfolk County homeowners",
            "Premium siding options including James Hardie",
            "Energy-efficient window replacements for older homes",
            "Licensed contractor with proper insurance coverage"
        ],
        nearbyAreas: ["Mansfield", "Wrentham", "Sharon", "Norton", "Franklin"]
    },
]

export function getCityData(slug: string): CityData | undefined {
    return cityData.find(city => city.slug === slug)
}
