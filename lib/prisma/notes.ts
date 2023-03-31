import { Note } from "@/types"
import prisma from "."

// import Note from "@/types"

export async function getNotes() {
  try {
    const notes = await prisma.note.findMany()
    return { notes }
  } catch (error) {
    return { error }
  }
}

export async function makeNote(note: Note) {
  try {
    const noteFromDB = await prisma.note.create({
      data: note
    })
    return { noteFromDB }
  } catch (error) {
    return { error }
  }
}

export async function getNoteById(id: any) {
  try {
    const note = await prisma.note.findUnique({
      where: { id }
    })
    return { note }
  } catch (error) {
    return { error }
  }
}