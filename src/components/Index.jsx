import Header from "./Header";
import LeaveOverview from "./LeaveOverview";
import WellcomeNote from "./WellcomeNote";
import MonthlyTimelog from "./MonthlyTimelog";
import MonthlyTimelogAnaylitics from "./MonthlyTimelogAnaylitics";
import UserProfile from "./UserProfile";
const Home = () => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default Home;
