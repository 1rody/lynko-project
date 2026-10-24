'use client'

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-2xl font-black text-center h-180 items-center p-10 overflow-hidden flex flex-col justify-center">
            <section className="flex h-full items-center flex-col justify-center">
                <p className="text-white">Developed by <Link className="border-b-1 border-white" href="https://www.rody.city">1rody</Link>, make your daily socials in one place</p>

                <h1 className="text-9xl text-white">LYNKO.day</h1>
                <div className="flex flex-col border-t-1 border-white p-5 mt-5 w-full lg:text-left text-white">
                    <Link href="/">Contribute</Link>
                    <Link href="/">Github</Link>
                    <Link href="/">Create now </Link>
                </div>
            </section>
        </footer>
    )
}