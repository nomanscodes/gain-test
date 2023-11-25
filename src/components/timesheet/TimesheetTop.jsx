import Button from "../Button";
const TimesheetTop = () => {
  return (
    <div className="flex items-center justify-between w-[1161px] ">
      {/* actions  */}
      <div className="flex items-center gap-[10px]">
        <Button text="New Entry" icon={true} />
        <div className="flex items-center py-2 px-5 gap-[10px] border-[0.5px] border-light bg-white rounded-[8px] cursor-pointer">
          <span className="text-sm2 font-medium leading-normal text-regular ">
            Actions
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M4.49994 7.25L8.99994 11.75L13.4999 7.25"
              stroke="#5C5D76"
              strokeWidth="1.21939"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* actions  */}
      {/* date picker  */}
      <div className="flex items-center py-2 px-[15px] gap-[15px] rounded-[20px] bg-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M9.99998 4.5L5.99998 8.5L9.99998 12.5"
            stroke="#5C5D76"
            strokeWidth="0.890756"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex items-center gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M14.25 3.5H3.75001C2.92158 3.5 2.25001 4.17157 2.25001 5V15.5C2.25001 16.3284 2.92158 17 3.75001 17H14.25C15.0784 17 15.75 16.3284 15.75 15.5V5C15.75 4.17157 15.0784 3.5 14.25 3.5Z"
              stroke="#5C5D76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2V5"
              stroke="#5C5D76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00001 2V5"
              stroke="#5C5D76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.25001 8H15.75"
              stroke="#5C5D76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 17C15.0784 17 15.75 16.3284 15.75 15.5V8H2.25001V15.5C2.25001 16.3284 2.92158 17 3.75001 17H14.25Z"
              stroke="#5C5D76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm2 font-normal leading-normal text-regular">
            {" "}
            Today
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M5.99999 12.5L9.99999 8.5L5.99999 4.5"
            stroke="#5C5D76"
            strokeWidth="0.890756"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* date picker  */}
    </div>
  );
};

export default TimesheetTop;
