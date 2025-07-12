import React from "react";

const Topbar: React.FC = () => {

    return (
        <div className="w-full h-[56px] px-4 py-2 border-b border-[#EEEEEE] flex justify-between items-center bg-white mx-auto">

            {/* Left side */}
            <div className="w-[343px] h-[24px] flex items-center gap-4">
                <img className="w-[24px] h-[24px]" src="data:image/svg+xml,%3csvg%20width='20'%20height='16'%20viewBox='0%200%2020%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.75%200C18.5449%200%2020%201.45507%2020%203.25V12.75C20%2014.5449%2018.5449%2016%2016.75%2016H3.25C1.45507%2016%200%2014.5449%200%2012.75V3.25C0%201.45507%201.45507%200%203.25%200H16.75ZM3.25%201.5C2.2835%201.5%201.5%202.2835%201.5%203.25V12.75C1.5%2013.7165%202.2835%2014.5%203.25%2014.5H12.5V1.5H3.25Z'%20fill='%23618666'/%3e%3c/svg%3e" alt="side icon" />

                <div className="flex items-center gap-2">
                    <p className="text-sm text-[#AFAFAF] leading-[20px] font-medium cursor-pointer hover:underline"
                        onClick={() => {
                            console.log('Workspace clicked')
                        }}
                    >Workspace</p>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.23483 2.10983C4.08839 2.25628 4.08839 2.49372 4.23483 2.64017L7.59467 6L4.23484 9.35984C4.08839 9.50628 4.08839 9.74372 4.23484 9.89016C4.38128 10.0366 4.61872 10.0366 4.76517 9.89016L8.39017 6.26516C8.53661 6.11872 8.53661 5.88128 8.39017 5.73483L4.76517 2.10983C4.61872 1.96339 4.38128 1.96339 4.23483 2.10983Z" fill="#AFAFAF" />
                    </svg>
                    <p className="font-medium text-[#AFAFAF] leading-[20px] text-sm cursor-pointer hover:underline"
                        onClick={() => console.log('Folder 2 clicked')}
                    >Folder 2</p>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.23483 2.10983C4.08839 2.25628 4.08839 2.49372 4.23483 2.64017L7.59467 6L4.23484 9.35984C4.08839 9.50628 4.08839 9.74372 4.23484 9.89016C4.38128 10.0366 4.61872 10.0366 4.76517 9.89016L8.39017 6.26516C8.53661 6.11872 8.53661 5.88128 8.39017 5.73483L4.76517 2.10983C4.61872 1.96339 4.38128 1.96339 4.23483 2.10983Z" fill="#AFAFAF" />
                    </svg>
                    <p className="text-[14px] h-[20px] leading-[20px] font-medium text-[#121212] cursor-pointer hover:underline" 
                    onClick={() => console.log('Spreadsheet clicked')}>
                        Spreadsheet 3
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.45832 12C8.45832 12.8054 7.80541 13.4583 6.99999 13.4583C6.19457 13.4583 5.54166 12.8054 5.54166 12C5.54166 11.1946 6.19457 10.5417 6.99999 10.5417C7.80541 10.5417 8.45832 11.1946 8.45832 12ZM13.4583 12C13.4583 12.8054 12.8054 13.4583 12 13.4583C11.1946 13.4583 10.5417 12.8054 10.5417 12C10.5417 11.1946 11.1946 10.5417 12 10.5417C12.8054 10.5417 13.4583 11.1946 13.4583 12ZM17 13.4583C17.8054 13.4583 18.4583 12.8054 18.4583 12C18.4583 11.1946 17.8054 10.5417 17 10.5417C16.1946 10.5417 15.5417 11.1946 15.5417 12C15.5417 12.8054 16.1946 13.4583 17 13.4583Z" fill="#AFAFAF" />
                    </svg>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-[325px] h-[40px] flex items-center gap-1">
                {/* Search bar */}
                <div className="w-[165px] h-[40px] flex items-center p-3  gap-2 bg-[#F6F6F6] rounded-[6px]">
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4732 13.4733C13.2132 13.7333 12.7866 13.7333 12.5266 13.4733L10.3666 11.3067C10.7132 11.0267 11.0266 10.7133 11.3066 10.3667L13.4732 12.5267C13.7332 12.7867 13.7332 13.2133 13.4732 13.4733Z" fill="#AFAFAF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.50004 11.3333C9.16942 11.3333 11.3334 9.16938 11.3334 6.5C11.3334 3.83062 9.16942 1.66667 6.50004 1.66667C3.83066 1.66667 1.66671 3.83062 1.66671 6.5C1.66671 9.16938 3.83066 11.3333 6.50004 11.3333ZM6.50004 12.6667C9.9058 12.6667 12.6667 9.90576 12.6667 6.5C12.6667 3.09424 9.9058 0.333334 6.50004 0.333334C3.09428 0.333334 0.333374 3.09424 0.333374 6.5C0.333374 9.90576 3.09428 12.6667 6.50004 12.6667Z" fill="#AFAFAF" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search within sheet"
                        className="text-xs tracking-normal leading-[16px] font-normal text-[#757575] placeholder:text-[#757575] placeholder:font-normal placeholder:text-xs bg-transparent outline-none w-full"
                        onClick={() => {
                            alert('You clicked searchbar.')
                            console.log('SearchBar Clicked')
                        }} />
                </div>

                {/* Notification */}
                <div className=" p-2  rounded-[8px] flex relative items-center justify-center cursor-pointer"
                    onClick={() => console.log('Notification clicked')}>
                    {/* notification bell */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M12 1.99622C16.0499 1.99622 19.3567 5.19097 19.4958 9.24528L19.5 9.49622V13.5932L20.88 16.7492C20.949 16.9071 20.9847 17.0776 20.9847 17.25C20.9847 17.9404 20.425 18.5 19.7347 18.5L15 18.5015C15 20.1583 13.6568 21.5015 12 21.5015C10.4023 21.5015 9.09633 20.2526 9.00508 18.6778L8.99954 18.4992L4.27485 18.5C4.10351 18.5 3.93401 18.4648 3.77685 18.3965C3.14365 18.1215 2.8533 17.3852 3.12834 16.752L4.49999 13.5941V9.49612C4.50059 5.34132 7.85208 1.99622 12 1.99622ZM13.4995 18.4992L10.5 18.5015C10.5 19.3299 11.1716 20.0015 12 20.0015C12.7797 20.0015 13.4204 19.4066 13.4931 18.646L13.4995 18.4992ZM12 3.49622C8.67983 3.49622 6.00047 6.17048 5.99999 9.49622V13.9059L4.65601 17H19.3525L18 13.9068L18.0001 9.50908L17.9964 9.28388C17.8853 6.0504 15.2416 3.49622 12 3.49622Z" fill="#121212"
                        />
                    </svg>
                    {/* notification count */}
                    <div className="rounded-full left-[20px] top-[1px] absolute">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="18" height="18" rx="9" fill="#4B6A4F" />
                            <rect x="1" y="1" width="18" height="18" rx="9" stroke="white" strokeWidth="2" />
                            <path d="M7.7 13V12.22C8.33333 11.7667 8.86333 11.3667 9.29 11.02C9.72333 10.6733 10.07 10.3533 10.33 10.06C10.59 9.76667 10.7767 9.49 10.89 9.23C11.01 8.96333 11.07 8.69333 11.07 8.42C11.07 8.06667 10.96 7.78 10.74 7.56C10.52 7.34 10.2133 7.23 9.82 7.23C9.40667 7.23 9.07667 7.37 8.83 7.65C8.59 7.92333 8.45333 8.3 8.42 8.78L7.49 8.35C7.53667 7.93 7.66 7.56667 7.86 7.26C8.06 6.95333 8.33 6.71667 8.67 6.55C9.01667 6.38333 9.41667 6.3 9.87 6.3C10.2433 6.3 10.57 6.35333 10.85 6.46C11.1367 6.56667 11.3767 6.71667 11.57 6.91C11.7633 7.09667 11.91 7.31667 12.01 7.57C12.1167 7.82333 12.17 8.09333 12.17 8.38C12.17 8.8 12.0667 9.20667 11.86 9.6C11.6533 9.98667 11.3267 10.3833 10.88 10.79C10.4333 11.1967 9.84667 11.6333 9.12 12.1V12.12C9.2 12.1067 9.31 12.1 9.45 12.1C9.59 12.0933 9.73 12.09 9.87 12.09C10.01 12.0833 10.1233 12.08 10.21 12.08H12.29V13H7.7Z" fill="#F6F6F6" />
                        </svg>
                    </div>

                </div>

                {/* Profile */}
                <div className="flex  h-[40px] items-center gap-2 bg-white rounded-[8px] py-1.5 px-3">
                    {/* Profile Picture */}
                    <div>
                        <img src="/profile.png" alt="Profile photo" className="w-7 cursor-pointer h-7 rounded-full"
                            onClick={() => console.log('Profile Photo clicked')} />
                    </div>
                    {/* Profile Name */}
                    <div className="flex-col max-w-[120px] cursor-pointer" onClick={() => console.log('Profile clicked')}>
                        <p className="leading-4 text-xs font-normal h-[16px] w-[56px] text-black">John Doe</p>
                        <p className="text-[#757575] h-[12px] w-[56px] font-normal text-[10px] leading-3">john.doe...</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Topbar;
