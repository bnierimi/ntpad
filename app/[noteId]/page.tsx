import Container from "@/components/Main/Container"
import Nav from "@/components/Main/Nav"
import { getNoteById } from "@/lib/prisma/notes"
import Image from "next/image"

import Avatar from "boring-avatars";

export default async function Page({ params }: any) {

  const { note } = await getNoteById(params.noteId)
  const updatedAt = `${note?.updatedAt.getDate()}/${note?.updatedAt.getMonth()+1}/${note?.updatedAt.getFullYear()}`

  return (
    <div className="space-y-3 w-full h-full flex flex-col">
      <Nav>
        <div className="space-x-2 flex items-center px-4 py-0.5">
          {/* <div className="rounded-full bg-rose-500 w-8 h-8 flex items-center justify-center">
            <p className="font-medium text-lg ">{note?.title[0]}</p>
          </div> */}
          <Avatar
            size={35}
            name={note.id}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <div className="flex flex-col -space-y-0.5">
            <h1 className="text-lg font-medium">{note?.title}</h1>
            <p className="text-gray-600 text-xs">Edited on {updatedAt}</p>
          </div>
        </div>
      </Nav>
      <div className="bg-gray-100 w-full h-full rounded-lg">
        {/* <div id="" className="p-2">
          {note?.content}
        </div> */}
        <textarea name="editor-textarea" id="editor-textarea" className="w-full h-full outline-none resize-none bg-transparent" defaultValue={note?.content}></textarea>
        {/* <textarea name="editor-textarea" id="editor-textarea" cols="30" rows="10" bind:value={value}></textarea> */}
      </div>
    </div>
    // <Container>
    // </Container>
  )
}