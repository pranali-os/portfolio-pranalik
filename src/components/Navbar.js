import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function Navbar(){
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    activeClassName="text-blue-500" 
                    className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-500 text-4xl font-bold cursive tracking-widest">
                        Pranali
                    </NavLink>
                    <NavLink 
                    to="/post"
                    activeClassName="text-blue-500 bg-clip-content p-3 border-2 border-dashed border-blue-500 " 
                    className="inline-flex items-center py-3 px-3 mr-6 rounded text-white transition duration-500 ease-in hover:text-blue-500 transform " >
                        Project
                    </NavLink>
                    <NavLink        to="/project"
                    activeClassName="text-blue-500 bg-clip-content p-3 border-2 border-dashed border-blue-500"  
                    className="inline-flex items-center py-3 px-3 mr-6 rounded text-white transition duration-500 ease-in hover:text-blue-500 transform">
                        Experience
                    </NavLink>
                    <NavLink 
                    to="/about"
                    activeClassName="text-blue-500 bg-clip-content p-3 border-2 border-dashed border-blue-500"  
                    className="inline-flex items-center py-3 px-3 mr-6 rounded text-white transition duration-500 ease-in hover:text-blue-500 transform">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/pranali-khandekar-a968b3ab" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35}}/>
                    <SocialIcon url="https://github.com/pranali-os" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35}}/>
                    <SocialIcon url="https://mobile.twitter.com/Pranali_DK" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35}}/>
                </div>

            </div>
        </header>
    )
}