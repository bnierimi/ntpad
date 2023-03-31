import Link from 'next/link'
import React from 'react'

export default function SideBtns({ text, icon, href, id, style }: any) {
  return (
    <div>
      <Link href={`${href}`}>
        <div id={id?id:""} className={`p-2 rounded-lg hover:bg-gray-300 flex items-center w-full space-x-2 ${style}`}>
          <i className={`icon icon-${icon} flex text-lg mx-0.5`}></i>
          <span className="">{text}</span>
        </div>
      </Link>
    </div>
  )
}
