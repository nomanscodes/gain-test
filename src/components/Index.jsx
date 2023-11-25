import Header from "./Header";
import LeaveOverview from "./index/LeaveOverview";
import MonthlyTimelog from "./index/MonthlyTimelog";
import MonthlyTimelogAnaylitics from "./index/MonthlyTimelogAnaylitics";
import UserProfile from "./index/UserProfile";
import WellcomeNote from "./index/WellcomeNote";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header pageTitle="Dashboard"/>
      {/* start : content  */}
      <div className="flex gap-5 mt-[30px]">
        <div className=" flex flex-col items-start gap-5">
          <WellcomeNote />
          <div className="flex gap-5">
            <LeaveOverview />
            <div className="flex flex-col items-start gap-5">
              <MonthlyTimelog />
              <MonthlyTimelogAnaylitics />
            </div>
          </div>
        </div>
        <div className="">
          <UserProfile />
        </div>
      </div>
      {/* end : content  */}
    </motion.div>
  );
};

export default Home;
