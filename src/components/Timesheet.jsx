import Header from "./Header";
import TimesheetTop from "./timesheet/TimesheetTop";
import TimesheetTable from "./timesheet/TimesheetTable";
import { motion } from "framer-motion";

const Timesheet = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* timesheet top with header */}
      <div className="flex flex-col items-center gap-5 pb-5">
        <Header pageTitle="Timesheet" />
        <TimesheetTop />
      </div>
      {/* timesheet top with  header */}
      <TimesheetTable />
    </motion.div>
  );
};

export default Timesheet;
