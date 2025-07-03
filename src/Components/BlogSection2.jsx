import React from "react";
import { ChevronRight } from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import avatar1 from "../assets/profile_pic/Avatar1.png";
import avatar2 from "../assets/profile_pic/Avatar2.png";
import avatar3 from "../assets/profile_pic/Avatar3.png";
import img1 from "../assets/blog2pic1.png";
import img2 from "../assets/blog2pic2.png";
import img3 from "../assets/blog2pic3.png";

export const BlogSection2 = () => {
  const testimonials = [
    {
      info: {
        content: "Design",
        title: "UX review presentations",
        desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      },
      user: {
        name: "Nikolas Gibbons",
        title: "Product Designer, Powersurge",
        avatar: avatar1,
      },
    },
    {
      info: {
        content: "Product",
        title: "Migrating to Linear 101",
        desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      },
      user: {
        name: "Ammar Foley",
        title: "UX Designer, Goodwell",
        avatar: avatar2,
      },
    },
    {
      info: {
        content: "Software Engineering",
        title: "Building your API stack",
        desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      },
      user: {
        name: "Mathilde Lewis",
        title: "Project Lead, Stack3d Lab",
        avatar: avatar3,
      },
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto pb-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
        <div
          className="flex w-full justify-center lg:justify-start"
          data-aos="fade-right"
        >
          <div className="bg-[#181d27] flex justify-center text-[#FFFFFF] px-6 py-2.5 rounded-xl text-[16px] font-medium">
            Blog News
          </div>
        </div>

        <div
          className="w-full lg:w-auto flex justify-center"
          data-aos="fade-left"
        >
          <button className="bg-[#c23521] text-[#FFFFFF] w-40 py-1 sm:w-44 sm:px-4 sm:py-2 rounded-xl flex justify-center items-center hover:bg-[#a12e1c] transition-colors text-[16px] font-medium">
            View all projects
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
        <div
          className="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-[#FFFFFF]  text-3xl sm:text-4xl md:text-4xl font-bold leading-tight max-w-3xl text-center sm:text-left">
            Lastest blog posts
          </h2>
          <p className="text-[#FFFFFF]  text-[18px] sm:text-[20px] md:text-[23px] leading-relaxed max-w-3xl text-center">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {[img1, img2, img3].map((img, i) => (
          <div
            className="group flex flex-col h-full"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-[#4641b5] font-medium text-lg mb-2">
              {testimonials[i].info.content}
            </h3>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[#FFFFFF]  text-[20px] font-semibold">
                {testimonials[i].info.title}
              </h2>
              <MdOutlineArrowOutward className="text-white text-xl" />
            </div>
            <p className="text-[#FFFFFF]  text-[16px] sm:text-[18px] leading-relaxed mb-4">
              {testimonials[i].info.desc}
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <img
                src={testimonials[i].user.avatar}
                alt={testimonials[i].user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="text-[#FFFFFF]  font-medium text-sm">
                    {testimonials[i].user.name}
                  </span>
                </div>
                <p className="text-[#FFFFFF]  text-xs">
                  {testimonials[i].user.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { ChevronRight } from "lucide-react";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import axios from "axios";

// export const BlogSection2 = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed")
//       .then((res) => {
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching posts:", err);
//       });
//   }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto pb-16">
//       {/* Header Section */}
//       <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
//         <div className="bg-[#181d27] text-white px-6 py-2 rounded-full text-[16px] font-medium" data-aos="fade-right">
//           Blog News
//         </div>
//         <div className="w-full lg:w-auto flex justify-center" data-aos="fade-left">
//           <button className="bg-[#c23521] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-[#a12e1c] transition-colors text-[16px] font-medium">
//             View all posts <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
//         <div className="flex flex-col gap-4" data-aos="fade-up">
//           <h2 className="text-white text-3xl sm:text-4xl font-bold text-center sm:text-left">Latest blog posts</h2>
//           <p className="text-white/80 text-lg text-center sm:text-left">
//             Tools and strategies modern teams need to grow.
//           </p>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
//         {posts.map((post, i) => (
//           <div
//             key={post.id}
//             className="group flex flex-col h-full"
//             data-aos="fade-up"
//             data-aos-delay={i * 100}
//           >
//             {/* Featured Image */}
//             {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
//               <div className="relative overflow-hidden rounded-2xl mb-4">
//                 <img
//                   src={post._embedded["wp:featuredmedia"][0].source_url}
//                   alt={post.title.rendered}
//                   className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//             )}

//             {/* Category */}
//             <h3 className="text-[#4641b5] font-medium text-lg mb-2">Category</h3>

//             {/* Title & Arrow */}
//             <div className="flex items-center justify-between mb-2">
//               <h2
//                 className="text-white text-[20px] font-semibold"
//                 dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//               />
//               <MdOutlineArrowOutward className="text-white text-xl" />
//             </div>

//             {/* Excerpt */}
//             <p
//               className="text-white text-[16px] sm:text-[18px] leading-relaxed mb-4"
//               dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
//             />

//             {/* Author */}
//             <div className="flex items-center gap-3 mt-auto">
//               <img
//                 src={`https://ui-avatars.com/api/?name=${post._embedded?.author?.[0]?.name || "Author"}`}
//                 alt={post._embedded?.author?.[0]?.name || "Author"}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="flex-1">
//                 <div className="flex items-center gap-1">
//                   <span className="text-white font-medium text-sm">
//                     {post._embedded?.author?.[0]?.name || "Author"}
//                   </span>
//                 </div>
//                 <p className="text-white text-xs">Blog Contributor</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
