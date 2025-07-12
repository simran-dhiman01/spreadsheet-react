import React, { useState } from 'react'

const FooterRow: React.FC = () => {
  const [active, setActive] = useState("All");

  return (
    <div className='w-full h-12 fixed bottom-0 z-20 pr-4 pl-8 flex gap-6 bg-white border-t border-[#EEEEEE]'>
      <div className='flex w-full h-full cursor-pointer text-base leading-6'>

        <div className={`px-4 cursor pointer hover:bg-[#E8F0E9] py-2.5
          ${active === 'All' ? "text-[#3E5741] bg-[#E8F0E9] border-t-2 border-[#4B6A4F] font-semibold " : "text-[#757575] font-medium"}`}
          onClick={() => {
            setActive('All')
            console.log('View All orders')
          }}>
          All Orders
        </div>
        <div className={`py-2.5 px-4 hover:bg-[#E8F0E9] 
        ${active === 'Pending' ? "text-[#3E5741] bg-[#E8F0E9] border-t-2 border-[#4B6A4F] font-semibold " : "text-[#757575] font-medium"}`}
          onClick={() => {
            setActive('Pending')
            console.log('View Pending orders')
          }}>
          Pending
        </div>
        <div className={`py-2.5 px-4 hover:bg-[#E8F0E9] 
        ${active === 'Reviewed' ? "text-[#3E5741] bg-[#E8F0E9] border-t-2 border-[#4B6A4F] font-semibold " : "text-[#757575] font-medium"}`}
          onClick={() => {
            setActive('Reviewed')
            console.log("View Reviewed orders")
          }}>
          Reviewed
        </div>
        <div className={`py-2.5 px-4 hover:bg-[#E8F0E9] 
        ${active === 'Arrived' ? "text-[#3E5741] bg-[#E8F0E9] border-t-2 border-[#4B6A4F] font-semibold " : "text-[#757575] font-medium"}`}
          onClick={() => {
            setActive('Arrived')
            console.log('View Arrived orders')
          }}>
          Arrived
        </div>

        <button className={`hover:bg-[#E8F0E9] cursor-pointer ${active === 'Add' ? "bg-[#E8F0E9] border-t-2 border-[#4B6A4F]" : "bg-white"}`}
          onClick={() => {
            setActive('Add')
            console.log('Add Sheet')
          }}>
          <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <rect x="4" y="8" width="28" height="28" rx="4" />
            <path d="M18 14.5C17.54 14.5 17.1667 14.8733 17.1667 15.3333V21.1667H11.3333C10.8733 21.1667 10.5 21.54 10.5 22C10.5 22.46 10.8733 22.8333 11.3333 22.8333H17.1667V28.6667C17.1667 29.1267 17.54 29.5 18 29.5C18.46 29.5 18.8333 29.1267 18.8333 28.6667V22.8333H24.6667C25.1267 22.8333 25.5 22.46 25.5 22C25.5 21.54 25.1267 21.1667 24.6667 21.1667H18.8333V15.3333C18.8333 14.8733 18.46 14.5 18 14.5Z"
              className={`transition-colors duration-150 
                            ${active === 'Add' ? 'fill-[#3e6042]' : 'fill-[#757575]'} `} />
          </svg>

        </button>

      </div>

    </div>
  )
}

export default FooterRow
