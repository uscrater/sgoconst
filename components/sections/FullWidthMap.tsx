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
        </section>
    )
}
