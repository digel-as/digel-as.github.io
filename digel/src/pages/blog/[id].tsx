// pages/blog/[id].tsx
import React from "react";
import config from "../../config/index.json";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <p>Post not found!</p>;
  }
  const post = config.blog.posts[+id]; // Convert id to number and access the post
  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <article className="bg-backgroundMedium text-primary min-h-screen">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.title}`} />
      </Head>
      <div className="relative w-full h-screen-50">
        <Image
          src={post.img}
          alt={post.title}
          layout="fill"
          priority
          objectFit="cover"
        />
      </div>
      <div className="px-8 sm:px-12 md:px-16 lg:px-32 xl:px-64 py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.sections.map((section, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-2">{section.content}</p>
          </div>
        ))}
        <div className="mt-8 text-let">
          <Link href="/#latest-news">
            <a className="text-lg text-accent hover:text-blue-700">
              Back to Main Page
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;