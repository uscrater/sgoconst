import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-white text-foreground pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <img
                            src="/logo (2).png"
                            alt="SGO Construction"
                            className="h-12 w-auto object-contain mb-6"
                        />
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Expert general contractor in MA, delivering quality craftsmanship for over 10 years. From remodeling to new construction, we build with precision and integrity.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/sgoconstructionInc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/sgoconstruction_inc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/gallery" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Info</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Address</p>
                                    <p className="text-gray-600">35 Millview St, Taunton, MA</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Phone</p>
                                    <p className="text-gray-600">(774) 703-4643</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Email</p>
                                    <p className="text-gray-600">info@sgoconst.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p className="mb-2">&copy; {new Date().getFullYear()} SGO Construction. All rights reserved.</p>
                    <p className="text-xs">
                        Made with love by{" "}
                        <Link
                            href="https://www.instagram.com/kaimkt_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            Kai Marketing Group
                        </Link>
                        {" & "}
                        <Link
                            href="https://www.linkedin.com/in/evertonceciliano/?locale=en_US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            Everton Ceciliano
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
