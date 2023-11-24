const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        {/* start : page name  */}
        <p className="text-base2 font-medium text-regular capitalize">
          Dashboard
        </p>
        {/* end : page name  */}
        {/* start : search field  */}
        <div className="flex items-center rounded-[30px] bg-white border-[0.5px] border-gray pt-[8px] pl-[15px] pb-[8.5px] pr-[20px]">
          <input
            className="w-[212px] text-sm2 font-normal text-light bg-none border-none focus:outline-none"
            placeholder="Search employee"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M11 19.75C15.4183 19.75 19 16.1683 19 11.75C19 7.33172 15.4183 3.75 11 3.75C6.58172 3.75 3 7.33172 3 11.75C3 16.1683 6.58172 19.75 11 19.75Z"
              stroke="#8D91A5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21.7499L16.65 17.3999"
              stroke="#8D91A5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* end : search field  */}
      </div>
    </>
  );
};

export default Header;
