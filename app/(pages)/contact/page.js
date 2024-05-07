"use client";
import React, { useState, useEffect } from 'react'

const page = () => {
    const [scriptContent, setScriptContent] = useState(null)

    useEffect(() => {
        setScriptContent(
            "window.jotformEmbedHandler('iframe[id='JotFormIFrame-241273261578055'', 'https://form.jotform.com/')"
        )
    }, [])
    return (
        <div className="pt-16 sm:pt-32 bg-accent-two">
            <iframe
                id="JotFormIFrame-241273261578055"
                title="Get in touch!"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/241273261578055"
                className="w-full h-screen"
            >
            </iframe>
            <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
            {scriptContent && <script>{scriptContent}</script>}
        </div>
    )
}

export default page

