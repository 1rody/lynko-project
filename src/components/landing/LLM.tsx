'use client'

import Image from "next/image"
import Link from "next/link"

export default function LLM() {
    return (
        <section id="how-to" className="h-screen flex flex-col w-full items-center justify-center">
            <div id="title" className="text-center">
                <h1 className="lg:text-6xl text-3xl text-center font-black">ONE, TWO, CLICK & CREATE!</h1>
                <p className="max-w-5xl">
                    Attatch your files, select or send your fonts icons, and select the organization!     
                </p>
            </div>
            <div className="flex border-1 border-gray-100 m-5 w-120 shadow-lg shadow-blue-200/30 rounded-4xl p-2 gap-4">
                <input type="text" className="p-2 w-full"  placeholder="CREATE your lynko with IA"/> <button className="px-4 py-2">SEND</button>
            </div>
        </section>
    )
}