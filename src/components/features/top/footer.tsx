'use client'
import { useState } from "react";
import { FormatDate } from "../calendar/getdate";

export default function Footer() {
  const [date, setDate] = useState(new Date());

  const handlePrevClick = () => {
    const prevDate = new Date(date);
    prevDate.setDate(prevDate.getDate() - 1);
    setDate(prevDate);
  };

  const handleNextClick = () =>{
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate())
    
    if(nextDate <= todayDate){
      setDate(nextDate);
    }
    
  };

  return (
    <footer className="w-screen h-16 bottom-0 absolute">
      <div className="flex justify-center items-center">
        <div id="prev" className="w-4 h-4 border-t-2 border-l-2 border-black transform -rotate-45 cursor-pointer" onClick={handlePrevClick}>
        </div>
        <span className="text-1xl">
          <FormatDate date={date}/>
        </span>
        <div id="next" className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45 cursor-pointer" onClick={handleNextClick}>
        </div>
      </div>
    </footer>
  )
}