import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      image: "/assets/img/blog/1.jpg",
      date: "Aug 3, 2024",
      title: "Old unsatiable our now",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "John Doe",
      comments: 2,
      icon: "fas fa-images",
    },
    {
      image: "/assets/img/blog/2.jpg",
      date: "Aug 3, 2024",
      title: "Ecstatic elegance gay but disposed",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "John Doe",
      comments: 2,
      icon: "fas fa-video",
    },
    {
      image: "/assets/img/blog/3.jpg",
      date: "Aug 3, 2024",
      title: "Prepared do an dissuade",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "John Doe",
      comments: 2,
      icon: "fas fa-images",
    },
    {
      image: "/assets/img/blog/4.jpg",
      date: "Aug 2, 2024",
      title: "Building the Future",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "Jane Smith",
      comments: 5,
      icon: "fas fa-images",
    },
    {
      image: "/assets/img/blog/1.jpg",
      date: "Aug 1, 2024",
      title: "Modern Construction Techniques",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "Robert Johnson",
      comments: 3,
      icon: "fas fa-video",
    },
    {
      image: "/assets/img/blog/2.jpg",
      date: "Jul 30, 2024",
      title: "Sustainable Building Practices",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "John Doe",
      comments: 4,
      icon: "fas fa-images",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-dark text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading">Our Blog</h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">Home / Blog</p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading">
              Recent Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Able an hope of body. Any nay shyness article matters own removal
              nothing his forming. Gay own additions education satisfied the
              perpetual. If he cause manor happy. Without farther she exposed
              saw man led. Along on happy could cease green oh.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition">
                    <i
                      className={`${post.icon} text-white text-3xl opacity-0 group-hover:opacity-100 transition`}
                    ></i>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h4 className="text-xl font-bold mt-2 mb-3 font-heading">
                    <a href="#" className="hover:text-primary transition">
                      {post.title}
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>
                      <i className="fas fa-user mr-2"></i>
                      {post.author}
                    </span>
                    <span>
                      <i className="fas fa-comments mr-2"></i>
                      {post.comments} Comments
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
