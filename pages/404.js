import Head from 'next/head'
import { ContextConsumer } from 'prismic-reactjs'

export default function FourZeroFour() {

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="bg-primary py-64 w-full container-mx-auto px-4">
        <div className="container mx-auto">
          <h1 className="text-white text-4xl md:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center mt-4">
            404. Page Not Found.
          </h1>
          <a href="/" className="flex justify-center underline text-center text-white text-xl mt-8">Go To Home</a>
        </div>
      </div>
    </>
  )
}
