import React from 'react'

// local imports
import { WorkCard } from '../components/WorkCard'

const data = [
  {
    title: 'Profile Site',
    github: 'https://github.com/KuroiCc/profile-site',
    deployed: 'http://kuroi.link/',
    description:
      'プロフィールサイト、今見ているこのサイトです。React.js+TypeScript+TailwindCSSで作成しました。Headerのアニメーションはcssのみで作りました。'
  },
  {
    title: '有名人と顔の類似度',
    github: 'https://github.com/KuroiCc/myjlab2021-2nd-final-work',
    deployed: 'http://kuroi.link/star_face_similarity/',
    description: 'どの有名人と一番似ているかを比較します。'
  },
  {
    title: 'greedy_snake',
    github: '#',
    deployed: 'http://kuroi.link/greedy_snake/',
    description: 'クラシックなgreedy_snakeゲームです。TypeScript練習用プロジェクトです。'
  },
  {
    title: '麻雀ふ数計算',
    github: 'https://github.com/KuroiCc/mahjong-record-counter-react',
    deployed: 'http://kuroi.link/count_points/',
    description: '麻雀ふ数を簡単に計算できるアプリです。'
  },
  {
    title: '麻雀点数数集計',
    github: 'https://github.com/KuroiCc/mahjong-record-counter-python',
    deployed: 'http://kuroi.link/mahjong_record_counter/',
    description: '麻雀の点数を簡単に集計できるアプリです。'
  }
]

export const Works = () => {
  return (
    <section className="text-zinc-100">
      <div className="flex mt-14">
        <h1 className="px-5 text-3xl w-fit bg-rose-600">What I&apos;ve Built</h1>
        <div className="border-[18px] border-t-transparent border-r-transparent border-rose-600 w-0"></div>
      </div>
      <div className="flex flex-wrap px-12 py-6">
        {data.map((item) => (
          <div
            className="flex justify-center flex-1 mt-20 sm:mr-10 sm:flex-none "
            key={item.title}
          >
            <WorkCard data={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
