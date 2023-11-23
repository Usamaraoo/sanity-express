"use client";
import React, { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import { Categories } from "./Categories";
import { blogByCat } from "@/sanity/sanity-utils";

export  function BlogList({ blogs, categories }) {
  const [blogsState, setBlogState] = useState(blogs);
  const [currentCatSatate, setCurrentCatState]= useState('All')
  const blogByCatFun = async (cat) => {
    if(cat==='All'){
      setCurrentCatState('All')
      setBlogState(blogs)
    }else{
      const newBlogs = await blogByCat(cat);
      setCurrentCatState(cat)
      setBlogState(newBlogs)

    }
  };

  return (
    <div className="flex justify-between gap-8 mt-12 ">
      <div className="w-2/6">
        <Categories categories={categories} blogByCatFun={blogByCatFun} currentCatSatate={currentCatSatate} />
      </div>

      <div className="flex flex-wrap  items-stretch gap-8 w-5/6 ">
        {blogsState && blogsState.length > 0 ?
          blogsState.map((blog) => {
            return (
              <div key={blog._id}>
                {" "}
                <BlogCard {...blog}  />
              </div>
            );
          }):
          <div className="pm-txt text-xl">Sorry No Blog in this category yet</div>
          }
      </div>
    </div>
  );
}
