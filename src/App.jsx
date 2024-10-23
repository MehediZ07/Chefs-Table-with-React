import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Blogs from "./Components/Main/Blogs/Blogs.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={"flex flex-col max-w-[1850px] mx-auto space-y-6"}>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
