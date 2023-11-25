const MonthlyTimelogAnaylitics = () => {
  return (
    <div className="flex items-center gap-5">
    {/* log request  */}
      <div className="flex flex-col items-start py-[22px] px-[30px] rounded-[10px] bg-white">
        <div className="flex w-[162px] items-center gap-[10px]">
          <div className="flex items-start p-[10px] rounded-[10px] bg-yellow-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M13.2135 24.7251C19.2948 24.7251 24.2247 19.7952 24.2247 13.7139C24.2247 7.63253 19.2948 2.70264 13.2135 2.70264C7.13217 2.70264 2.20227 7.63253 2.20227 13.7139C2.20227 19.7952 7.13217 24.7251 13.2135 24.7251Z"
                stroke="#FFAB00"
                strokeWidth="1.26629"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.2135 7.10693V13.7137L17.618 15.9159"
                stroke="#FFAB00"
                strokeWidth="1.26629"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-base2 font-medium leading-normal text-yellow">
              12
            </h1>
            <span className="text-sm2 font-normal leading-normal text-light">
              Log request
            </span>
          </div>
        </div>
      </div>
      {/* leave request  */}
      <div className="flex flex-col items-start py-[22px] px-[30px] rounded-[10px] bg-white">
        <div className="flex w-[162px] items-center gap-[10px]">
          <div className="flex items-start p-[10px] rounded-[10px] bg-yellow-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M17.618 23.6238V21.4216C17.618 20.2534 17.1539 19.1331 16.3279 18.3071C15.5019 17.4811 14.3816 17.0171 13.2135 17.0171H5.50563C4.33749 17.0171 3.21718 17.4811 2.39118 18.3071C1.56518 19.1331 1.10114 20.2534 1.10114 21.4216V23.6238"
                stroke="#FFAB00"
                strokeWidth="1.26629"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.35954 12.6122C11.7921 12.6122 13.764 10.6403 13.764 8.20772C13.764 5.77518 11.7921 3.80322 9.35954 3.80322C6.92701 3.80322 4.95505 5.77518 4.95505 8.20772C4.95505 10.6403 6.92701 12.6122 9.35954 12.6122Z"
                stroke="#FFAB00"
                strokeWidth="1.26629"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.3258 12.6123H17.618"
                stroke="#FFAB00"
                strokeWidth="1.26629"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.0225 15.9155L25.3258 12.6122L22.0225 9.30879"
                stroke="#FFAB00"
                strokeWidth="1.26629"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-base2 font-medium leading-normal text-yellow">
              12
            </h1>
            <span className="text-sm2 font-normal leading-normal text-light">
              Leave request
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTimelogAnaylitics;
