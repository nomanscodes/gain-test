import SideBar from "./components/SideBar";
import Index from "./components/Index";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="ml-[236px] py-[30px] px-[35px]">
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
