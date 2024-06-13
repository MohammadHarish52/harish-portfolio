// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Home from "./components/Home";
// import Projects from "./components/Projects/Projects";
// import CustomCursor from "./components/CustomCursor";
// import { LightProvider } from "./components/LightContext";

// function App() {
//   return (
//     <LightProvider>
//       <BrowserRouter>
//         <CustomCursor />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//         </Routes>
//       </BrowserRouter>
//     </LightProvider>
//   );
// }

// export default App;
// src/App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import CustomCursor from "./components/CustomCursor";
import { LightContext, LightProvider } from "./components/LightContext";

const AppContent = () => {
  const { light } = useContext(LightContext);

  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [light]);

  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <LightProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LightProvider>
  );
}

export default App;
