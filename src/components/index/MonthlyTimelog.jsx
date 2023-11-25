import ReactApexChart from "react-apexcharts";
import { ScheduledOptions, LoggedOptions } from "../../../utils/schedule";

const MonthlyTimelog = () => {
  const ScheduledSeries = [60];
  const LoggedSeries = [60];

  return (
    <>
      <div className="flex flex-col items-start gap-[30px] p-[30px] rounded-[10px] bg-white">
        <div className="flex flex-col items-start">
          <h1 className="text-base1 font-medium leading-normal text-dark">
            Monthly timelog
          </h1>
          <p className="text-sm1 leading-normal font-normal text-light">
            This month
          </p>
        </div>
        <div className="flex items-start gap-[44px]">
          <div className="flex flex-col items-center gap-5">
            <div className=" h-[100px]">
              <ReactApexChart
                options={ScheduledOptions}
                series={ScheduledSeries}
                type="radialBar"
                height={240}
                width={180}
              />
            </div>
            <div className="flex flex-col items-start gap-[5px] w-full">
              <div className="flex items-centeer gap-[5px]">
                <div className="flex items-center gap-1 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <circle cx="6.5" cy="6.5" r="6" fill="#FF834D" />
                  </svg>
                  <span className="w-[70px] text-sm font-medium leading-normal text-light">
                    Loged:
                  </span>
                </div>
                <span className="text-sm font-medium leading-normal text-regular whitespace-nowrap">
                  105h 52m
                </span>
              </div>
              <div className="flex items-centeer gap-[5px]">
                <div className="flex items-center gap-1 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      fill="#FFE7D5"
                      stroke="#FF834D"
                    />
                  </svg>
                  <span className="w-[70px] text-sm font-medium leading-normal text-light">
                    Balence:
                  </span>
                </div>
                <span className="text-sm font-medium leading-normal text-regular whitespace-nowrap">
                  132h
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <div className="h-[100px]">
              <ReactApexChart
                options={LoggedOptions}
                series={LoggedSeries}
                type="radialBar"
                height={240}
                width={180}
              />
            </div>

            <div className="flex flex-col items-end w-full">
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-centeer gap-[5px]">
                  <div className="flex items-center gap-1 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <circle cx="6.5" cy="6.5" r="6" fill="#44A9F1" />
                    </svg>
                    <span className="w-[70px] text-sm font-medium leading-normal text-light">
                      Approved:
                    </span>
                  </div>
                  <span className="text-sm font-medium leading-normal text-regular whitespace-nowrap">
                    105h 52m
                  </span>
                </div>
                <div className="flex items-centeer gap-[5px]">
                  <div className="flex items-center gap-1 w-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="5.5"
                        fill="none"
                        stroke="#44A9F1"
                      />
                    </svg>
                    <span className="w-[70px] text-sm font-medium leading-normal text-light">
                      Pending:
                    </span>
                  </div>
                  <span className="text-sm font-medium leading-normal text-regular whitespace-nowrap">
                    98h 52m
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyTimelog;
