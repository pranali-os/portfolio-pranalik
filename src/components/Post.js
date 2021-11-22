import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post(){
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
             .fetch(`*[_type == "post"]{
                 title,
                 slug,
                 mainImage{
                     asset->{
                         _id,
                         url
                     },
                     alt
                 }
             }`)
             .then((data) => setPost(data))
             .catch(console.error);
    }, []);

    return (
        <main className="bg-black min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-white text-5xl flex justify-center cursive">My Noteworthy Projects</h1>
                <h2 className="text-lg text-gray-300 flex justify-center mb-12">Welcome to my page!</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                           <span className="block h-64 relative rounded shadow leading-snug bg-gray-500 border-l-8 border-blue-400 " key={index}>
                               <div className="block h-64 relative rounded leading-snug  border-l-8 border-gray-400">
                                  <img
                                      src={post.mainImage.asset.url}
                                      alt={post.mainImage.alt}
                                      className="filter grayscale w-full h-u-full rounded-r object-cover h-250 absolute"
                                   />
                                   <span className="block relative h-full flex justify-end items-end pr-6 pb-4 mt-8 mb-1">
                                      <h3 className=" text-white-500 justify-center text-center font-semibold p-4 border border-blue-500 w-1/2 rounded-md  mt-9 cursor-pointer bg-blue-500 hover:bg-blue-600 bg-opacity-75">
                                          {post.title}
                                        </h3>
                                    </span>
                                </div>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}