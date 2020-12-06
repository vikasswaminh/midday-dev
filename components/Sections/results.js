import React from 'react'
import { Lazyloader } from '../lazyloader'

export const Results = () => {
  return (
    <section className="py-12 bg-gray">
    <div className="container px-4 mx-auto">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-secondary text-center sm:text-5xl sm:leading-none md:text-6xl mb-12">
        Unbeatable CCIE Results
      </h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 col-gap-8 row-gap-10">
        <li>
          <Lazyloader>
            <img src="/assets/results/result-1.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-2.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-3.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-4.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-5.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-6.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-7.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-8.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-9.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-10.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
        <li>
          <Lazyloader>
            <img src="/assets/results/result-11.png" alt="Unbeatable CCIE results and cisco courses" className="w-full rounded-md" />
          </Lazyloader>
        </li>
      </ul>
    </div>
  </section>
  )
}
