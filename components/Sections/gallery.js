import React from 'react'
import { Lazyloader } from '../lazyloader'

export const Gallery = () => {
  return (
    <section className="py-12 bg-gray">
    <div className="container px-4 mx-auto">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-secondary text-center sm:text-5xl sm:leading-none md:text-6xl mb-12">
        Gallery
      </h2>
      <ul className="grid md:grid-cols-3 col-gap-8 row-gap-10 mt-8">
        <li>
          <Lazyloader>
            <img src="/assets/cover/cover-2.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/gallery/gallery-6.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/cover/cover-3.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/gallery/gallery-8.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/gallery/gallery-4.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/gallery/gallery-5.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>

        <li>
          <Lazyloader>
            <img src="/assets/gallery/gallery-7.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/cover/cover-1.png" alt="Networkers Home Campus" className="w-full rounded-md h-full" />
          </Lazyloader>
        </li>
      </ul>
    </div>
  </section>
  )
}
