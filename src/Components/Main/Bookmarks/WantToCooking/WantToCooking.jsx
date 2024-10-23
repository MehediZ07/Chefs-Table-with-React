import React from "react";
import CookingItem from "./CookingItem/CookingItem.jsx";

export default function WantToCooking({
  bookmark,
  readBlog,
  handelCooking,
  readTimeCount,
}) {
  console.log(bookmark);
  return (
    <div className="  p-4 rounded-xl space-y-4">
      <h1 className="text-2xl text-center font-bold">
        Want to cook: {bookmark.length}
      </h1>
      <hr />
      <div>
        <div className="grid grid-cols-5  mb-4">
          <p></p>
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
          <button></button>
        </div>
        {bookmark.map((blog, id) => (
          <CookingItem
            key={id}
            blog={blog}
            readBlog={readBlog}
            id={id}
            handelCooking={handelCooking}
            readTimeCount={readTimeCount}
          ></CookingItem>
        ))}
        <hr />
      </div>
    </div>
  );
}
