import React from 'react'

type Props = {
  src: string
  data: { [key: string]: React.ReactNode }[]
}

export const ProfileDetail: React.FC<Props> = ({ src, data }) => {
  return (
    <section className="text-zinc-100">
      <div className="flex mt-14">
        <h1 className="px-5 text-3xl w-fit bg-rose-600">More about Me</h1>
        <div className="border-[18px] border-t-transparent border-r-transparent border-rose-600 w-0"></div>
      </div>
      <div className="py-16 px-6">
        <table className="m-auto">
          <tbody>
            <tr className="border-b border-dashed">
              <td className="pb-4 pl-5" colSpan={2}>
                <img className="w-20 h-20 rounded-full" src={src} alt="SelfIcon" />
              </td>
            </tr>
            {data.map((item) => {
              const key = Object.keys(item)[0]
              const value = Object.values(item)[0] as React.ReactNode
              return (
                <tr className="border-b border-dashed" key={key}>
                  <td className="py-3 text-right align-top">{key}:</td>
                  <td className="py-3 pl-10">{value}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
