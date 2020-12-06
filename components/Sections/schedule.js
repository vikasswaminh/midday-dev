import React from 'react'
import Date from '../date'

export const Schedule = ({title, timetable}) => {
  return (
    <div className="schedule">
    <h3 className="text-xl md:text-2xl leading-6 font-bold mb-4 text-secondary flex flex-col">{title}</h3>
        <div className="flex justify-between bg-primary w-full text-white p-4 rounded-md rounded-bl-none rounded-br-none">
          <p className="font-bold text-lg md:text-xl">Course</p>
          <p className="font-bold text-lg md:text-xl">Date</p>
          <p className="font-bold text-lg md:text-xl">Time</p>
        </div>
        {timetable && timetable.map((item,i)=>{
          return (
            <div key={i} className="flex justify-between bg-gray w-full p-4">
            <p className="font-bold text-sm md:text-xl text-secondary">{item.course}</p>
            <p className="font-bold text-sm md:text-xl text-secondary"><Date dateString={item.date} /> </p>
            <p className="font-bold text-sm md:text-xl text-secondary">{item.time}</p>
          </div>
          )
        })}
    </div>
  )
}
