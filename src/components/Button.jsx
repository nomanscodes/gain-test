/* eslint-disable react/prop-types */
// use typescript for better perfonmance 


const Button = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-[10px] py-2 px-5 rounded-[8px] bg-primary">
      {icon && (
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
      )}

      <span className="text-white text-sm2 leading-normal font-medium">
        {text}
      </span>
    </button>
  );
};


export default Button;
