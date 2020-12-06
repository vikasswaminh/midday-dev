import React from 'react'
import { Lazyloader } from '../lazyloader'

export const Placements = () => {
  return (
    <section className="py-16 xl:py-24 container px-4 mx-auto">
    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-secondary text-center sm:text-5xl sm:leading-none md:text-6xl mb-6 lg:mb-12">
      Unbeatable Placement Record
    </h2>
    <ul className="grid sm:grid-cols-2 md:grid-cols-4 col-gap-8 row-gap-10">
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-1.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-2.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-3.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-4.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-5.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-6.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-7.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
      <li>
        <Lazyloader>
          <img src="assets/placements/placement-8.jpg" alt="Unbeatable placement programs and record" className="w-full rounded-md" />
        </Lazyloader>
      </li>
    </ul>
  </section>
  )
}
