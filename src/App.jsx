// import React from "react";
import Bgcard from "./components/Bgcard";
import Fgcard from "./components/Fgcard";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="relative w-full h-screen  bg-zinc-800">
      <Bgcard />
      <Fgcard msg={toast} />
      <ToastContainer />
    </div>
  );
}

export default App;
