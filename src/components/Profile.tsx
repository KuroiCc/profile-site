import React from 'react'

// local imports
import AGUIcon from '../assets/Icons/AGUIcon.png'
import SSIIcon from '../assets/Icons/SSIIcon.png'
import MyjLabIcon from '../assets/Icons/MyjLabIcon.png'
import { GitHubIcon, TwitterIcon, InstagramIcon } from '../components/Icons'

export const Profile: React.FC = () => {
  return (
    <section className="flex flex-col justify-center h-screen">
      <div className="px-12 font-mono text-zinc-100">
        <h1 className="text-5xl">Chen Cheng</h1>
        <p className="flex mt-4 text-xl">
          <span className="flex items-baseline">
            <img className="w-5 h-5 mr-1" src={AGUIcon} alt="AGUIcon" /> AGU,
          </span>
          <span className="flex items-baseline ml-1">
            <img className="w-5 h-5 mr-1" src={SSIIcon} alt="AGUIcon" /> SSI,
          </span>
          <span className="flex items-baseline ml-2">
            <img className="w-5 h-5 mr-1" src={MyjLabIcon} alt="AGUIcon" /> MYJ Lab.
          </span>
        </p>
        <p className="mt-1 text-2xl">Developer On the road of endless journeys...</p>
        {/* social */}
        <p className="flex flex-wrap mt-2">
          <a
            target="_blank"
            rel="noopener noreferrer external"
            href="https://github.com/KuroiCc"
            className="flex items-center mt-2 mr-2 hover:underline"
          >
            <GitHubIcon className="w-5 h-5 mr-1.5 fill-zinc-100" />
            KuroiCc
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer external"
            href="https://twitter.com/kuroi_cc"
            className="flex items-center mt-2 mr-2 hover:underline"
          >
            <TwitterIcon className="w-5 h-5 mr-1 fill-zinc-100" />
            @Kuroi_Cc
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer external"
            href="https://www.instagram.com/kuroi_cc/"
            className="flex items-center mt-2 mr-2 hover:underline"
          >
            <InstagramIcon className="w-5 h-5 mr-1 fill-zinc-100" />
            kuroi_cc
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer external"
            href="https://qiita.com/Kuroi_Cc"
            className="flex items-center mt-2 mr-2 hover:underline"
          >
            <img
              className="w-5 h-5 mr-2"
              src="https://cdn.qiita.com/assets/favicons/public/apple-touch-icon-ec5ba42a24ae923f16825592efdc356f.png"
              alt="qiita icon"
            />
            @Kuroi_Cc
          </a>
        </p>
        <p className="mt-4">
          <a className="hover:underline" href="mailto:chenchengmikuro@gmail.com">
            chenchengmikuro@gmail.com
          </a>
          <br />
          <a className="hover:underline" href="mailto:chenchengmikuro@gmail.com">
            a8119124@aoyama.jp <span className="text-sm">(Valid until 2023/03)</span>
          </a>
        </p>
      </div>
    </section>
  )
}
