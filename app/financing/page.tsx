'use client'

import { useEffect, useRef } from 'react'

export default function FinancingPage() {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe) return

        const resizeIframe = () => {
            try {
                if (iframe.contentWindow) {
                    const height = iframe.contentWindow.document.body.scrollHeight
                    iframe.style.height = height + 'px'
                }
            } catch (e) {
                console.log('Could not resize iframe:', e)
            }
        }

        iframe.addEventListener('load', resizeIframe)

        // Also try to resize periodically in case content changes
        const interval = setInterval(resizeIframe, 1000)

        return () => {
            iframe.removeEventListener('load', resizeIframe)
            clearInterval(interval)
        }
    }, [])

    return (
        <main className="bg-background">
            <iframe
                ref={iframeRef}
                src="/widget-enhancify.html"
                style={{
                    width: '100%',
                    minHeight: '600px',
                    border: 'none',
                    display: 'block'
                }}
                title="Financing Widget"
            />
        </main>
    )
}
