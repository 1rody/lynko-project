'use client'


import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

export default function Navigation() {
    return (
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex w-full items-center justify-center p-3 fixed z-50">
            <nav className="flex items-center justify-around w-full">
               <ol className="backdrop-blur-3xl border-1 text-xl flex items-center justify-center px-3 py-1 rounded-4xl flex gap-5 border-gray-200">
                    <li className="rounded-4xl px-4 py-3 ">
                        <Link href="/"><Image className="w-20" alt="lynko brand" width={100} height={100} src="/assets/icons/Lynko.svg"></Image></Link>
                    </li>
                    <li className="border-b-1 border-b-white hover:border-b-1 lg:px-2 hover:border-b-black duration-200 ">
                        <Link href="/">github</Link>
                    </li>
                    <li className="border-b-1 border-b-white hover:border-b-1 lg:px-2 hover:border-b-black duration-200 ">
                        <Link href="/">FAQ</Link>
                    </li>
                    <li className="border-b-1 border-b-white hover:border-b-1 lg:px-2 hover:border-b-black duration-200 ">
                        <Link href="/">contribute</Link>
                    </li>
                </ol>
                <ol className="backdrop-blur-3xl border-1 text-xl flex items-center justify-center px-3 py-1 rounded-4xl lg:block hidden flex gap-5 border-gray-200">
                    <li className="border-b-1 border-b-white hover:border-b-1 hover:border-b-black duration-200">
                        <Link href="/">Download source</Link>
                    </li>
                    <li className="bg-black rounded-4xl px-4 py-3 text-white">
                        <Link href="/">CREATE NOW</Link>
                    </li>
                </ol>
            </nav>
        </motion.header>
    )
}