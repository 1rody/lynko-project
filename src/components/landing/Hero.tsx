'use client'

import Image from "next/image"
import {motion} from "motion/react"

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen overflow-hidden flex flex-col w-full gap-10 items-center justify-center py-16">
            <div id="hero-title" className="w-full flex flex-col overflow-hidden items-center justify-center gap-6">
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="z-10  duration-200 w-full max-w-[700px] absolute h-auto" alt="Particles" width={700} height={600} src="assets/PARTICLES.svg"/>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="lg:text-6xl text-4xl text-center">SYNC EVERY SOCIAL <br /> ON ONE home</motion.h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} id="samples-image" className="flex duration-200 hover:scale-108  w-full items-center justify-center z-10">
                <Image className="w-full max-w-[1000px] h-auto" alt="Lynko examples" width={1000} height={600} src="assets/Samples.svg"/>
            </motion.div>
        </section>
    )
}