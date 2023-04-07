"use client"

import EachNote from "@/components/Main/EachNote"
import { useState, useEffect } from "react"

// export const revalidate = 10;

export default function Notes() {

  const [notes, setNotes] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("/api/getNotes")
    .then((res) => res.json())
    .then((data) => {
      setNotes(data)
      setLoading(false)
    })
  }, [])
  
  if (isLoading) return <div className="w-full h-full flex items-center justify-center italic opacity-60 text-sm">
                          Loading...
                        </div>

  if (!notes || notes.notes.length === 0) return <div className="w-full h-full flex items-center justify-center italic opacity-60 text-sm">
                      You do not have any note, create one.
                    </div>

  return (
    <div className="px-3 md:px-0">
      {/* <button onClick={()=>router.push("/new")} className="p-1 bg-rose-500 text-lg font-bold">
        +
      </button> */}
    	<div className="grid gap-1 grid-cols-fluid w-full bg-orange- mb-2">
	      {/* {
	        JSON.stringify(notes)
	      } */}
	      {
	        notes.notes.map((note: any)=>{
            // note.id = note.id.slice(14)
	          if (note.deleted !== true) {
              return <EachNote title={note.title} key={note.shortid} url={note.shortid}/>
            }
	        })
	      }
	    </div>
    </div>
  )
}
