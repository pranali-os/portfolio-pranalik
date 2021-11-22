import React from "react"




export default function Home(){
    return (
    
    <div className ="relative pt-16 pb-32 flex content-center items-center justify-center"style={{
        minHeight: "85vh"
      }}
        >
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <span className="w-full h-full absolute bg-black"></span>
        </div>
        <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                        <h1 className="text-white font-semibold text-6xl cursive">
                        Pranali Khandekar
                        </h1>
                        <p className="mt-8 text-lg text-gray-300">
                        I'm a Software Engineer creatively building <span className="text-blue-500">D</span>igital <span className="text-blue-500">E</span>xperiences.
                        Currently, I'm focusing on building Web-Application using React and Django. Looking for the opportunity in the same technology.
                        </p>
                        <a href="pranali_k_resume.pdf" download="Pranali Khandekar.pdf"className="inline-block align-middle mx-28 bg-transparent hover:bg-gray-700 text-blue-500 font-semibold p-4 border border-blue-500 hover-border-transparent w-1/2 flex items-center justify-center rounded-md  mt-9 cursor-pointer">
                        <button className="btn highlighted-btn">Download My Resume!</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    )
}