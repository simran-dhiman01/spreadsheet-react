import React, { useState } from "react";
//import { jobdata, } from "../data/data";
import { AssignedIcon, FirstIcon, JobIcon, StatusIcon, SubmittedIcon, SubmitterIcon, UrlIcon } from "../data/icons";


const TableComponent: React.FC = () => {
    

    const handleClick = (label: string) => {
        console.log(`${label} triggered`)
    }

    return (
        <div className="w-full relative h-[600px] overflow-auto scrollbar-hide bg-[#F6F6F6]" >

            <div className="sticky top-0 z-20">
                {/* Top data */}
                <div className="flex w-full h-9 border-y border-[#EEEEEE] bg-white">
                    <div className="w-[37px] h-9 shrink-0" />
                    <div className="flex items-center p-2 gap-2 box-border border-x border-[#EEEEEE] bg-[#E2E2E2] w-[650px] ">
                        <div className="flex p-1 gap-1 items-center cursor-pointer rounded-sm bg-[#EEEEEE]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.16667 4.66666C6.44281 4.66666 6.66667 4.89052 6.66667 5.16666C6.66667 5.4177 6.48166 5.62553 6.24055 5.66124L6.16667 5.66666H4.66667C3.378 5.66666 2.33333 6.71133 2.33333 8C2.33333 9.24264 3.30471 10.2584 4.52956 10.3294L4.66667 10.3333H6.16667C6.44281 10.3333 6.66667 10.5572 6.66667 10.8333C6.66667 11.0844 6.48166 11.2922 6.24055 11.3279L6.16667 11.3333H4.66667C2.82572 11.3333 1.33333 9.84095 1.33333 8C1.33333 6.21483 2.73664 4.75743 4.5003 4.67074L4.66667 4.66666H6.16667ZM11.3333 4.66666C13.1743 4.66666 14.6667 6.15905 14.6667 8C14.6667 9.78516 13.2634 11.2426 11.4997 11.3293L11.3333 11.3333H9.83333C9.55719 11.3333 9.33333 11.1095 9.33333 10.8333C9.33333 10.5823 9.51834 10.3745 9.75945 10.3388L9.83333 10.3333H11.3333C12.622 10.3333 13.6667 9.28866 13.6667 8C13.6667 6.75736 12.6953 5.74159 11.4704 5.67062L11.3333 5.66666H9.83333C9.55719 5.66666 9.33333 5.44281 9.33333 5.16666C9.33333 4.91563 9.51834 4.7078 9.75945 4.67209L9.83333 4.66666H11.3333ZM4.66667 7.5H11.3333C11.6095 7.5 11.8333 7.72385 11.8333 8C11.8333 8.25313 11.6452 8.46232 11.4012 8.49543L11.3333 8.5H4.66667C4.39052 8.5 4.16667 8.27614 4.16667 8C4.16667 7.74687 4.35477 7.53767 4.59882 7.50456L4.66667 7.5H11.3333H4.66667Z" fill="#1A8CFF" />
                            </svg>
                            <span className="font-normal text-[12px] leading-4 text-[#545454]"
                                onClick={() => handleClick('Financial overview')}>Q3 Financial Overview</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8337 3.45341C10.6663 3.67298 10.7085 3.98673 10.9281 4.15419C12.1203 5.06343 12.8333 6.47214 12.8333 8C12.8333 10.4907 10.9494 12.5413 8.52888 12.8047L8.97978 12.3536C9.17505 12.1583 9.17505 11.8417 8.97978 11.6464C8.80227 11.4689 8.5245 11.4528 8.32876 11.598L8.27268 11.6464L6.93934 12.9798C6.76183 13.1573 6.7457 13.4351 6.89093 13.6308L6.93934 13.6869L8.27268 15.0202C8.46794 15.2155 8.78452 15.2155 8.97978 15.0202C9.1573 14.8427 9.17343 14.5649 9.0282 14.3692L8.97978 14.3131L8.47963 13.8139C11.4769 13.57 13.8333 11.0602 13.8333 8C13.8333 6.15685 12.9721 4.45548 11.5345 3.35905C11.3149 3.19159 11.0012 3.23384 10.8337 3.45341ZM7.02022 0.979782C6.82496 1.17504 6.82496 1.49163 7.02022 1.68689L7.51972 2.18616C4.52273 2.4304 2.16667 4.94006 2.16667 8C2.16667 9.76297 2.95418 11.3983 4.28721 12.4994C4.50011 12.6753 4.81527 12.6452 4.99113 12.4323C5.16699 12.2194 5.13697 11.9043 4.92407 11.7284C3.81863 10.8153 3.16667 9.46147 3.16667 8C3.16667 5.50958 5.05022 3.45908 7.47047 3.19535L7.02022 3.64645C6.82496 3.84171 6.82496 4.15829 7.02022 4.35356C7.21549 4.54882 7.53207 4.54882 7.72733 4.35356L9.06066 3.02022C9.25593 2.82496 9.25593 2.50838 9.06066 2.31312L7.72733 0.979782C7.53207 0.78452 7.21549 0.78452 7.02022 0.979782Z" fill="#FA6736" />
                        </svg>
                    </div>

                    <div className="px-2 py-1 box-border  text-sm text-gray-700 truncate  w-[150px]">
                        {/* Empty */}
                    </div>

                    <div className="flex flex-1 items-center box-border border-x border-[#EEEEEE] cursor-pointer justify-center gap-2 bg-[#D2E0D4] w-[124px]" onClick={() => handleClick('ABC Button')}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0492 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1465C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z" fill="#A3ACA3" />
                        </svg>
                        <span className="font-medium w-auto text-sm cursor-pointer leading-5 text-[#505450]">ABC</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z" fill="#AFAFAF" />
                        </svg>

                    </div>

                    <div className="flex items-center  box-border justify-center border-x border-[#EEEEEE] cursor-pointer px-4 gap-2 bg-[#DCCFFC] w-[251px]"
                        onClick={() => handleClick('Answer a Question')}>
                        <div className="w-auto h-auto py-0.5 px-0.5 gap-1 flex items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00001 2C8.27616 2 8.50001 2.22386 8.50001 2.5V6.33333H10.1636C11.1762 6.33333 11.997 7.15414 11.997 8.16667V12.2944L13.1467 11.1462C13.3421 10.9511 13.6587 10.9513 13.8538 11.1467C14.0489 11.3421 14.0487 11.6587 13.8533 11.8538L11.8503 13.8541C11.655 14.0492 11.3386 14.0491 11.1434 13.8539L9.14308 11.8536C8.94782 11.6583 8.94782 11.3417 9.14308 11.1464C9.33834 10.9512 9.65492 10.9512 9.85018 11.1464L10.997 12.2932V8.16667C10.997 7.70643 10.6239 7.33333 10.1636 7.33333H5.83328C5.37304 7.33333 4.99995 7.70643 4.99995 8.16667V12.2932L6.14673 11.1464C6.34199 10.9512 6.65858 10.9512 6.85384 11.1464C7.0491 11.3417 7.0491 11.6583 6.85384 11.8536L4.8535 13.8539C4.65824 14.0492 4.34166 14.0492 4.1464 13.8539L2.14602 11.8536C1.95076 11.6583 1.95076 11.3417 2.14602 11.1465C2.34128 10.9512 2.65786 10.9512 2.85312 11.1464L3.99995 12.2932V8.16667C3.99995 7.15414 4.82076 6.33333 5.83328 6.33333H7.50001V2.5C7.50001 2.22386 7.72387 2 8.00001 2Z" fill="white" />
                            </svg>
                            <span className="font-medium text-sm cursor-pointer leading-5 text-[#463E59]">Answer a question</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.16671 10C7.16671 10.6443 6.64437 11.1667 6.00004 11.1667C5.35571 11.1667 4.83337 10.6443 4.83337 10C4.83337 9.35567 5.35571 8.83334 6.00004 8.83334C6.64437 8.83334 7.16671 9.35567 7.16671 10ZM11.1667 10C11.1667 10.6443 10.6444 11.1667 10 11.1667C9.35571 11.1667 8.83337 10.6443 8.83337 10C8.83337 9.35567 9.35571 8.83334 10 8.83334C10.6444 8.83334 11.1667 9.35567 11.1667 10ZM14 11.1667C14.6444 11.1667 15.1667 10.6443 15.1667 10C15.1667 9.35567 14.6444 8.83334 14 8.83334C13.3557 8.83334 12.8334 9.35567 12.8334 10C12.8334 10.6443 13.3557 11.1667 14 11.1667Z" fill="#AFAFAF" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-[#FAC2AF] box-border justify-center border-x border-[#EEEEEE] cursor-pointer flex items-center px-4 gap-2 w-[130px]"
                        onClick={() => handleClick('Extract')}>
                        <div className="flex items-center py-0.5 px-1 gap-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99995 2C8.2761 2 8.49995 2.22386 8.49995 2.5V6.33333H10.1636C11.1761 6.33333 11.9969 7.15414 11.9969 8.16667V12.2944L13.1466 11.1462C13.342 10.9511 13.6586 10.9513 13.8537 11.1467C14.0489 11.3421 14.0487 11.6587 13.8533 11.8538L11.8502 13.8541C11.6549 14.0492 11.3385 14.0491 11.1434 13.8539L9.14302 11.8536C8.94775 11.6583 8.94775 11.3417 9.14302 11.1464C9.33828 10.9512 9.65486 10.9512 9.85012 11.1464L10.9969 12.2932V8.16667C10.9969 7.70643 10.6238 7.33333 10.1636 7.33333H5.83322C5.37298 7.33333 4.99989 7.70643 4.99989 8.16667V12.2932L6.14667 11.1464C6.34193 10.9512 6.65852 10.9512 6.85378 11.1464C7.04904 11.3417 7.04904 11.6583 6.85378 11.8536L4.85344 13.8539C4.65818 14.0492 4.3416 14.0492 4.14634 13.8539L2.14596 11.8536C1.9507 11.6583 1.95069 11.3417 2.14595 11.1465C2.34122 10.9512 2.6578 10.9512 2.85306 11.1464L3.99989 12.2932V8.16667C3.99989 7.15414 4.8207 6.33333 5.83322 6.33333H7.49995V2.5C7.49995 2.22386 7.72381 2 7.99995 2Z" fill="white" />
                            </svg>
                            <span className="font-medium text-sm cursor-pointer leading-5 text-[#695149]">Extract</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.16671 10C7.16671 10.6443 6.64437 11.1667 6.00004 11.1667C5.35571 11.1667 4.83337 10.6443 4.83337 10C4.83337 9.35567 5.35571 8.83334 6.00004 8.83334C6.64437 8.83334 7.16671 9.35567 7.16671 10ZM11.1667 10C11.1667 10.6443 10.6444 11.1667 10 11.1667C9.35571 11.1667 8.83337 10.6443 8.83337 10C8.83337 9.35567 9.35571 8.83334 10 8.83334C10.6444 8.83334 11.1667 9.35567 11.1667 10ZM14 11.1667C14.6444 11.1667 15.1667 10.6443 15.1667 10C15.1667 9.35567 14.6444 8.83334 14 8.83334C13.3557 8.83334 12.8334 9.35567 12.8334 10C12.8334 10.6443 13.3557 11.1667 14 11.1667Z" fill="#AFAFAF" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-[#EEEEEE] box-border flex flex-1 cursor-pointer border-x-2 border-gray-300 border-dashed justify-center items-center px-2 gap-2 w-[124px] mr-3"
                        onClick={() => handleClick('New column')}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.79153 2.5C10.1079 2.5 10.3695 2.73501 10.4109 3.04007L10.4167 3.12487L10.4177 9.16667H16.4619C16.8071 9.16667 17.0869 9.44649 17.0869 9.79167C17.0869 10.1081 16.8518 10.3696 16.5467 10.411L16.4619 10.4167H10.4177L10.4194 16.4576C10.4194 16.8028 10.1397 17.0827 9.7945 17.0827C9.47808 17.0827 9.21654 16.8477 9.17509 16.5427L9.16937 16.4578L9.16766 10.4167H3.12683C2.78165 10.4167 2.50183 10.1368 2.50183 9.79167C2.50183 9.47525 2.73696 9.21376 3.04202 9.17237L3.12683 9.16667H9.16766L9.16666 3.12513C9.16659 2.77995 9.44635 2.5 9.79153 2.5Z" fill="#04071E" />
                        </svg>

                    </div>
                </div>


                {/* Table */}
                <table className="border-separate border-spacing-0 table-fixed text-sm">
                    {/* Header */}
                    <thead className="bg-[#EEEEEE] sticky top-0 z-20 text-left h-8">
                        <tr>
                            <th className="w-[32px] border box-border border-gray-100  min-w-[30px] max-w-[30px] p-0 m-0 ">
                                <div className="w-full h-8 box-border overflow-hidden whitespace-nowrap flex items-center justify-center">
                                    <FirstIcon />
                                </div>
                            </th>
                            <th className="border border-gray-100 box-border  w-[260px]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <JobIcon />
                                        <span className="text-[#757575] font-semibold text-[12px] pr-1 pl-2 leading-4">Job Request</span>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.14645 8.14645C6.34171 7.95118 6.65829 7.95118 6.85355 8.14645L10 11.2929L13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645Z" fill="#AFAFAF" />
                                    </svg>
                                </div>
                            </th>
                            <th className="border border-gray-100 box-border w-[128px]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <SubmittedIcon />
                                        <span className="text-[#757575] font-semibold text-[12px] pr-1 pl-2 leading-4">Submitted</span>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.14645 8.14645C6.34171 7.95118 6.65829 7.95118 6.85355 8.14645L10 11.2929L13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645Z" fill="#AFAFAF" />
                                    </svg>
                                </div>
                            </th>

                            <th className="border border-gray-100 box-border w-[130px]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <StatusIcon />
                                        <span className="text-[#757575] font-semibold text-[12px] pr-1 pl-2 leading-4">Status</span>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.14645 8.14645C6.34171 7.95118 6.65829 7.95118 6.85355 8.14645L10 11.2929L13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645Z" fill="#AFAFAF" />
                                    </svg>
                                </div>
                            </th>

                            <th className="border border-gray-100 box-border w-[130px]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <SubmitterIcon />
                                        <span className="text-[#757575] font-semibold text-[12px] pr-1 pl-2 leading-4">Submitter</span>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.14645 8.14645C6.34171 7.95118 6.65829 7.95118 6.85355 8.14645L10 11.2929L13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645Z" fill="#AFAFAF" />
                                    </svg>
                                </div>
                            </th>



                            <th className="border border-gray-100 box-border w-[152px]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <UrlIcon />
                                        <span className="text-[#757575] font-semibold text-[12px] pr-1 pl-2 leading-4">URL</span>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.14645 8.14645C6.34171 7.95118 6.65829 7.95118 6.85355 8.14645L10 11.2929L13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645Z" fill="#AFAFAF" />
                                    </svg>
                                </div>
                            </th>

                            <th className="border border-gray-100 box-border shrink-0 w-[143px] bg-[#E8F0E9]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <AssignedIcon />
                                        <span className="text-[#666C66] font-semibold text-[12px] pr-1 pl-2 leading-4">Assigned</span>
                                    </div>
                                </div>
                            </th>

                            <th className="border border-gray-100 box-border w-[132px] bg-[#EAE3FC]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <span className="text-[#655C80] font-semibold text-[12px] pr-1 pl-2 leading-4">Priority</span>
                                    </div>
                                </div>
                            </th>

                            <th className="border border-gray-100 box-border  w-[120px] bg-[#EAE3FC]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <span className="text-[#655C80] font-semibold text-[12px] pr-1 pl-2 leading-4">Due Date</span>
                                    </div>
                                </div>
                            </th>

                            <th className="border border-gray-100 box-border  w-[130px] bg-[#FFE9E0]">
                                <div className="flex items-center pr-1 pl-2 justify-between gap-1">
                                    <div className="flex items-center">
                                        <span className="text-[#8C6C62] font-semibold text-[12px] pr-1 pl-2 leading-4">Est. Value</span>
                                    </div>
                                </div>
                            </th>
                            <th
                                className="sticky top-0 z-20 bg-white w-[160px] border border-x-2 border-gray-200 box-border mr-3"
                                style={{
                                    borderLeftStyle: 'dashed',
                                    borderRightStyle: 'dashed',
                                    borderTopStyle: 'solid',
                                    borderBottomStyle: 'solid',
                                }}
                            >
                            </th>
                        </tr>
                    </thead>

                   
                </table>
            </div>


        </div >
    )
}

export default TableComponent;

