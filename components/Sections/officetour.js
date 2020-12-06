import React from 'react'
import LazyLoad from 'react-lazyload'

export const OfficeTour = () => {
  return (
    <section>
    <div className="outer-div outline-0 container px-4 mx-auto">
      <div className="relative overflow-hidden mx-4">
        <div className="w-full mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Get a tour of our
                  <br className="xl:hidden"></br>
                  <span className="text-primary"> Campus</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  NETWORKERS HOME has one of the best Infrastructure for Networking IT Certification training . Over 20 Full Time CCIE instructors to help you go through detailed theory and Lab training
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:opacity-75 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      Visit Us
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:p-6 lg:pt-16">
          <LazyLoad>
            <iframe className="w-full h-full" style={{ minHeight: '350px' }} src="https://www.youtube.com/embed/Qzw4PARleGY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </LazyLoad>
        </div>
      </div>
    </div>
  </section>
  )
}
