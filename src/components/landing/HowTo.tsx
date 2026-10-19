'use client'

import Image from "next/image"
import Link from "next/link"
import {motion} from "motion/react"

export default function HowTo() {
    return (
        <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} id="how-to"  className="h-screen flex flex-col gap-10 w-full items-center justify-center">
            <div id="title">
                <h1 className="text-6xl text-center font-black">CREATE YOUR LYNKO</h1>
                <p className="max-w-5xl">
                    Lynko is made for coders and for IA agents and YOU, download base → customize or code → publish.          
                </p>
            </div>
            <video className="min-w-2/4 bg-black rounded-4xl" src=""></video>
            <div className="flex gap-4">
                    <ol className="text-xl flex items-center justify-center px-3 py-1 rounded-4xl flex gap-5 border-gray-200">
                        <li className="border-b-1 border-b-white hover:border-b-1 hover:border-b-black duration-200">
                            <Link href="/">Download source</Link>
                        </li>
                        <li className="bg-black rounded-4xl px-4 py-3 text-white">
                            <Link href="/">CREATE NOW</Link>
                        </li>
                    </ol>
            </div>
        </motion.section>
    )
}