import EmptyStart from "@/components/Main/EmptyStart"
import EachNote from "@/components/Main/EachNote"
import { getNotes } from "@/lib/prisma/notes"

// import Link from "next/link"
import React from 'react'

export default async function Users() {
  const { notes } = await getNotes()
  // const notes: any[] = []

  if (notes?.length === 0) {
    return <EmptyStart/>
  }

  return (
    <div className="space-y-2">
    	<p className="text-sm opacity-70">Notes</p>
      <article>if in react in tsx </article>
    	<div className="grid gap-2 grid-cols-fluid w-full bg-orange-">
	      {
	        notes?.map((note: any)=>(
	          <EachNote title={note.title} key={note.id} url={note.id}/>
	        ))
	      }
	    </div>
    </div>
  )
}
