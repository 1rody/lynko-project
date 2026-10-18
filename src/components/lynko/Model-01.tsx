'use client' 

import Image from "next/image";

export default function Model() {
    return (
        <section className="h-screen absolute z-4 flex w-full items-center justify-center">
            <div id="lynk-model" className="flex gap-10 flex-col rounded-4xl  p-4 w-80 border-1 border-blue-300/10 bg-blue-200/10"> 
                <header id="header-content" >
                    <Image className="bg-black relative z-3 w-full rounded-2xl h-20" src="" alt="Banner image"></Image>
                    <h1 className="text-5xl font-badeen-display  -mt-17 relative z-5 text-center  text-white">USERNAME</h1>
                </header>
                <main id="main-content" className="flex mt-2 mb-1">
                    <article>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, natus alias repellendus reiciendis delectus temporibus earum dolorem ab veritatis magni autem commodi, maxime nam nostrum ducimus saepe laboriosam sed molestias.
                        </p>
                    </article>
                </main>
                <section id="social-links">

                </section>
            </div>
        </section>
    )
}