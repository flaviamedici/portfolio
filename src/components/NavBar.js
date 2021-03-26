import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon} from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-pink-800 text-4xl font-bold cursive tracking-widest">
                        Flavia
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-pink-800"
                        activeClassName="text-blue-100 bg-blue-700"
                        >
                            Blog Posts
                        </NavLink>
                    
                    <NavLink 
                        to="/project" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-pink-800"
                        activeClassName="text-blue-100 bg-blue-700"
                    >Projects</NavLink>
                    <NavLink 
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-pink-800"
                        activeClassName="text-blue-100 bg-blue-700"
                        >About Me!</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/flavia_o_m" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://instagram.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://linkedin.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}