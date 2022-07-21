import React from 'react'

// local imports
import { WorkCard } from '../components/WorkCard'
import data from '../assets/works.json'

export const Works = () => {
  return (
    <section className="text-zinc-100">
      <div className="flex mt-14">
        <h1 className="px-5 text-3xl w-fit bg-rose-600">What I&apos;ve Built</h1>
        <div className="border-[18px] border-t-transparent border-r-transparent border-rose-600 w-0"></div>
      </div>
      <div className="flex flex-wrap justify-center px-12 py-6 m-auto w-fit">
        {data.map((item) => (
          <div className="mx-5 my-10" key={item.title}>
            <WorkCard data={item} />
          </div>
        ))}
        <div className="w-64 mx-5"></div>
        <div className="w-64 mx-5"></div>
        <div className="w-64 mx-5"></div>
        <div className="w-64 mx-5"></div>
      </div>
    </section>
  )
}
