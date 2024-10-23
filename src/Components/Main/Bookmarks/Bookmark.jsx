import React, { useState } from "react";
import BookmarkBlog from "./BookmarkBlog/BookmarkBlog";
import WantToCooking from "./WantToCooking/WantToCooking";

export default function Bookmark({
  bookmark,
  timeCount,
  readBlog,
  handelCooking,
  cooking,
}) {
  const [totalTime, setTotalTime] = useState(0);
  const [totalCal, setTotalCal] = useState(0);
  const readTimeCount = (blog) => {
    setTotalTime(totalTime + blog.preparing_time);
    setTotalCal(totalCal + blog.calories);
  };

  return (
    <div className="bg-yellow-50 bg-opacity-30 mt-6 border-2 solid border-yellow-400 p-4 rounded-xl space-y-4">
      <div>
        <WantToCooking
          handelCooking={handelCooking}
          readBlog={readBlog}
          bookmark={bookmark}
          readTimeCount={readTimeCount}
        ></WantToCooking>
      </div>

      <div>
        <h1 className="text-2xl text-center font-bold m-6">
          Currently cooking: {cooking.length}
        </h1>
        <div className="space-y-4 bt-4">
          <div className="grid grid-cols-5  mb-4">
            <p></p>
            <p className="col-span-2">Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          <div>
            {cooking.map((blog, id) => (
              <BookmarkBlog id={id} key={id} blog={blog}></BookmarkBlog>
            ))}
          </div>
          <div className="grid grid-cols-5  mb-4">
            <p></p>
            <p></p>
            <p></p>
            <p className="-ml-6">
              Total Time <br /> = {totalTime} min
            </p>
            <p className="sm:-ml-6">
              Total Calories <br /> = {totalCal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
