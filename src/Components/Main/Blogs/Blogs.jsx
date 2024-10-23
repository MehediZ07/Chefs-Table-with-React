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
            <h1 class="text-5xl font-bold">Hello Foodies</h1>
            <p class="py-6">
              Cooking is an art, a joyful exploration of flavors and techniques.
              Foodies celebrate this passion, experimenting with ingredients,
              sharing experiences, and discovering new culinary delights that
              ignite their taste buds. Join a vibrant community celebrating the
              joy of cooking! Share recipes, explore global cuisines, and
              discover hidden gems. Unleash your creativity and ignite your
              passion for delicious food!
            </p>
            <button class="btn bg-green-400 text-gray-800 text-xl font-bold border-none">
              Get Started Cooking
            </button>
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
      <div className="pt-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="grid md:grid-cols-2 gap-4 md:col-span-2">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handelBookmark={handelBookmark}
              readBlog={readBlog}
            ></Blog>
          ))}
        </div>
        <div className="grid md:col-span-2 xl:col-span-1">
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
