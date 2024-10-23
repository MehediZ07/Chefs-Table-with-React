import React from "react";

export default function CookingItem({
  blog,
  id,
  readBlog,
  handelCooking,
  readTimeCount,
}) {
  const count = id + 1;
  return (
    <div>
      <div className="grid grid-cols-5 gap-1  mb-4">
        <p>{count}</p>
        <p>{blog.recipe_name}</p>
        <p>{blog.preparing_time}</p>
        <p>{blog.calories}</p>
        <button
          onClick={() => {
            handelCooking(blog);
            readTimeCount(blog);
          }}
          className="btn bg-green-400"
        >
          Preparing
        </button>
      </div>
    </div>
  );
}
