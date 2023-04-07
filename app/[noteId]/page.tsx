import Container from "@/components/Main/Container"
import Nav from "@/components/Main/Nav"
import { getNoteByShortId } from "@/lib/prisma/notes"
import Image from "next/image"
import Link from "next/link"

import Avatar from "boring-avatars";
import Editor from "@/components/Note/Editor"
import Label from "@/components/Note/Label"
import { cutId } from "@/lib/utils/cutId"

export default async function Page({ params }: any) {

  const newContent = ""

  // const { note } = await getNoteById(params.noteId)
  const { note } = await getNoteByShortId(params.noteId)
  console.log(note);

  const noteGetMonth = note?.updatedAt.getMonth()
  const updatedAt = `${note?.updatedAt.getDate()}/${noteGetMonth+1}/${note?.updatedAt.getFullYear()}`

  return (
    <div className="space-y- w-full h-full flex flex-col">
      
      <Nav>
        <div className="space-x-2 flex items-center py-2 bg-amber-">
          {/* <div className="rounded-full bg-rose-500 w-8 h-8 flex items-center justify-center">
            <p className="font-medium text-lg ">{note?.title[0]}</p>
          </div> */}
          <Link href={"/"} className="p-1.5 rounded-full hover:bg-gray-300/30 md:hidden">
            <i className="icon icon-ic_fluent_arrow_left_20_regular flex text-lg"></i>
          </Link>
          <div className="rounded-full overflow-hidden">
            <Avatar
              size={35}
              name={note?.title}
              variant="bauhaus"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          </div>
          <div className="flex flex-col -space-y-0.5">
            <h1 className="text-base font-medium">{note?.title}</h1>
            {/* <p className="text-gray-600 text-xs">Edited on {updatedAt}</p> */}
          </div>
        </div>
      </Nav>

      <div className="bg-gray-100 w-full h-full md:rounded-lg border-t border-t-gray-200 flex flex-col text-sm">
        <Editor id={note?.shortid} content={note?.content}/>
        <div className="bg-green- p-1 flex space-x-1.5">
          {
            note?.labels.map((note: any)=>{
              // note.id = note.id.slice(14)
              return (<Label label={note} key={note.id}/>)
            })
          }
        </div>
      </div>

    </div>
    // <Container>
    // </Container>
  )
}