import React, { useEffect, useState } from "react";
import Bookmark from "../Bookmarks/Bookmark.jsx";
import Blog from "./Blog/Blog.jsx";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [bookmark, setBookmark] = useState([]);

  const handelBookmark = (blog) => {
    if (!bookmark.some((data) => data.recipe_id === blog.recipe_id)) {
      setBookmark([...bookmark, blog]);
    }
    console.log(bookmark.length);
  };

  const [timeCount, setTimeCount] = useState(0);
  const [cooking, setCooking] = useState([]);

  const handelCooking = (blog) => {
    setCooking([...cooking, blog]);
    console.log(bookmark.length);
    readBlog(blog);
  };

  const readBlog = (read) => {
    const remainingBookmarks = bookmark.filter(
      (mark) => mark.recipe_id !== read.recipe_id
    );
    setBookmark(remainingBookmarks);
    readTimeCount(read.id);
  };

  const readTimeCount = (id) => {
    const time = bookmark.find((mark) => mark.id == id);
    setTimeCount(timeCount + time.reading_time);
  };

  return (
    <div>
      <div class="hero h-[550px] object-cover rounded-xl bg-opacity-70 bg-[url('https://nextrestaurants.com/wp-content/uploads/2018/08/restaurant-marketing-5star-dining-1140x676.png')]">
        <div class="hero-content text-center">
          <div class="max-w-[70%]">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="py-12 space-y-4 text-center w-[60%] mx-auto">
        <h1 className="text-5xl font-bold text-center">Our Recipes</h1>
        <p>
          Cooking is an art that combines creativity and technique, transforming
          simple ingredients into delicious meals that nourish and delight.
          Enjoy!
        </p>
      </div>
      <div className="pt-4 md:grid md:grid-cols-3 gap-4">
        <div className="grid grid-cols-2 gap-4 col-span-2">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handelBookmark={handelBookmark}
              readBlog={readBlog}
            ></Blog>
          ))}
        </div>
        <div>
          <Bookmark
            cooking={cooking}
            handelCooking={handelCooking}
            readBlog={readBlog}
            bookmark={bookmark}
            timeCount={timeCount}
          ></Bookmark>
        </div>
      </div>
    </div>
  );
}
