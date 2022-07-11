import React from 'react'

// local imports
import { GitHubIcon } from '../components/Icons'

type Props = {
  data: { title: string; github: string; deployed: string; description: string }
}

export const WorkCard: React.FC<Props> = ({ data: { title, github, deployed, description } }) => {
  return (
    <div className="w-64 h-80 bg-zinc-700 p-4 shadow-lg shadow-[rgba(225,29,72,0.3)] rounded">
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
      <p className="mt-3 break-all text-ellipsis">{description}</p>
    </div>
  )
}
