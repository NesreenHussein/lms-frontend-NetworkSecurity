import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer.jsx";
import { Outlet } from "react-router-dom";

import "./style/App.css";

function App() {
  return(

    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
