import React from 'react'
import data from './icons.json'

type Props = {
  className?: string
  iconName: string | undefined
  iconW?: number
  iconH?: number
}

const Icons: {
  [key: string]: {
    name: string
    src: string
  }
} = data

export const ItIcon: React.FC<Props> = ({ className, iconName, iconW = 20, iconH = 20 }) => {
  console.log(iconName)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = iconName && Icons[iconName.toLowerCase()]
  if (!icon) return null
  return (
    <div className={className}>
      <div className="flex">
        {icon ? (
          <img className="mr-1" src={icon.src} width={iconW} height={iconH} alt={icon.name} />
        ) : (
          <div
            className="rounded-full bg-rose-500"
            style={{
              width: iconW,
              height: iconH
            }}
          ></div>
        )}
        {icon?.name && iconName}
      </div>
    </div>
  )
}
