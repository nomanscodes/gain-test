import SideBar from "./components/SideBar";
import Index from "./components/Index";
import Timesheet from "./components/Timesheet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        {/* w-[1440px] m-auto */}
        <div className="flex items-start">
          <div>
            <SideBar />
          </div>
          <div className="ml-[236px] py-[30px] px-[35px]">
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/timesheet" element={<Timesheet />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
