import React from 'react'

export default function Nav({ title }: any) {
  return (
    <nav className="bg-slate- flex items-center px-4 py-2 space-x-4 rounded-t-lg border-b border-gray-200">
      <button className="rounded-full bg-red- hover:bg-gray-200 p-2 md:hidde">
        <i className="icon icon-ic_fluent_arrow_left_20_regular flex text-base"></i>
      </button>

      <div className="flex items-center space-x-2">
        <i className="icon icon-ic_fluent_archive_20_regular flex text-xl bg-rose-500 rounded-full p-1.5"></i>
        <p className="text-base">{title}</p>
      </div>
    </nav>
  )
}
