import React from 'react'
import { Lazyloader } from '../lazyloader'

export const Courses = ({data , title}) => {
  return (
    <section className="py-12 bg-secondary">
    <div className="container px-4 mx-auto px-4">
      <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white text-center sm:text-5xl sm:leading-none md:text-6xl mb-24">
        {title}
      </h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 col-gap-8 row-gap-16">
        {data && data.map((item ,i)=> {
          return (
            <li key={i}>
            <div className="card rounded-md bg-gray shadow-sm relative flex flex-col" style={{minHeight: '400px'}}>
              <Lazyloader>
                <div className="px-4">
                  <img src={item.node.course_thumbnail.url} alt={item.node.course_title[0].text} className="w-full rounded-md -mt-8" />
                </div>
              </Lazyloader>
              <h2 className="text-2xl px-4 tracking-tight leading-10 font-extrabold text-secondary pt-8 text-center sm:text-5xl sm:leading-none md:text-3xl">
              {item.node.course_title[0].text}
              </h2>
              <p className="p-4 text-base text-gray-500 text-center sm:text-sm sm:max-w-xl sm:mx-auto lg:mx-0">
              {item.node.course_subtitle[0].text}
              </p>
              <div className="rounded-md shadow mt-auto">
                <a href={`${item.node.course_category}/${item.node._meta.uid}`} className="w-full flex items-center justify-center mt-4 px-8 py-3 border border-transparent leading-6 font-medium rounded-md rounded-tr-none rounded-tl-none text-white bg-primary hover:opacity-75 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  read more →
                </a>
              </div>
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  </section>
  )
}
