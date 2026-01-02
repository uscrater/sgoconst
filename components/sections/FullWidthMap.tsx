"use client"

export function FullWidthMap() {
    return (
        <section className="w-full h-[500px] md:h-[600px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.514866042882!2d-71.1079072!3d41.9274051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e48df2fbec8aef%3A0x7fa2f180157d8e8e!2sSGO%20Construction%20Inc.!5e0!3m2!1sen!2sus!4v1719325000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="SGO Construction Location Map"
            />

            {/* Overlay Card for Address (Optional - mimicking the pin/card in some maps) */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 bg-white p-6 rounded-xl shadow-xl max-w-xs z-10 border border-gray-200 hidden md:block">
                <h3 className="font-bold text-lg mb-2">SGO Construction</h3>
                <p className="text-gray-600 text-sm mb-4">
                    35 Millview St<br />
                    Taunton, MA 02780
                </p>
                <a
                    href="https://maps.google.com/maps?ll=41.927405,-71.107907&z=13&t=m&hl=en&gl=US&mapclient=embed&cid=9199341640539171731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-bold hover:underline"
                >
                    Get Directions
                </a>
            </div>
        </section>
    )
}
