import React from "react"
import image from "../pic1.jpg"

export default function Home() {
    return(
        <main>
            <img src={image} alt="snow" className="absolute object-cover w-full h-full opacity-60"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-48 px-8">
                <h1 className=" text-blue-900 font-bold cursive leading-none lg:leading-snug home-name">Ola, I'm Flavia</h1>
            </section>
        </main>
    )
}