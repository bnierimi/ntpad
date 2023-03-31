import React from 'react'

export default function SideBtns({ text, icon, id, style }: any) {
  return (
    <button id={id?id:""} className={`p-2 rounded-lg hover:bg-gray-300 flex items-center w- space-x-2 ${style}`}>
      <i className={`icon icon-${icon} flex text-lg mx-0.5`}></i>
      <span className="">{text}</span>
    </button>
  )
}
