const WellcomeNote = () => {
  return (
    <div className="w-full flex items-center justify-between p-[30px] rounded-[10px] bg-white">
      {/* start : wellcome messsage  */}
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-lg font-semibold capitalize text-secondary leading-normal">
          Welcome back Katarina
        </h1>
        <p className="text-sm2 leading-normal font-normal text-light">
          Let’s start your day ☕
        </p>
      </div>
      {/* end : wellcome messsage  */}
      {/* start : button action  */}
      <div className="flex items-center justify-end gap-[10px] ">
        {/* start: new entry button  */}
        <button className="flex items-center gap-[10px] py-2 px-5 rounded-[8px] bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M9 4.25V14.75"
              stroke="white"
              strokeWidth="1.21939"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.74994 9.5H14.2499"
              stroke="white"
              strokeWidth="1.21939"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white text-sm2 leading-normal font-medium">
            New entry
          </span>
        </button>
        {/* end : new entry button  */}
        {/* start: timer button  */}
        <button className="flex items-center py-2 px-5 gap-[10px] rounded-[8px] border-[0.5px] border-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M3.75 2.75L14.25 9.5L3.75 16.25V2.75Z"
              stroke="#8D91A5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm2 font-medium leading-normal text-regular ">
            New entry
          </span>
        </button>
        {/* end: timer button  */}
      </div>
      {/* end : button action  */}
    </div>
  );
};

export default WellcomeNote;
