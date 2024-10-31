import React from "react";
import BlogCard from "../../../components/BlogCard";

const Blog = () => {
  return (
    <section className="container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5">
        <BlogCard className="w-[350px] md:w-[calc(50%-20px)] lg:w-[calc(25%-25px)]" />
        <BlogCard className="w-[350px] md:w-[calc(50%-20px)] lg:w-[calc(25%-25px)]" />
      </div>
    </section>
  );
};

export default Blog;
