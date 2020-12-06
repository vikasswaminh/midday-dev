import React from 'react'
import LazyLoad from 'react-lazyload';

export default function LazyLoader ({children}) {
  return (
    <LazyLoad once offset={50}>
      {children}
    </LazyLoad>
  )
}
