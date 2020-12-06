import React from 'react'
import LazyLoad from 'react-lazyload'

export const Testimonials = () => {
  return (
    <section className="py-12 bg-gray">
    <div className="container px-4 mx-auto">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-secondary text-center sm:text-5xl sm:leading-none md:text-6xl mb-12">
        Video Testimonials
      </h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 col-gap-8 row-gap-10">
          <li>
          <LazyLoad>
            <iframe className="w-full" style={{ minHeight: '350px' }} src="https://www.youtube.com/embed/4lrP-jFegA4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </LazyLoad>
          </li>
          <li>
          <LazyLoad>
            <iframe className="w-full" style={{ minHeight: '350px' }} src="https://www.youtube.com/embed/8sFKna-T9XY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </LazyLoad>
          </li>
          <li>
          <LazyLoad>
            <iframe className="w-full" style={{ minHeight: '350px' }} src="https://www.youtube.com/embed/u130D1oa9uM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </LazyLoad>
          </li>
          <li>
          <LazyLoad>
            <iframe className="w-full" style={{ minHeight: '350px' }} src="https://www.youtube.com/embed/_dTJ_DgrJlU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </LazyLoad>
          </li>
          <li>
          <LazyLoad>
            <iframe className="w-full" style={{ minHeight: '350px' }} src="https://www.youtube.com/embed/wJj8LYuy0_g" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </LazyLoad>
          </li>
          <li>
          <LazyLoad>
            <iframe className="w-full" style={{ minHeight: '350px' }} src="https://www.youtube.com/embed/CYE-EXt80oA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </LazyLoad>
          </li>
        </ul>
    </div>
  </section>
  )
}
