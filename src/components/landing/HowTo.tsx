'use client'

import Image from "next/image"
import Link from "next/link"
import {motion} from "motion/react"

export default function HowTo() {
    return (
        <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} id="how-to"  className=" flex flex-col gap-10 w-full items-center justify-center">
            <div className="flex flex-col items-center relative sticky z-5 min-h-screen top-[2px] justify-center h-screen">
                <p className="text-black font-medium lg:max-w-1/2 text-4xl text-center">
                    Most link-in-bio services <br /> trap you inside their walled garden. <br /> You customize a page, but you never actually own it. <br /> If they go down, change their pricing, or limit features, you're stuck. <br />
                    <br />Because of this i created Lynko <br /> to give control back to creators and developers. 
                    With our web builder, you can create a stunning page in minutes. <br /><br /> and the best part...  <br />you can download the source code and run it anywhere. From your own hosting provider to your localhost. <br /> <br />
                    Want to take it further? <br /> Feed your exported code directly to an AI. your AI assistant can easily edit, expand, and turn your creation into an new incredible thing with lynko base and IA rules. <br /> <br />
                    Create easily. Export freely. Host anywhere.
                </p>
            </div>
            <div id="title" className="bg-white z-6 w-full items-center justify-center p-20  -mb-20 flex flex-col">
                <h1 className="lg:text-6xl text-3xl text-center font-black">CREATE YOUR LYNKO</h1>
                <p className="max-w-5xl text-center">
                    Lynko is made for coders and for IA agents and YOU, download base → customize or code → publish.          
                </p>
                 <Image width={1000} height={600} className="md:min-w-3/4 lg:min-w-2/4 mt-20 mb-10 z-6 min-w-3/4 bg-black hover:scale-110 duration-200 rounded-4xl" src=""></Image>

            </div>
            <div className="flex gap-4 bg-white p-20 items-center justify-center w-full z-5">
                    <ol className="text-xl flex items-center justify-center px-3 py-1 rounded-4xl flex gap-5 border-gray-200">
                        <li className="border-b-1 border-b-white  active:scale-90 duration-200 hover:border-b-1 hover:border-b-black duration-200">
                            <Link href="/">Download source</Link>
                        </li>
                        <li className="bg-black rounded-4xl active:scale-90 duration-200 hover:bg-white hover:border-1 hover:border-black hover:text-black px-4 py-3 text-white">
                            <Link href="/">CREATE NOW</Link>
                        </li>
                    </ol>
            </div>
        </motion.section>
    )
}