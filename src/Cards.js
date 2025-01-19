import React from "react";
import { MdArrowOutward } from "react-icons/md";
import "./BlogGrid.css";
import { IoArrowForward } from "react-icons/io5";
import I1 from "./I1.png";
import I2 from "./I2.png";
import I3 from "./I3.png";
import I4 from "./I4.png";
import I5 from "./I5.png";
import I6 from "./I6.png";

export default function BlogGrid()  {
  const blogs = [
    {
      author: "Prabhash Mishra",
      img: I1,
      date: "1 Jan 2023 - Today",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      author: "Mahesh Kumar",
      img: I2,
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      author: "Rakhi Verma",
      img: I3,
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      author: "Karan Kumar",
      img: I4,
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      author: "Richa Singh",
      img: I5,
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "Audit"],
    },
    {
      author: "Miss Nora",
      img: I6,
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-heading">Explore Our Blogs</h2>
      <h3 className="blog-subheading">Accelerate Digital Transformation</h3>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img className="blog-image" src={blog.img} style={{height: "200px", width: "350px"}}/>
            <div className="blog-content">
              <p className="blog-author">{blog.author} • {blog.date}</p>
              <div className="title">
              <h4 className="blog-title">{blog.title}</h4>
              <MdArrowOutward className="icon"/>
              </div>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, i) => (
                  <span className="blog-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bbutton"> 
      <button className="blog-button">Show more blogs <IoArrowForward className="bicon"/></button>
      </div>
    </div>
  );
};