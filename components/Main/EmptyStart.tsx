// import { makeNote } from '@/lib/prisma/notes'
import Link from 'next/link'
import React from 'react'

export default async function EmptyStart() {
  
  // const mk = await makeNote({
  //   title: "",
  //   content: "",
  // })

  return (
    <div className='w-full h-full flex items-center justify-center flex-col space-y-2 text-sm'>
      <p className="italic opacity-60">
        Select a note to view.
      </p>
      {/* <button type="button" className="text-blue-500 hover:text-blue-600 hoverunderline hover:bg-blue-100 px-2 py-1.5 rounded-full">Create new note</button> */}
      <p className="">
        <Link href={"/new"} className="text-blue-500 hover:text-blue-600 hoverunderline hover:bg-blue-200 px-2 py-1.5 rounded-full">Create new note</Link>
      </p>
    </div>
  )
}
