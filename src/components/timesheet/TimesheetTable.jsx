import { useState } from "react";
import DetailsModal from "./DetailsModal";

const TimesheetTable = () => {
  const [detailsModal, setDetailsModal] = useState(false);

  // user dummy data
  const userdata = [
    {
      info: {
        img: "/img/user.png",
        name: "John Doe",
        designation: "Backend Developer",
      },
      date: "09:00 am - 06:00 pm",
      scheduled: "8h",
      logged: "7h 30m",
      balance: "30m",
      status: {
        done: 5,
        pending: 1,
        reject: 0,
      },
    },
    {
      info: {
        img: "/img/user2.jpeg",
        name: "Alice Smith",
        designation: "UI/UX Designer",
      },
      date: "11:30 am - 07:30 pm",
      scheduled: "7h",
      logged: "6h 45m",
      balance: "15m",
      status: {
        done: 0,
        pending: 0,
        reject: 1,
      },
    },
    {
      info: {
        img: "/img/user3.jpeg",
        name: "Bob Johnson",
        designation: "Full Stack Developer",
      },
      date: "10:00 am - 06:30 pm",
      scheduled: "8h",
      logged: "8h 30m",
      balance: "-30m",
      status: {
        done: 6,
        pending: 0,
        reject: 2,
      },
    },
    {
      info: {
        img: "/img/user4.jpeg",
        name: "Eva Green",
        designation: "Product Manager",
      },
      date: "08:45 am - 05:45 pm",
      scheduled: "8h",
      logged: "7h 15m",
      balance: "45m",
      status: {
        done: 3,
        pending: 4,
        reject: 1,
      },
    },
    {
      info: {
        img: "/img/user5.jpeg",
        name: "Michael Brown",
        designation: "QA Engineer",
      },
      date: "09:30 am - 06:30 pm",
      scheduled: "7h",
      logged: "7h 45m",
      balance: "-45m",
      status: {
        done: 2,
        pending: 2,
        reject: 3,
      },
    },
    {
      info: {
        img: "/img/user.png",
        name: "Sophie White",
        designation: "Frontend Developer",
      },
      date: "10:15 am - 08:15 pm",
      scheduled: "9h",
      logged: "9h 50m",
      balance: "-15m",
      status: {
        done: 4,
        pending: 0,
        reject: 0,
      },
    },
    {
      info: {
        img: "/img/user2.jpeg",
        name: "David Lee",
        designation: "Data Scientist",
      },
      date: "09:00 am - 05:00 pm",
      scheduled: "8h",
      logged: "7h 30m",
      balance: "30m",
      status: {
        done: 5,
        pending: 1,
        reject: 0,
      },
    },
    {
      info: {
        img: "/img/user3.jpeg",
        name: "Olivia Taylor",
        designation: "Marketing Specialist",
      },
      date: "11:30 am - 07:30 pm",
      scheduled: "7h",
      logged: "6h 45m",
      balance: "15m",
      status: {
        done: 3,
        pending: 3,
        reject: 1,
      },
    },
    {
      info: {
        img: "/img/user4.jpeg",
        name: "Chris Evans",
        designation: "Software Engineer",
      },
      date: "10:00 am - 06:30 pm",
      scheduled: "8h",
      logged: "8h 30m",
      balance: "-30m",
      status: {
        done: 6,
        pending: 0,
        reject: 2,
      },
    },
    {
      info: {
        img: "/img/user5.jpeg",
        name: "Mia Johnson",
        designation: "Graphic Designer",
      },
      date: "08:45 am - 05:45 pm",
      scheduled: "8h",
      logged: "7h 15m",
      balance: "45m",
      status: {
        done: 4,
        pending: 3,
        reject: 0,
      },
    },
  ];

  return (
    <>
      <div className="inline-flex flex-col items-center bg-white rounded-[10px] pt-[2px] pr-[2px] pb-[20px] pl-[2px] w-full">
        <table className="w-full text-left ">
          {/* table head  */}
          <thead className=" bg-bg-color">
            <tr className="">
              <th className="py-5 px-[21px] text-sm2 font-normal leading-normal text-light rounded-tl-[10px]">
                Name
              </th>
              <th className="py-5 px-[21px] text-sm2 font-normal leading-normal text-light">
                Date
              </th>
              <th className="py-5 px-[21px] text-sm2 font-normal leading-normal text-light">
                Scheduled
              </th>
              <th className="py-5 px-[21px] text-sm2 font-normal leading-normal text-light">
                Logged
              </th>
              <th className="py-5 pl-[21px] text-sm2 font-normal leading-normal text-light ">
                Balance
              </th>
              <th className="py-5 px-[21px] text-sm2 font-normal leading-normal text-light ">
                Status
              </th>
              <th className="py-5 px-[21px] text-sm2 font-normal leading-normal text-light rounded-tr-[10px] text-right">
                Details
              </th>
            </tr>
          </thead>
          {/* table head  */}
          {/* table data  */}
          <tbody>
            {userdata.map((user, index) => (
              <tr
                className={`${index % 2 == 0 ? `` : `bg-bg-light`}`}
                key={index}
              >
                {/* user info  */}
                <td className="p-5">
                  <div className="flex items-center gap-[10px]">
                    <picture>
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={user?.info?.img}
                      />
                    </picture>
                    <div>
                      <p className="text-base font-medium leading-normal text-secondary">
                        {user?.info?.name}
                      </p>
                      <p className="text-sm2 font-normal leading-normal text-light">
                        {user?.info?.designation}
                      </p>
                    </div>
                  </div>
                </td>
                {/* user info  */}
                {/* date  */}
                <td className="p-5">
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-sm2 font-medium leading-normal text-regular">
                      Today
                    </p>
                    <span className="text-sm2 font-normal leading-normal text-light">
                      {user?.date}
                    </span>
                  </div>
                </td>
                {/* date  */}
                {/* Scheduled  */}
                <td className="p-5">
                  <span className="text-sm2 font-normal leading-normal text-regular">
                    {user?.scheduled}
                  </span>
                </td>
                {/* Scheduled  */}
                {/* logged  */}
                <td className="p-5">
                  <span className="text-sm2 font-normal leading-normal text-regular">
                    {user?.logged}
                  </span>
                </td>
                {/* logged  */}
                {/* balance  */}
                <td className="p-5">
                  <span className="text-sm2 font-normal leading-normal text-regular">
                    {user?.balance}
                  </span>
                </td>
                {/* balance  */}
                {/* status  */}
                <td className="p-5">
                  <div className="flex items-center gap-[5px]">
                    {/* approved  */}
                    {user?.status.done > 0 && (
                      <span className="py-1 px-[14px] rounded-[20px] bg-green-light text-sm leading-normal font-medium text-green">
                        0{user?.status.done}
                      </span>
                    )}
                    {/* pending  */}
                    {user?.status?.pending > 0 && (
                      <span className="py-1 px-[14px] rounded-[20px] bg-orange-light text-sm leading-normal font-medium text-orange">
                        0{user?.status?.pending}
                      </span>
                    )}
                    {/* reject  */}
                    {user?.status?.reject > 0 && (
                      <span className="py-1 px-[14px] rounded-[20px] bg-red-light text-sm leading-normal font-medium text-red">
                        0{user?.status?.reject}
                      </span>
                    )}
                  </div>
                </td>
                {/* status  */}
                {/* details  action*/}
                <td className="p-5 text-right">
                  <div
                    onClick={() => setDetailsModal(true)}
                    className="flex items-center justify-end gap-[5px] cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6.66665 4.99976H11.6667"
                        stroke="#1A3AA2"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66665 10H17.5"
                        stroke="#1A3AA2"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66665 14.9998H15"
                        stroke="#1A3AA2"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 4.99976H2.50834"
                        stroke="#1A3AA2"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 10H2.50834"
                        stroke="#1A3AA2"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 14.9998H2.50834"
                        stroke="#1A3AA2"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-medium leading-normal text-secondary">
                      All entries
                    </span>
                  </div>
                </td>
                {/* details  action*/}
              </tr>
            ))}
          </tbody>
          {/* table data  */}
        </table>
      </div>
      {/* deatils modal  */}
      <DetailsModal
        detailsModal={detailsModal}
        setDetailsModal={setDetailsModal}
      />
      {/* deatils modal  */}
    </>
  );
};

export default TimesheetTable;
