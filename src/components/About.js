import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import wallpaper from "../wallpaper_15.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
          )
          .then((data) => setAuthor(data[0]))
          .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>
   
    return (
        <main className="relative">
            <img src={wallpaper} alt="wallpaper_15" className="absolute w-full h-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20">
                   
                    <img 
                        src={urlFor(author.authorImage).url()} className="w-32 h-32 lg:w-64 lg:h-64 mr-8 rounded"
                        alt={author.name} 
                    />
                    
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-xl text-blue-500 mb-4 tracking-widest">
                            Hello! My name is {" "}
                            <span className="cursive text-6xl text-white">{author.name}</span> 
                        </h1>
                        <div className="prose lg:prose-xl text-gray-300">
                            <BlockContent blocks={author.bio} projectId="7tw07194" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}