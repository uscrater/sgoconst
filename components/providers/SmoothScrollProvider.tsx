"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function LenisScrollHandler() {
    const lenis = useLenis();
    const pathname = usePathname();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return null;
}

export function SmoothScrollProvider({ children }: { children: any }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <LenisScrollHandler />
            {children}
        </ReactLenis>
    );
}
