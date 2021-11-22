import React, {useEffect, useState } from "react";

import sanityClient from "../client.js"

export default function Experience(){
    const [experienceData, setExperienceData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "experience"]{
            title,
            date,
            place,
            description,
            skillType,
            link,
            tags,
        }`).then((data) => setExperienceData(data))
        .catch(console.error);
    }, []);
    return (
        <main className="bg-black min-h-screen p-12">
            <section className="container mx-auto mt-3">
                <h1 className="text-white text-5xl flex justify-center cursive">Experience</h1>
                <h2 className="text-gray-300 text-lg flex justify-center mb-12">skills and experience</h2>
                <section className="grid grid-cols-2 gap-8">
                   {experienceData && experienceData.map((experience, index) => (
                       <article className="relative rounded-lg shadow-xl bg-gray-800 p-16">
                           <h3 className="text-gray-300 text-3xl font-bold mb-2 hover:text-white">
                                <a
                                  href={experience.link}
                                  alt={experience.title}
                                  target="_blank"
                                  rel="noopener noreferrer" 
                                >
                                {experience.title}
                                </a>
                            </h3>
                            <div className="text-gray-300 text-xs space-x-4">
                               <span>
                                   <strong className="font-bold">Finished on</strong>:{" "}
                                      {new Date(experience.date).toLocaleDateString()}
                                </span>
                                <span>
                                   <strong className="font-bold">Company</strong>
                                      {experience.place}
                                </span>
                                <span>
                                   <strong className="font-bold">Type</strong>{" "}
                                     {experience.skillType}
                                </span>
                                <p className="my-6 text-lg text-gray-300 leading-relaxed">
                                   {experience.description}
                                </p>
                                <a href={experience.link} rel="noopener noreferrer" target="_blank" className=" text-white-500 justify-center text-center font-semibold p-4 border border-blue-500 w-1/2 rounded-md  mt-9 cursor-pointer bg-transparent hover:bg-gray-600 bg-opacity-75">
                                   View the Project{" "}
                                    <span role="img" aria-label="right pointer">👉</span>
                                </a>
                            </div>
                        </article>
                    ))};  
                </section>
            </section>
        </main>
    )
}