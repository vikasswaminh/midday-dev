import React from 'react'

export const BottomBanner = ({title, cta}) => {
  return (
    <section>
    <div className="w-full py-24 bg-gradient mt-8 bottom-banner">
      <div className="container px-4 mx-auto">
        <h3 className="mt-2 text-3xl md:text-6xl text-white text-center leading-8 font-bold tracking-tight sm:text-4xl sm:leading-10">
          {title}
        </h3>
        <div className="flex w-full justify-center pb-12 lg:pb-0 ">
          <div className="rounded-md shadow">
            <a href="/contact" className="mt-12 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:opacity-75 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
