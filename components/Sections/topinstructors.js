import React from 'react'
import { Lazyloader } from '../lazyloader'

export const TopInstructors = () => {
  return (
    <section className="py-12 bg-secondary">
    <div className="container px-4 mx-auto px-4">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white text-center sm:text-5xl sm:leading-none md:text-6xl mb-12">
        Top Instructors
      </h2>
      <ul className="grid md:grid-cols-3 col-gap-8 row-gap-10">
        <li>
          <div className="card rounded-md bg-gray shadow-sm flex flex-col">
            <Lazyloader>
              <img src="assets/instructors/instructor-1.png" alt="Top instructors in networkers home" className="w-full rounded-md rounded-br-none rounded-bl-none" />
            </Lazyloader>
            <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-secondary pt-4 text-center sm:text-5xl sm:leading-none md:text-3xl">
              Vikas Swami
            </h2>
            <p className="p-4 text-base text-gray-500 text-center sm:text-lg sm:max-w-xl sm:mx-auto lg:text-xl lg:mx-0">
              Dual CCIE R&S,SEC #22239
            </p>
          </div>
        </li>

        <li>
          <div className="card rounded-md bg-gray shadow-sm flex flex-col">
            <Lazyloader>
              <img src="assets/instructors/instructor-2.png" alt="Top instructors in networkers home" className="w-full rounded-md rounded-br-none rounded-bl-none" />
            </Lazyloader>
            <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-secondary pt-4 text-center sm:text-5xl sm:leading-none md:text-3xl">
              Amit Tanwar
            </h2>
            <p className="p-4 text-base text-gray-500 text-center sm:text-lg sm:max-w-xl sm:mx-auto lg:text-xl lg:mx-0">
              CCIE Security #63532
            </p>
          </div>
        </li>

        <li>
          <div className="card rounded-md bg-gray shadow-sm flex flex-col">
            <Lazyloader>
              <img src="assets/instructors/instructor-3.png" alt="Top instructors in networkers home" className="w-full rounded-md rounded-br-none rounded-bl-none" />
            </Lazyloader>
            <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-secondary pt-4 text-center sm:text-5xl sm:leading-none md:text-3xl">
              Amit Shah
            </h2>
            <p className="p-4 text-base text-gray-500 text-center sm:text-lg sm:max-w-xl sm:mx-auto lg:text-xl lg:mx-0">
              CCIE Security #64432
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}
