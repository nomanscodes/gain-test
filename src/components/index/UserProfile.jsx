const UserProfile = () => {
  return (
    <>
      <div className="flex flex-col items-center h-[766px] rounded-[10px] bg-white">
        {/* start : shade  */}
        <div className="flex w-[320px] h-[42px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="173"
            height="77"
            viewBox="0 0 173 77"
            fill="none"
          >
            <path
              opacity="0.08"
              d="M63 44C30.5 55 0 51.5 0 77V10.5C0 4.97715 4.47715 0.5 10 0.5H160.5C75.7099 0.5 103.895 30.1586 63 44Z"
              fill="#2C67FF"
            />
            <path
              opacity="0.1"
              d="M72 41.5C31.5 32 0.000826474 47.541 0 70.5V10.5C0 4.97715 4.47715 0.5 10 0.5H172.5C99.7653 0.5 125.06 53.9461 72 41.5Z"
              fill="#2C67FF"
            />
          </svg>
        </div>
        {/* end : shade  */}
        {/* start: user image and title  */}
        <div className="flex flex-col items-center gap-5 px-[30px]">
          {/* profile picture  */}
          <div>
            <img
              className="h-[80px] w-[80px] rounded-full"
              src="/img/user.png"
            />
          </div>
          {/* profile picture  */}
          {/* name and degignation  */}
          <div className=" flex flex-col items-center">
            <h1 className="text-base1 font-medium leading-normal text-secondary">
              Katarina Nilson (You)
            </h1>
            <p className="text-sm2 leading-normal font-normal text-light">
              Laravel developer
            </p>
          </div>
          {/* profile picture  */}
        </div>
        {/* start: user image and title  */}
        {/* daily timelog  */}
        <div className="flex flex-col items-start py-5 px-[30px] gap-5">
          <div className="flex flex-col items-center">
            <h1 className="text-sm2 font-medium leading-normal text-dark">
              Daily Timelog
            </h1>
            <div className="flex items-center gap-[30px] justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="2"
                viewBox="0 0 80 2"
                fill="none"
              >
                <path
                  d="M0 1.5L79.9973 0.838866"
                  stroke="#D8E0ED"
                  strokeDasharray="3 3"
                />
              </svg>
              <p className="text-sm font-normal leading-normal text-light">
                Today
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="2"
                viewBox="0 0 80 2"
                fill="none"
              >
                <path
                  d="M0 1.5L79.9973 0.838866"
                  stroke="#D8E0ED"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
          </div>
          {/* time scheduled  */}
          <div className="flex flex-col justify-center items-start gap-5">
            <div className="flex items-start">
              <div className="flex flex-col justify-center">
                <h1 className="text-sm2 font-medium leading-normal text-regular w-[130px] h-[18px] flex justify-center ">
                  08h
                </h1>
                <p className="text-xs leading-normal font-normal text-light w-[130px] h-[15px] flex justify-center">
                  Scheduled
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-sm2 font-medium leading-normal text-regular w-[130px] h-[18px] flex justify-center ">
                  06h 30m
                </h1>
                <p className="text-xs leading-normal font-normal text-light w-[130px] h-[15px] flex justify-center">
                  Approved
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex flex-col justify-center">
                <h1 className="text-sm2 font-medium leading-normal text-regular w-[130px] h-[18px] flex justify-center ">
                  07h 30m
                </h1>
                <p className="text-xs leading-normal font-normal text-light w-[130px] h-[15px] flex justify-center">
                  Loged
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-sm2 font-medium leading-normal text-regular w-[130px] h-[18px] flex justify-center ">
                  -00h 30m
                </h1>
                <p className="text-xs leading-normal font-normal text-light w-[130px] h-[15px] flex justify-center">
                  Balance
                </p>
              </div>
            </div>
          </div>
          {/* time scheduled  */}
        </div>
        {/* daily timelog  */}
        {/* project log  */}
        <div className="flex flex-col items-start py-5 px-[30px] gap-5 ">
          <div className="flex flex-col items-center">
            <h1 className="text-sm2 font-medium leading-normal text-dark">
              Project Log
            </h1>
            <div className="flex items-center gap-[30px] justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="2"
                viewBox="0 0 80 2"
                fill="none"
              >
                <path
                  d="M0 1.5L79.9973 0.838866"
                  stroke="#D8E0ED"
                  strokeDasharray="3 3"
                />
              </svg>
              <p className="text-sm font-normal leading-normal text-light">
                Recent
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="2"
                viewBox="0 0 80 2"
                fill="none"
              >
                <path
                  d="M0 1.5L79.9973 0.838866"
                  stroke="#D8E0ED"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center p-[15px] bg-yellow-light rounded-[10px]">
              <div className="w-[230px]">
                <h1 className="text-sm2 font-medium leading-normal text-regular">
                  Unite Living
                </h1>
                <p className="text-sm font-normal leading-normal text-light">
                  102h 30m loged.
                </p>
              </div>
            </div>
            <div className="flex items-center p-[15px] bg-gray-light rounded-[10px]">
              <div className="w-[230px]">
                <h1 className="text-sm2 font-medium leading-normal text-regular">
                Pipex - CRM Solutions 
                </h1>
                <p className="text-sm font-normal leading-normal text-light">
                80h 30m loged.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project log  */}
      </div>
    </>
  );
};

export default UserProfile;
