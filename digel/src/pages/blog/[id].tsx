// pages/blog/[id].tsx
import React from "react";
import { BlogPost } from "../../types/types";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";

// This function reads your JSON file from the filesystem
function readData() {
  const filePath = path.join(process.cwd(), "src", "config", "index.json"); // Ensure the path matches where your JSON file is stored
  const jsonContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonContent);
}

// This function generates paths for all blog posts
export const getStaticPaths: GetStaticPaths = async () => {
  const data = readData();
  const paths = data.blog.posts.map((post: any, index: number) => ({
    params: { id: String(index) }, // Assuming each post's ID is its index in the array
  }));

  return { paths, fallback: false };
};

// This function fetches the data for a single blog post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = readData();

  if (!params?.id) {
    return { notFound: true };
  }
  const post = data.blog.posts[+params!.id];

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const BlogPostPage: React.FC<{ post: BlogPost }> = ({ post }) => {
  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <article className="bg-backgroundMedium text-primary min-h-screen">
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`${post.sections.map((section) => section.content)}`}
        />
      </Head>
      <div className="relative w-full" style={{ height: "80vh" }}>
        <img
          src={post.img}
          alt={post.title}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="flex justify-center w-full">
        <div className=" max-w-screen-lg p-4 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{post.title}</h1>
          {post.sections.map((section, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-3xl md:text-5xl font-semibold">
                {section.title}
              </h2>
              <p className="my-4 text-xl md:text-3xl">{section.content}</p>
              {section.img && (
                <div className="flex flex-col items-center">
                  <div>
                    <img
                      src={section.img.src}
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        borderRadius: 10,
                      }}
                    />
                    {section.img?.caption && (
                      <p className="p-4 text-lg">{section.img.caption}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="my-8 text-let">
            <Link href="/#latest-news">
              <a className="text-lg text-accent hover:text-blue-700">
                Back to Main Page
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
