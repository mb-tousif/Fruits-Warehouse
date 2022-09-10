import React, { useState, useEffect } from "react";

const BlogsPage = () => {
    const [blog, setBlog] = useState([]);

    useEffect(()=>{
        const url = "https://fruits-warehouse-server.vercel.app/api/blogs";
        fetch(url)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return (
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center pb-5">Blogs</h2>
        {
          blog.map(doc=>
            <div doc={doc} key={doc._id} className="container p-2 mx-auto py-5">
              <div className="border mx-auto p-5 border-emerald-900 rounded-lg max-w-[700px]">
                <h2 className="text-xl md:font-bold text-center pb-2 mb-4 border-2 border-b">{doc.question}</h2>
                <p className="text-md md:font-bold  pb-2">{doc.answer}</p>
              </div>
            </div>
          )
        }
      </div>
    );
};

export default BlogsPage;