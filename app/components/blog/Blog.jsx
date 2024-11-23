import { Grid } from "@mui/material";
import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    image: "../assets/blogpost1.png",
    title: "Navigating the World of Telehealth: A Guide to Virtual Healthcare",
    description:
      "Shedding light on the rapidly evolving landscape of virtual medical consultations.",
    date: "21 Feb, 2024",
    link: "/blog/navigatin-the-world-of-telehealth",
  },
  {
    id: 2,
    image: "../assets/blogpost2.png",
    title: "Mindfulness in Medicine: Integrating Meditation and Wellness Practices",
    description:
      "Delve into growing trends of incorporating mindfulness into medical routines.",
    date: "21 Feb, 2024",
    link: "/blog/integrating-medication-and-wellness-practices",
  },
  {
    id: 3,
    image: "../assets/blogpost3.png",
    title: "The Role of Nutrition in Mental Health: Exploring the Gut-Brain Connection",
    description:
      "Investigate the intricate relationship between nutrition and mental well-being.",
    date: "21 Feb, 2024",
    link: "/blog/the-role-of-nutrition-in-mental-health",
  },
];

export const Blog = () => {
  const shuffledPosts = [...blogPosts, ...blogPosts, ...blogPosts];
  shuffledPosts.sort(() => Math.random() - 0.5);

  return (
    <>
      <main className="blog">
        <div className="hero-section container">
          <p>Our Blog</p>
          <h1>Stay Informed and Empowered</h1>
          <h6>
            Explore our regularly updated blog for insightful articles on a wide range of health and
            wellness topics. We cover everything from nutrition and fitness tips to mental health
            strategies and medical breakthroughs.
          </h6>
        </div>
      </main>
      <main className="blog-cont container">
        <h3>Recent blog posts</h3>
        <Grid container spacing={4}>
          {shuffledPosts.map((post) => (
            <Grid item xs={12} md={4} sm={4} key={post.id}>
              <div className="blog-post">
                <Link href={post.link}>
                  <img
                    src={post.image}
                    alt="Blog post"
                    style={{
                      filter: "grayscale(100%)",
                    }}
                  />
                  <div className="blogpost">
                    <h4>{post.title}</h4>
                    <h6>{post.description}</h6>
                  </div>
                </Link>
                <span>{post.date}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};
