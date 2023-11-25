/* eslint-disable react/prop-types */

const DetailsModal = ({ detailsModal, setDetailsModal }) => {
  const closeModal = () => {
    setDetailsModal(false);
  };

  return (
    <>
      {/* Black transparent div with animation */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#000] bg-opacity-30 transition-all duration-500 ${
          detailsModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeModal}
      ></div>
      {/* Black transparent div with animation */}
      {/* Modal */}
      <div
        className={`fixed top-0 right-0 w-[1000px] h-full rounded-tl-[10px] rounded-bl-[10px] bg-white transition-all duration-500 ${
          detailsModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full overflow-hidden relative">
          {/* modal top  */}
          <div className="w-full inline-flex items-center pt-5 py-5 pr-[30px] pl-[292px] bg-bg-light rounded-tl-[10px] gap-[226px]">
            <div className="flex items-center gap-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="w-[230px] ">
                <p className="text-sm2 font-normal leading-normal text-regular text-center">
                  Date
                </p>
                <p className="text-base2 font-medium leading-normal text-dark text-center">
                  23 NOV, 2022
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* close button  */}
            <button onClick={closeModal} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* close button  */}
          </div>
          {/* modal top  */}
          {/* modal content  */}
          <div className="inline-flex flex-col items-start gap-6 py-[30px] w-full ">
            {/* summary  */}
            <div className="flex items-center self-stretch">
              <div className="flex items-start">
                <div className="flex flex-col items-center w-[100px]">
                  <p className="text-sm2 font-medium leading-normal text-regular">
                    09h
                  </p>
                  <p className="text-xs font-normal leading-normal text-light">
                    Scheduled
                  </p>
                </div>
                <div className="flex flex-col items-center w-[100px]">
                  <p className="text-sm2 font-medium leading-normal text-regular">
                    10h 14m
                  </p>
                  <p className="text-xs font-normal leading-normal text-light ">
                    Logged
                  </p>
                </div>
                <div className="flex flex-col items-center w-[100px]">
                  <p className="text-sm2 font-medium leading-normal text-regular">
                    1h 15m
                  </p>
                  <p className="text-xs font-normal leading-normal text-light ">
                    Balance
                  </p>
                </div>
                <div className="flex flex-col items-center w-[100px]">
                  <p className="text-sm2 font-medium leading-normal text-green">
                    05
                  </p>
                  <p className="text-xs font-normal leading-normal text-light ">
                    Approved
                  </p>
                </div>
                <div className="flex flex-col items-center w-[100px]">
                  <p className="text-sm2 font-medium leading-normal text-regular">
                    06h 15m
                  </p>
                  <p className="text-xs font-normal leading-normal text-yellow ">
                    Pending
                  </p>
                </div>
              </div>
            </div>
            {/* summary  */}
            {/* time entries  */}
            <div className="flex flex-col items-start gap-4">
              <p className="text-xs font-normal leading-normal tracking-[3.6px] text-light px-5">
                Time entries
              </p>
              {/* entries  */}
              <div className="flex flex-col items-start">
                <div className="flex items-center p-5 gap-[30px]">
                  {/* time  */}
                  <div className="flex flex-col items-start w-[260px]">
                    <p className="text-base font-medium leading-normal text-regular">
                      06:15 pm - 07:00 pm
                    </p>
                    <p className="text-sm font-normal leading-normal text-light">
                      45min
                    </p>
                  </div>
                  {/* time  */}
                  {/* project info */}
                  <div className="flex flex-col items-start w-[260px]">
                    <p className="text-sm2 font-medium leading-normal text-regular">
                      Untitle project
                    </p>
                    <p className="text-sm font-normal leading-normal text-light">
                      no task added
                    </p>
                  </div>
                  {/* project info */}
                  {/* status  */}
                  <div className="flex items-center w-[156px] gap-[5px]">
                    <span className="flex py-1 px-[14px] rounded-[20px] text-yellow bg-yellow-light">
                      Pending
                    </span>
                  </div>
                  {/* status  */}
                  {/* more icon  */}
                  <div className="flex items-center justify-end w-[150px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="cursor-pointer"
                    >
                      <path
                        d="M9.99999 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 9.99999 9.16675C9.53975 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53975 10.8334 9.99999 10.8334Z"
                        fill="#8D91A5"
                        stroke="#8D91A5"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                        fill="#8D91A5"
                        stroke="#8D91A5"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16668 10.8334C4.62691 10.8334 5.00001 10.4603 5.00001 10.0001C5.00001 9.53984 4.62691 9.16675 4.16668 9.16675C3.70644 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70644 10.8334 4.16668 10.8334Z"
                        fill="#8D91A5"
                        stroke="#8D91A5"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* more icon  */}
                </div>
              </div>
              {/* entries  */}
              {/* entries  */}
              <div className="flex flex-col items-start bg-bg-light">
                <div className="flex items-center p-5 gap-[30px]">
                  {/* time  */}
                  <div className="flex flex-col items-start w-[260px]">
                    <p className="text-base font-medium leading-normal text-regular">
                      06:15 pm - 07:00 pm
                    </p>
                    <p className="text-sm font-normal leading-normal text-light">
                      45min
                    </p>
                  </div>
                  {/* time  */}
                  {/* project info */}
                  <div className="flex flex-col items-start w-[260px]">
                    <p className="text-sm2 font-medium leading-normal text-regular">
                      Untitle project
                    </p>
                    <p className="text-sm font-normal leading-normal text-light">
                      no task added
                    </p>
                  </div>
                  {/* project info */}
                  {/* status  */}
                  <div className="flex items-center w-[156px] gap-[5px]">
                    <span className="flex py-1 px-[14px] rounded-[20px] text-yellow bg-yellow-light">
                      Pending
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.57502 3.21684L1.51668 15.0002C1.37116 15.2522 1.29416 15.5379 1.29334 15.8289C1.29253 16.12 1.36793 16.4061 1.51204 16.6589C1.65615 16.9118 1.86396 17.1225 2.11477 17.27C2.36559 17.4176 2.65068 17.497 2.94168 17.5002H17.0583C17.3494 17.497 17.6344 17.4176 17.8853 17.27C18.1361 17.1225 18.3439 16.9118 18.488 16.6589C18.6321 16.4061 18.7075 16.12 18.7067 15.8289C18.7059 15.5379 18.6289 15.2522 18.4834 15.0002L11.425 3.21684C11.2765 2.97193 11.0673 2.76944 10.8177 2.62891C10.5681 2.48838 10.2865 2.41455 10 2.41455C9.71357 2.41455 9.43196 2.48838 9.18235 2.62891C8.93275 2.76944 8.72358 2.97193 8.57502 3.21684V3.21684Z"
                        stroke="#8D91A5"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 7.5V10.8333"
                        stroke="#8D91A5"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 14.1667H10.0083"
                        stroke="#8D91A5"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* status  */}
                  {/* more icon  */}
                  <div className="flex items-center justify-end w-[150px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="cursor-pointer"
                    >
                      <path
                        d="M9.99999 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 9.99999 9.16675C9.53975 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53975 10.8334 9.99999 10.8334Z"
                        fill="#8D91A5"
                        stroke="#8D91A5"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                        fill="#8D91A5"
                        stroke="#8D91A5"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16668 10.8334C4.62691 10.8334 5.00001 10.4603 5.00001 10.0001C5.00001 9.53984 4.62691 9.16675 4.16668 9.16675C3.70644 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70644 10.8334 4.16668 10.8334Z"
                        fill="#8D91A5"
                        stroke="#8D91A5"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* more icon  */}
                </div>
              </div>
              {/* entries  */}
            </div>
            {/* time entries  */}
          </div>
          {/* modal content  */}
          {/* modal bottom  */}
          <div className="absolute bottom-0 right-0 left-0 flex items-start p-[30px] gap-4">
            {/* approve all btn  */}
            <div className="flex items-center gap-[10px]  py-[10px] px-[23px] rounded-[10px] border-[0.5px] border-light cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M16.6667 5.5L7.50004 14.6667L3.33337 10.5"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm2 font-medium leading-normal text-regular">
                Approved all
              </span>
            </div>
            {/* approve all btn  */}
            {/* set all pending btn  */}
            <div className="flex items-center gap-[10px]  py-[10px] px-[23px] rounded-[10px] border-[0.5px] border-light cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M18.3333 10.5H15L12.5 18L7.49996 3L4.99996 10.5H1.66663"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm2 font-medium leading-normal text-regular">
                Set all as pending
              </span>
            </div>
            {/* set all as pending btn  */}
            {/* reject all btn  */}
            <div className="flex items-center gap-[10px]  py-[10px] px-[23px] rounded-[10px] border-[0.5px] border-light cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M10 18.8334C14.6024 18.8334 18.3334 15.1025 18.3334 10.5001C18.3334 5.89771 14.6024 2.16675 10 2.16675C5.39765 2.16675 1.66669 5.89771 1.66669 10.5001C1.66669 15.1025 5.39765 18.8334 10 18.8334Z"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.10834 4.6084L15.8917 16.3917"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm2 font-medium leading-normal text-regular">
                Reject all
              </span>
            </div>
            {/* reject all btn  */}
            {/* remove all btn  */}
            <div className="flex items-center gap-[10px]  py-[10px] px-[23px] rounded-[10px] border-[0.5px] border-light cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M2.5 5.5H4.16667H17.5"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66669 5.50008V3.83341C6.66669 3.39139 6.84228 2.96746 7.15484 2.6549C7.4674 2.34234 7.89133 2.16675 8.33335 2.16675H11.6667C12.1087 2.16675 12.5326 2.34234 12.8452 2.6549C13.1578 2.96746 13.3334 3.39139 13.3334 3.83341V5.50008M15.8334 5.50008V17.1667C15.8334 17.6088 15.6578 18.0327 15.3452 18.3453C15.0326 18.6578 14.6087 18.8334 14.1667 18.8334H5.83335C5.39133 18.8334 4.9674 18.6578 4.65484 18.3453C4.34228 18.0327 4.16669 17.6088 4.16669 17.1667V5.50008H15.8334Z"
                  stroke="#5C5D76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm2 font-medium leading-normal text-regular">
                Remove all
              </span>
            </div>
            {/* remove all btn  */}
          </div>
          {/* modal bottom  */}
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
