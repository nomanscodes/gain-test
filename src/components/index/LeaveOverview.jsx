const LeaveOverview = () => {
  return (
    <div className="flex flex-col items-start gap-[30px] pt-[30px] pl-[30px] pb-[41px] pr-[30px] bg-white rounded-[10px]">
      {/* start : leave overview top  */}
      <div className="flex flex-col items-start">
        <h1 className="text-base1 font-medium leading-normal text-dark">
          Leave overview
        </h1>
        <p className="text-sm1 leading-normal font-normal text-light">
          This Year
        </p>
      </div>
      {/* end : leave overview top  */}
      {/* start: data  */}
      <div className="grid grid-cols-2 gap-4">
        {/* start : data box  */}
        <div className="inline-flex items-center justify-center pt-[40px] pl-6 pb-5 pr-6 rounded-[10px] bg-primary-light relative mb-4">
          <div className="absolute p-2 rounded-[30px] bg-primary top-0 -mt-[20px] border-[5px] border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M15.2291 17.1837L14.321 8.95663L16.787 6.46204C18.1615 5.08747 18.6197 3.25471 18.1615 2.33833C17.2452 1.88014 15.4124 2.33833 14.0378 3.7129L11.2346 6.18712L3.31617 5.27074C2.85798 5.1791 2.49143 5.36238 2.30815 5.72893L2.03324 6.18712C1.84996 6.64531 1.9416 7.1035 2.30815 7.37842L7.53088 10.1912L5.33221 13.3349H2.58307L1.66669 14.2513L4.41583 16.084L6.24859 18.8332L7.16497 17.9168V15.1676L10.3087 12.969L13.1214 18.1917C13.3964 18.5583 13.8545 18.6499 14.3127 18.4666L14.7709 18.2833C15.1375 18.0084 15.3208 17.6419 15.2291 17.1837Z"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="w-auto h-[27px] flex items-center justify-center text-lg font-semibold leading-normal capitalize text-regular">
              25d
            </h1>
            <p className="text-sm2 font-normal leading-normal text-light text-center">
              Total
            </p>
          </div>
        </div>
        {/* end : data box  */}
        {/* start : data box  */}
        <div className="inline-flex items-center justify-center pt-[40px] pl-6 pb-5 pr-6 rounded-[10px] bg-gray-light relative mb-4">
          <div className="absolute p-2 rounded-[30px] bg-gray top-0 -mt-[20px] border-[5px] border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M15 5.5L5 15.5"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 5.5L15 15.5"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="w-auto h-[27px] flex items-center justify-center text-lg font-semibold leading-normal capitalize text-regular">
              25d 4h
            </h1>
            <p className="text-sm2 font-normal leading-normal text-light text-center">
              Taken
            </p>
          </div>
        </div>
        {/* end : data box  */}
        {/* start : data box  */}
        <div className="inline-flex items-center justify-center pt-[40px] pl-6 pb-5 pr-6 rounded-[10px] bg-blue-light relative mb-4">
          <div className="absolute p-2 rounded-[30px] bg-blue top-0 -mt-[20px] border-[5px] border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M16.6666 5.5L7.49998 14.6667L3.33331 10.5"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="w-auto h-[27px] flex items-center justify-center text-lg font-semibold leading-normal capitalize text-regular">
              12d 4h
            </h1>
            <p className="text-sm2 font-normal leading-normal text-light text-center">
              Balance
            </p>
          </div>
        </div>
        {/* end : data box  */}
        {/* start : data box  */}
        <div className="inline-flex items-center justify-center pt-[40px] pl-6 pb-5 pr-6 rounded-[10px] bg-yellow-light relative mb-4">
          <div className="absolute p-2 rounded-[30px] bg-yellow top-0 -mt-[20px] border-[5px] border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M15.8333 3.8335H4.16667C3.24619 3.8335 2.5 4.57969 2.5 5.50016V17.1668C2.5 18.0873 3.24619 18.8335 4.16667 18.8335H15.8333C16.7538 18.8335 17.5 18.0873 17.5 17.1668V5.50016C17.5 4.57969 16.7538 3.8335 15.8333 3.8335Z"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 2.1665V5.49984"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66669 2.1665V5.49984"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 8.8335H17.5"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 18.8335C16.7538 18.8335 17.5 18.0873 17.5 17.1668V8.8335H2.5V17.1668C2.5 18.0873 3.24619 18.8335 4.16667 18.8335H15.8333Z"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="w-[80px] h-[27px] flex items-center justify-center text-lg font-semibold leading-normal capitalize text-regular">
              02d
            </h1>
            <p className="text-sm2 font-normal leading-normal text-light text-center">
              Earning
            </p>
          </div>
        </div>
        {/* end : data box  */}
      </div>
      {/* End: data  */}
    </div>
  );
};

export default LeaveOverview;
