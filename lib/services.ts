import { LucideIcon, ChefHat, Bath, Fence, BrickWall, Sofa, Scissors, Droplets, DoorOpen, Layers } from "lucide-react";

export interface Service {
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    image: string;
    content: string;
    icon: LucideIcon;
}

export const services: Service[] = [
    {
        title: "Kitchen Remodeling",
        slug: "kitchen-remodeling",
        description: "Transform your outdated kitchen into a modern, functional, and stylish space tailored to your lifestyle.",
        shortDescription: "Transform your outdated kitchen into a modern, functional, and stylish space.",
        image: "/kitchen.png",
        icon: ChefHat,
        content: `
            <p class="lead">Your kitchen is more than just a place to cook—it's the heart of your home. At SGO Construction, we specialize in transforming outdated kitchens into modern, functional, and stylish spaces tailored to your lifestyle. Whether you're looking for sleek cabinetry, upgraded countertops, or a complete layout overhaul, our team brings precision and creativity to every project. With a focus on quality craftsmanship and attention to detail, we'll help you create a kitchen that's as beautiful as it is practical.</p>
            
            <div class="mt-12">
                <h2 class="text-3xl font-bold mb-6">Benefits And Solutions</h2>
                <p class="text-gray-600 mb-8">Discover how our expert kitchen renovation services can enhance functionality, increase home value, and solve common design challenges with modern solutions, quality craftsmanship, and a personalized touch.</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">🛠️</span> Enhanced Functionality
                        </h3>
                        <p class="text-gray-600">Optimize your kitchen layout for better workflow and efficiency.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">💰</span> Increased Home Value
                        </h3>
                        <p class="text-gray-600">A well-designed kitchen boosts resale value and attracts buyers.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">🏠</span> Modern Aesthetic
                        </h3>
                        <p class="text-gray-600">Upgrade outdated features with sleek, stylish designs.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">💡</span> Improved Energy Efficiency
                        </h3>
                        <p class="text-gray-600">New appliances and lighting can lower energy costs.</p>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                <h2 class="text-2xl font-bold mb-6">Professional Kitchen Remodeling Services in Easton, Mansfield, and Norton, MA</h2>
                <p class="mb-6">Looking for kitchen renovation experts in Easton, Mansfield, or Norton, MA? At SGO Construction, we pride ourselves on transforming kitchens across the region making homes more elegant, efficient, and tailored to your lifestyle.</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 class="text-xl font-bold mb-3">Kitchen Remodeling Easton MA:</h3>
                        <p class="text-sm text-gray-600">We bring modern layouts, stylish cabinetry, and innovative storage solutions right to Easton homeowners. Whether you are updating a family kitchen or building a chef-inspired design, our Easton kitchen redesign services combine local expertise and meticulous craftsmanship. Every Easton kitchen is custom designed to fit your family's needs, taste, and budget.</p>
                     </div>
                     <div>
                        <h3 class="text-xl font-bold mb-3">Kitchen Remodeling Mansfield MA:</h3>
                        <p class="text-sm text-gray-600">In Mansfield, our team specializes in full kitchen renovations, from open-concept designs and durable countertops to premium appliances, flooring, and lighting upgrades. We handle every detail ensuring Mansfield kitchens are both stunning and practical, ideal for families who love to cook, entertain, and create lasting memories.</p>
                     </div>
                </div>
                 <div class="mt-8">
                    <h3 class="text-xl font-bold mb-3">Kitchen Remodeling Norton MA:</h3>
                    <p class="text-sm text-gray-600">For Norton residents, SGO Construction offers kitchen remodels that maximize efficiency and match any style traditional or modern. Our Norton kitchen remodeling solutions include custom cabinets, backsplash installations, new layouts, and energy-efficient fixtures. We transform outdated kitchens into vibrant spaces you'll love.</p>
                 </div>
            </div>
            
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "Bathroom Remodeling",
        slug: "bathroom-remodeling",
        description: "Your bathroom should be a space of comfort, relaxation, and practicality. Transform outdated bathrooms into modern, spa-like retreats.",
        shortDescription: "Transform outdated bathrooms into modern, spa-like retreats.",
        image: "/bathroom.png",
        icon: Bath,
        content: `
            <p class="lead">Your bathroom should be a space of comfort, relaxation, and practicality. At SGO Construction, we specialize in turning outdated and inefficient bathrooms into modern, spa-like retreats tailored to your needs. Whether you're looking to upgrade fixtures, improve storage, or completely reimagine the layout, our team brings expert craftsmanship and innovative solutions to every project. With a focus on quality, functionality, and aesthetics, we'll help you create a bathroom that blends luxury with everyday convenience.</p>
            
            <div class="mt-12">
                <h2 class="text-3xl font-bold mb-6">Benefits And Solutions</h2>
                <p class="text-gray-600 mb-8">Discover how our expert bathroom renovation services can enhance comfort, improve functionality, and solve common design challenges with modern solutions, quality craftsmanship, and a personalized touch.</p>
                
                <div class="mb-10 bg-gray-50 p-6 rounded-lg">
                    <p class="text-gray-700">A bathroom should balance relaxation, function, and design. We focus on smart layouts, water-efficient fixtures, beautiful tilework, and spa-like upgrades that turn your bathroom into a daily retreat. Our team handles everything from plumbing and demolition to cabinetry and custom vanities — all tailored to your style.</p>
                </div>
            </div>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                <h2 class="text-2xl font-bold mb-6">Local Bathroom Remodeling Experts in Easton & Mansfield, MA</h2>
                <p class="mb-6">Looking for the most trusted bathroom remodeling contractor in Easton, MA or Mansfield, MA? SGO Construction specializes in transforming bathrooms in both Easton and Mansfield delivering spa-like retreats, smart layouts, and modern solutions customized for your lifestyle.</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 class="text-xl font-bold mb-3">Bathroom Remodeling Easton MA</h3>
                        <p class="text-sm text-gray-600">Easton homeowners rely on SGO Construction for creative bathroom renovation whether it's updating fixtures, expanding space, or creating a luxury master bath. Our team brings expert craftsmanship, durable tilework, custom vanities, water-efficient fixtures, and beautiful lighting to every Easton bathroom project. We work with you to solve storage challenges, optimize space, and select finishes that match your taste.</p>
                     </div>
                     <div>
                        <h3 class="text-xl font-bold mb-3">Bathroom Remodeling Mansfield MA</h3>
                        <p class="text-sm text-gray-600">In Mansfield, SGO Construction provides personalized bathroom designs for busy families, couples, and growing households. Our Mansfield bathroom remodels feature contemporary details, innovative layouts, easy-to-clean surfaces, and stylish upgrades. From walk-in showers and soaking tubs to upgraded counters and premium cabinetry, your new bath will be both practical and relaxing.</p>
                     </div>
                </div>
            </div>
            
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "Decks and Porches",
        slug: "decks-and-porches",
        description: "Enhance your outdoor living space with custom-built decks and porches designed for comfort and durability.",
        shortDescription: "Custom decks and porches to enhance your outdoor living.",
        image: "/decks.png",
        icon: Fence,
        content: `
            <p class="lead">We offer a variety of high-quality materials for decks and porches, ensuring durability, style, and long-lasting performance. Whether you prefer the low-maintenance benefits of plastics and composites, the timeless beauty of natural wood, or the strength and affordability of pressure-treated wood, we have the perfect solution to match your vision. Our expert craftsmanship ensures that your outdoor space is built to withstand the elements while enhancing the beauty and functionality of your home.</p>
            
            <div class="mt-12">
                <h2 class="text-3xl font-bold mb-6">Benefits And Solutions</h2>
                <p class="text-gray-600 mb-8">Discover how our expert deck remodeling services can enhance functionality, increase home value, and solve common design challenges with modern solutions, quality craftsmanship, and a personalized touch.</p>
                
                <div class="grid md:grid-cols-2 gap-6 mb-10">
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-lg font-bold mb-2">Expanded Outdoor Living Space</h3>
                        <p class="text-gray-600 text-sm">Create the perfect area for relaxing, entertaining, and enjoying the outdoors.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-lg font-bold mb-2">Durable & Low-Maintenance Options</h3>
                        <p class="text-gray-600 text-sm">Choose from composite, plastic, or pressure-treated wood for long-lasting results.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-lg font-bold mb-2">Custom Designs to Fit Your Style</h3>
                        <p class="text-gray-600 text-sm">Whether modern, rustic, or classic, we build decks and porches to match your vision.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-lg font-bold mb-2">Better Functionality & Accessibility</h3>
                        <p class="text-gray-600 text-sm">Improve the usability of your outdoor space with seamless transitions and smart layouts.</p>
                    </div>
                </div>

                <div class="bg-gray-50 p-6 rounded-lg">
                    <p class="text-gray-700">Enhance your outdoor living space with a custom-built deck or porch designed for comfort and durability. We offer pressure-treated wood, composite materials, and custom railings — perfect for hosting, relaxing, or expanding your usable square footage. Our team manages the permits and build process start to finish.</p>
                </div>
            </div>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                <h2 class="text-2xl font-bold mb-6">Local Deck Builders in Easton, Mansfield & Foxborough (Foxboro), MA</h2>
                <p class="mb-6">Looking for experienced decks builders in Easton, MA, Mansfield, MA, or Foxborough/Foxboro, MA? SGO Construction specializes in creating beautiful, durable decks and porches that expand your outdoor living space and add value to your home. Our team is proud to serve homeowners in these towns with top-tier materials, custom designs, and flawless installation.</p>
                
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                     <div>
                        <h3 class="text-xl font-bold mb-3">Deck Builders Easton MA</h3>
                        <p class="text-sm text-gray-600">SGO Construction offers tailored decks solutions for Easton residents. Whether you want a spacious composite deck for entertaining, a classic pressure-treated wood design, or a multi-level custom build, our Easton deck builders ensure a hassle-free experience from concept to completion. We manage permits, design, construction, and finishing all customized to your lot, style, and needs.</p>
                     </div>
                     <div>
                        <h3 class="text-xl font-bold mb-3">Deck Builders Mansfield MA</h3>
                        <p class="text-sm text-gray-600">Our Mansfield decks builders create spaces that are perfect for relaxing, barbecuing, or hosting get-togethers. We carefully select the best materials to handle Mansfield's seasons, and our craftsmanship guarantees a long-lasting, low-maintenance finish. Choose from a wide range of styles, railing options, and accessories for a deck that perfectly matches your home's aesthetic.</p>
                     </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold mb-3">Deck Builders Foxborough/Foxboro MA</h3>
                    <p class="text-sm text-gray-600">From Foxborough center to the surrounding neighborhoods, SGO Construction delivers expert porch and deck building services. Our Foxborough deck builders are known for innovative designs, excellent material choices (composite, PVC, pressure-treated wood), and attention to every construction detail. We work closely with Foxboro/ Foxborough homeowners to create inviting outdoor spaces that raise curb appeal and property value.</p>
                </div>
            </div>
            
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "Siding Installation",
        slug: "siding-installation",
        description: "Siding is more than just an exterior finish—it's your home's first line of defense against the elements while also adding to its curb appeal and energy efficiency.",
        shortDescription: "Expert siding installation for durability and curb appeal.",
        image: "/siding.png",
        icon: Layers,
        content: `
            <p class="lead">Siding is more than just an exterior finish—it's your home's first line of defense against the elements while also adding to its curb appeal and energy efficiency. At SGO Construction, we offer expert siding installation and replacement services using high-quality materials designed to withstand the harsh New England weather. Whether you're looking for vinyl, fiber cement, or wood siding, our team ensures a flawless installation that enhances durability and aesthetic appeal. With a variety of styles and colors available, we help homeowners achieve a custom look that complements their home while improving insulation and long-term protection.</p>
            
            <div class="mt-12">
                <h2 class="text-3xl font-bold mb-6">Benefits And Solutions</h2>
                <p class="text-gray-600 mb-8">Discover how our expert siding remodeling services can enhance functionality, increase home value, and solve common design challenges with modern solutions, quality craftsmanship, and a personalized touch.</p>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">🌡️</span> Energy Efficiency & Insulation
                        </h3>
                        <p class="text-gray-600">Improved insulation keeps your home comfortable and lowers energy costs.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">🛡️</span> Durability & Weather Resistance
                        </h3>
                        <p class="text-gray-600">Our siding withstands harsh weather, protecting your home year-round.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">🏡</span> Curb Appeal & Home Value
                        </h3>
                        <p class="text-gray-600">Choose from various styles and colors to boost your home's look and value.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                            <span class="text-primary text-2xl">✨</span> Low Maintenance & Longevity
                        </h3>
                        <p class="text-gray-600">Resistant to fading, warping, and cracking for long-lasting performance.</p>
                    </div>
                </div>
            </div>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                <h2 class="text-2xl font-bold mb-6">Trusted Siding Contractors in Easton & Mansfield, MA</h2>
                <p class="mb-6">Looking for a professional siding contractor in Easton, MA or Mansfield, MA? SGO Construction is the local expert you can count on for high-quality siding installation, replacement, and repairs. Serving Easton and Mansfield homeowners, our team uses premium materials vinyl, fiber cement, and wood to ensure your house stands up to New England's challenging climate while looking its best.</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 class="text-xl font-bold mb-3">Siding Contractor Easton MA</h3>
                        <p class="text-sm text-gray-600">SGO Construction delivers flawless siding solutions for Easton homes. Whether you are upgrading to more energy-efficient vinyl siding, repairing weather damage, or boosting curb appeal, our Easton siding contractors customize every project to suit your house style and budget. We offer personalized consultations, honest estimates, and efficient installation for lasting protection and value.</p>
                     </div>
                     <div>
                        <h3 class="text-xl font-bold mb-3">Siding Contractor Mansfield MA</h3>
                        <p class="text-sm text-gray-600">In Mansfield, our siding professionals provide durable, attractive siding that improves home insulation and instantly elevates its appearance. From historic homes to contemporary builds, Mansfield residents rely on SGO Construction for transparent service, quick turnarounds, and siding replacement that reduces maintenance for years.</p>
                     </div>
                </div>
            </div>
            
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "Basement Renovations",
        slug: "basement-renovations",
        description: "A finished basement adds valuable living space, whether you need a home office, entertainment area, or extra bedroom.",
        shortDescription: "Transform your basement into functional, comfortable living space.",
        image: "/basement.png",
        icon: Sofa,
        content: `
            <p class="lead">A finished basement adds valuable living space, whether you need a home office, entertainment area, or extra bedroom. At SGO Construction, we specialize in transforming basements into functional, comfortable spaces while ensuring proper insulation and moisture protection. Our expert team handles everything from framing and flooring to lighting and waterproofing, creating a dry, energy-efficient, and stylish extension of your home. Whether you're looking to increase home value or simply make better use of your space, we deliver high-quality renovations tailored to your needs.</p>
            
            <div class="mt-12">
                <h2 class="text-3xl font-bold mb-6">Benefits And Solutions</h2>
                <p class="text-gray-600 mb-8">A basement renovation adds valuable living space, boosts home value, and improves energy efficiency. Our expert team ensures proper insulation, moisture protection, and a high-quality finish for a comfortable and long-lasting upgrade.</p>
                
                <div class="grid md:grid-cols-2 gap-6 mb-10">
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3">Added Living Space</h3>
                        <p class="text-gray-600">Transform your basement into a functional area for work, entertainment, or relaxation.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3">Increased Home Value</h3>
                        <p class="text-gray-600">A finished basement boosts property value and appeal to potential buyers.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3">Energy Efficiency</h3>
                        <p class="text-gray-600">Proper insulation and waterproofing improve comfort and reduce utility costs.</p>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-3">Moisture Protection</h3>
                        <p class="text-gray-600">We prevent leaks, mold, and humidity issues for a dry, healthy space.</p>
                    </div>
                </div>

                <div class="bg-gray-50 p-6 rounded-lg">
                    <p class="text-gray-700">Finishing a basement adds functional square footage and significantly boosts home value. Whether you're envisioning a guest suite, home gym, office, or entertainment space, our team will guide you from rough framing to the final paint stroke. We specialize in moisture control, insulation, lighting, and flooring choices that match your goals and budget.</p>
                </div>
            </div>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                <h2 class="text-2xl font-bold mb-6">Local Basement Renovations Contractors in Easton & Mansfield, MA</h2>
                <p class="mb-6">Looking for a trusted basement renovations contractor in Easton, MA or Mansfield, MA? SGO Construction proudly serves both communities with expert basement finishing, moisture protection, and energy-efficient design. Whether you want to create a home office, entertainment room, extra bedroom, or gym, our skilled contractors bring your vision to life with top-quality materials and personalized solutions.</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 class="text-xl font-bold mb-3">Basement Contractor Easton MA</h3>
                        <p class="text-sm text-gray-600">SGO Construction's Easton basement contractors are experts in converting unfinished spaces into dry, comfortable living areas that add measurable value to your home. We handle everything, including waterproofing, insulation, framing, lighting, and flooring. Enjoy peace of mind with our moisture control solutions and custom layouts ideal for growing families, remote workers, and anyone needing extra space.</p>
                     </div>
                     <div>
                        <h3 class="text-xl font-bold mb-3">Basement Contractor Mansfield MA</h3>
                        <p class="text-sm text-gray-600">Mansfield homeowners turn to SGO Construction for full-service basement remodeling. Our team specializes in modern finishing options, smart storage designs, and durable, stylish flooring. We resolve moisture issues, maximize usable square footage, and ensure every Mansfield basement is as functional as it is beautiful.</p>
                     </div>
                </div>
            </div>
            
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "Trim Installation",
        slug: "trim-installation",
        description: "Add the perfect finishing touch to your home with expertly crafted trim that enhances every room’s character and style.",
        shortDescription: "Expertly crafted trim that enhances every room’s character.",
        image: "/trim.png",
        icon: Scissors,
        content: `
            <p class="lead">Add the perfect finishing touch to your home with expertly crafted trim that enhances every room’s character and style. At SGO Construction, we believe that the details make the difference. From crown molding and baseboards to wainscoting and window casings, our skilled carpenters deliver precise, high-quality trim installation that elevates the look of your interiors.</p>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                 <h2 class="text-2xl font-bold mb-6">Expert Trim Services</h2>
                 <p className="mb-6">We provide custom woodworking and trim solutions for homeowners in Easton, Mansfield, Norton, and surrounding areas.</p>
            </div>
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "Gutters",
        slug: "gutters",
        description: "Protect your home from water damage with durable, high-quality gutter systems designed to handle New England’s toughest weather.",
        shortDescription: "Durable gutter systems to protect your home from water damage.",
        image: "/gutters.png",
        icon: Droplets,
        content: `
            <p class="lead">Protect your home from water damage with durable, high-quality gutter systems designed to handle New England’s toughest weather. Proper water diversion is critical for maintaining your home's foundation and siding. SGO Construction offers seamless gutter installation, repair, and maintenance services to keep your property safe and dry.</p>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                 <h2 class="text-2xl font-bold mb-6">Reliable Gutter Solutions</h2>
                 <p className="mb-6">Serving Easton, Mansfield, Norton, and beyond with top-tier gutter materials and installation.</p>
            </div>
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "Door & Window Installations",
        slug: "door-and-window-installations",
        description: "Upgrade your home with sleek, energy-efficient doors and windows that boost curb appeal and keep your space comfortable year-round.",
        shortDescription: "Energy-efficient doors and windows to boost curb appeal and comfort.",
        image: "/door.png",
        icon: DoorOpen,
        content: `
            <p class="lead">Upgrade your home with sleek, energy-efficient doors and windows that boost curb appeal and keep your space comfortable year-round. New windows and doors not only improve the look of your home but also reduce energy costs and increase security. SGO Construction provides expert installation of various styles and brands to match your home's aesthetic.</p>

            <div class="mt-12 bg-gray-50 p-8 rounded-xl">
                 <h2 class="text-2xl font-bold mb-6">Professional Installation</h2>
                 <p className="mb-6">We install high-performance windows and doors across Easton, Mansfield, Norton, and surrounding MA towns.</p>
            </div>
             <div class="mt-12">
                <h3 class="text-xl font-bold mb-4">Proudly Serving the Following Areas</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Taunton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Norton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Easton</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Mansfield</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Foxboro</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Wrentham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Raynham</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Dighton</li>
                    </ul>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Berkley</li>
                        <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Rehoboth</li>
                         <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-primary">✔</span> Franklin</li>
                    </ul>
                </div>
            </div>
        `
    }
];
