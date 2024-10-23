import React from "react";

export default function BookmarkBlog({ blog, id }) {
  const count = id + 1;
  return (
    <div className=" p-4  rounded-xl">
      <div className="grid grid-cols-5 gap-2  mb-4">
        <p>{count}</p>
        <p className="col-span-2 -ml-3">{blog.recipe_name}</p>
        <p>{blog.preparing_time}</p>
        <p>{blog.calories}</p>
      </div>
    </div>
  );
}
