import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    // Function to handle screen resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Apply mobile-specific styles or actions
        document.body.classList.add("mobile");
      } else {
        // Apply desktop-specific styles or actions
        document.body.classList.remove("mobile");
      }
    };

    // Call the function initially to set up the correct styles on load
    handleResize();

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reports">
            <Route index element={<Single />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
