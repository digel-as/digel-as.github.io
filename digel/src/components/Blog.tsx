import React, { useState } from "react";
import config from "../config/index.json";
import Link from "next/link";

interface BlogSection {
  title: string;
  content: string;
}

interface BlogPost {
  title: string;
  img: string;
  sections: BlogSection[];
  published: string;
}

interface BlogConfig {
  title: string;
  posts: BlogPost[];
}

const Blog: React.FC = () => {
  const { blog } = config as { blog: BlogConfig };

  const numVisiblePosts = 2;

  const [visiblePosts, setVisiblePosts] = useState<number>(numVisiblePosts);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + numVisiblePosts);
  };

  return (
    <section id="latest-news" className="px-4 py-8">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
        {blog.title}
      </h1>
      <div className="flex flex-wrap justify-center items-stretch gap-8 p-4">
        {blog.posts.slice(0, visiblePosts).map((post, index) => (
          <Link key={index} href={`/blog/${index}`}>
            <a className="block w-full sm:w-1/2 max-w-lg">
              <div className="w-full mb-4">
                <img
                  src={post.img}
                  alt={post.title}
                  style={{ objectFit: "cover", borderRadius: 10, width: 500, height: 300 }}
                />
              </div>
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p>{post.published}</p>
            </a>
          </Link>
        ))}
      </div>
      {visiblePosts < blog.posts.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMorePosts}
            className="mt-4 px-6 py-2 bg-accent text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
