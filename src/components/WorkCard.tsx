import React, { useState, useEffect } from 'react'

// local imports
import { ItIcon } from '.'
import { GitHubIcon } from '../components/Icons'

type Props = {
  data: { title: string; github: string; deployed: string; description: string }
}

export const WorkCard: React.FC<Props> = ({ data: { title, github, deployed, description } }) => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState<{ [key: string]: number } | undefined>(undefined)

  useEffect(() => {
    if (github) {
      const repo = github.split('/')
      const url = `https://api.github.com/repos/${repo[3]}/${repo[4]}/languages`
      fetch(url)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if (!res?.message) {
            setLang(res)
          }
        })
    }
  }, [])
  console.log(title, JSON.stringify(lang))
  return (
    <div className="w-64 h-80 bg-zinc-700 p-4 shadow-lg shadow-[rgba(225,29,72,0.3)] rounded hover:ring hover:ring-[rgba(225,29,72,0.8)]">
      <div className="line-clamp-6">
        {/* github */}
        <a
          className="text-blue-500 hover:underline"
          href={github}
          target="_blank"
          rel="noopener noreferrer external"
        >
          <div className="flex items-baseline">
            <h2 className="text-xl">{title}</h2>
            <GitHubIcon className="w-5 h-5 mr-1.5 fill-zinc-100 ml-3" />
          </div>
        </a>
        {/* icons */}
        <div className="flex mt-1 text-xs">
          <p>{lang && <ItIcon iconH={10} iconW={10} iconName={Object.keys(lang)[0]} />}</p>
          <p className="ml-2">
            {lang && <ItIcon iconH={10} iconW={10} iconName={Object.keys(lang)[1]} />}
          </p>
        </div>

        {/* deployed */}
        {deployed && (
          <p className="mt-3">
            <a
              className="text-blue-500 hover:underline"
              href={deployed}
              target="_blank"
              rel="noopener noreferrer external"
            >
              デプロイ先
            </a>
          </p>
        )}
        <p className="mt-3 text-sm break-all">{description}</p>
      </div>
    </div>
  )
}
