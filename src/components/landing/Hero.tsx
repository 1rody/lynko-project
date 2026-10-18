'use client'

import Image from "next/image"

export default function Hero() {
    return (
        <section id="hero" className="h-screen flex flex-col w-full items-center justify-center">
            <div id="hero-title">
                <Image className="z-10 absolute -mt-17" alt="Particles" width={700} height={600} src="assets/PARTICLES.svg"/>
                <h1 className="text-6xl text-center">SYNC EVERY SOCIAL <br /> ON ONE home</h1>
            </div>
            <div id="samples-image" className="flex w-full items-center justify-center mt-80 z-31">
                <Image className="z-10 absolute -mt-17" alt="Particles" width={1000} height={600} src="assets/Samples.svg"/>
            </div>
        </section>
    )
}