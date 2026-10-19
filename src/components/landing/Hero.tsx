'use client'

import Image from "next/image"
import {motion} from "motion/react"

export default function Hero() {
    return (
        <section id="hero" className="h-screen overflow-hidden flex flex-col w-full items-center justify-center">
            <div id="hero-title" className="w-full overflow-hidden flex flex-col items-center justify-center">
                <motion.img initial={{ opacity: 0, }} animate={{ opacity: 1,}} transition={{ duration: 0.5 }}  className="z-10 absolute lg:-mt-17 -mt-10" alt="Particles" width={700} height={600} src="assets/PARTICLES.svg"/>
                <motion.h1 initial={{ opacity: 0, }} animate={{ opacity: 1,}} transition={{ duration: 0.5 }}  className="lg:text-6xl text-4xl text-center">SYNC EVERY SOCIAL <br /> ON ONE home</motion.h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  id="samples-image" className="flex w-full items-center  justify-center mt-80 z-31">
                <Image className="z-10 absolute   -mt-17" alt="Lynko examples" width={1000} height={600} src="assets/Samples.svg"/>
            </motion.div >
        </section>
    )
}