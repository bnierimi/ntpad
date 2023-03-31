import React from 'react'

export default function EmptyStart() {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col space-y-2'>
      <p className="italic opacity-60">
        All your notes will appear here.
      </p>
      <p className="">
        <a href="/new" className="text-blue-500 hover:text-blue-600 hoverunderline hover:bg-blue-100 px-2 py-1.5 rounded-full">Create new note</a>
      </p>
    </div>
  )
}
