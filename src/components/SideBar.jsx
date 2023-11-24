import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const currentPath = useLocation();
  const pathName = currentPath.pathname;

  return (
    <>
      <div className="w-[236px] h-[100vh] bg-white fixed">
        {/* start:logo  */}
        <div className="h-[87px] bg-bg-light flex items-center justify-center relative">
          <picture>
            <img src="/icon/Logo.svg" />
          </picture>
          {/* start: collapse arrow  */}
          <div className="absolute bg-white inline-flex p-[8px] rounded-full shadow right-0 -mr-[16px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11.25 4.5L6.75 9L11.25 13.5"
                stroke="#5C5D76"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* end:  collapse arrow  */}
        </div>
        {/* end:logo  */}

        {/* start: link  */}
        <div className="flex flex-col items-start pt-[10px] gap-[8px]">
          <Link
            className="flex items-center justify-center gap-[10px] py-[10px] px-[30px]"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M20.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V15C2.5 16.1046 3.39543 17 4.5 17H20.5C21.6046 17 22.5 16.1046 22.5 15V5C22.5 3.89543 21.6046 3 20.5 3Z"
                fill={`${pathName === "/" ? `#2C67FF` : `none`} `}
                stroke={`${pathName === "/" ? `#2C67FF` : `#5C5D76`}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 21H16.5"
                stroke={`${pathName === "/" ? `#2C67FF` : `#5C5D76`}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 17V21"
                stroke={`${pathName === "/" ? `#2C67FF` : `#5C5D76`}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className={`text-sm2 font-medium ${
                pathName === "/" ? `text-primary` : `text-regular`
              } `}
            >
              Dashboard
            </span>
          </Link>
          <Link
            className="flex items-center justify-center gap-[10px] py-[10px] px-[30px]"
            to="/about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                stroke={`${pathName === "/about" ? `#2C67FF` : `#5C5D76`}`}
                fill={`${pathName === "/about" ? `#2C67FF` : `none`} `}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 6V12L16.5 14"
                stroke={`${pathName === "/about" ? `#fff` : `#5C5D76`}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className={`text-sm2 font-medium ${
                pathName === "/about" ? `text-primary` : `text-regular`
              } `}
            >
              Timesheet
            </span>
          </Link>
        </div>
        {/* end: link  */}
      </div>
    </>
  );
};

export default SideBar;
