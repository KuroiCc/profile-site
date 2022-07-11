import React from 'react'

// local imports
import { CodeAnimation, Profile, ProfileDetail, Works } from '../components'
import aboutMe from '../assets/aboutMe.json'
import SelfIcon from '../assets/Images/SelfIcon.webp'

export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aboutMeData = aboutMe.map((item: any) => {
    if (Object.keys(item)[0] === 'tech') {
      return {
        tech: (
          <div>
            {Object.keys(item.tech).map((key: string) => {
              return (
                <div className="mb-1.5" key={key}>
                  {key} :
                  <div className="flex flex-wrap max-w-md mt-1.5">
                    {item.tech[key].map(
                      (
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        tech: any
                      ) => (
                        <a
                          className="mr-2 mb-1.5"
                          target="_blank"
                          key={tech.title}
                          href={tech.href}
                          title={tech.title}
                          rel="noopener noreferrer external"
                        >
                          <img className="w-5 h-5" src={tech.src} alt={tech.alt} />
                        </a>
                      )
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )
      }
    } else {
      return item
    }
  })

  return (
    <div>
      <div className="m-auto sm:mb-10 sm:w-5/6 max-w-7xl sm:py-7">
        <CodeAnimation />
      </div>
      <div className="px-6 py-1 m-auto font-mono text-lg bg-rose-600 text-zinc-100">
        Oops! You found here!
      </div>
      <div className="m-auto">
        <Profile />
      </div>
      <div className="m-auto">
        <ProfileDetail src={SelfIcon} data={aboutMeData} />
      </div>
      <div className="m-auto">
        <Works />
      </div>
    </div>
  )
}
