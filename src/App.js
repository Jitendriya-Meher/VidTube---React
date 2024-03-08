import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";

function App() {

  const [ sidebar, setSidebar] = useState(true);

  // console.log("sidebar",sidebar);

  return (
    <div className="">

      <Navbar setSidebar={setSidebar}></Navbar>

      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}></Home>}></Route>
        <Route path="/video/:categoryId/:videoId" element={<Video></Video>}></Route>
      </Routes>

    </div>
  );
}

export default App;
