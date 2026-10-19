'use client'

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-center items-center p-10 overflow-hidden flex flex-col justify-center">
            <section>

            </section>
            <section>
                <h1 className="text-9xl text-white">LYNKO.day</h1>
                <p className="text-white">Developed by <Link className="border-b-1 border-white" href="https://www.rody.city">1rody</Link>, make your daily socials in one place</p>
            </section>
        </footer>
    )
}