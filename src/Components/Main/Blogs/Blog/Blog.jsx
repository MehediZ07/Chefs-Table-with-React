import React, { useState } from "react";

export default function Blog({ blog, handelBookmark, readBlog }) {
  const [value, setValue] = useState(false);
  function values() {
    setValue(true);
  }

  const [read, setRead] = useState(false);
  function readDone() {
    setRead(true);
  }

  return (
    <div>
      <div class="card bg-base-100 min-h-[820px] shadow-xl">
        <div class="px-10 pt-10 h-[240px] w-full mb-6">
          <img
            className="rounded-xl h-[240px] w-full object-cover"
            src={blog.recipe_image}
            alt="Shoes"
          />
        </div>
        <div class="card-body ">
          <div className=" p-4  rounded-xl space-y-6">
            <h2 className="text-2xl font-bold">{blog.recipe_name}</h2>
            <h2 className="text-xl font-semibold text-gray-600">
              {blog.short_description}
            </h2>
            <hr />
            <div>
              <h2 className="text-xl font-bold">Ingredients:</h2>
              <ul className="ml-8 mt-4">
                {blog.ingredients.map((item, index) => (
                  <li className="list-disc" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="flex gap-8 text-xl">
              <h2>
                <span className="font-bold">
                  <i class="fa-regular fa-clock"></i>
                </span>{" "}
                {blog.preparing_time}
              </h2>
              <h2>
                <span className="font-200">
                  <i class="fa-solid fa-fire"></i>
                </span>{" "}
                {blog.calories}
              </h2>
            </div>
            <div className="font-bold flex justify-between items-center">
              <button
                // disabled={!value}
                onClick={() => {
                  handelBookmark(blog);
                  values();
                }}
                className={`text-lg btn bg-green-400 rounded-full${
                  !value ? "text-gray-800 " : "text-gray-800  font-bold"
                } ${
                  !read ? "text-gray-800 font-bold" : "text-gray-800  font-bold"
                }`}
              >
                Want To Cook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
