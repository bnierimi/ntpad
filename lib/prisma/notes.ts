import { Note } from "@/types"
import prisma from "."

import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId();

uid.uuidLength = 9;

// import Note from "@/types"

export async function getNotes() {
  try {
    const notes = await prisma.note.findMany({
      include: {
        labels: {
          select: {
            id: true, name: true
          }
        }
      }
    })
    // console.log(notes)
    return { notes }
  } catch (error) {
    return { error }
  }
}

export async function makeNote(note: Note) {
  try {
    const noteFromDB = await prisma.note.create({
      data: { ...note, shortid: uid() }
    })
    return { noteFromDB }
  } catch (error) {
    return { error }
  }
}

export async function getNoteByShortId(shortid: string) {
  try {
    const note = await prisma.note.findUnique({
      where: { shortid },
      include: { labels: { select: { id: true, name: true } } }
    })
    // console.log(note?.labels.name)
    // console.log(`from notes: ${JSON.stringify(note)}`)
    return { note }
  } catch (error) {
    return { error }
  }
}

export async function updateNoteByShortId(shortid: string, content: any) {
  try {
    const note = await prisma.note.update({
      data: { content }, where: { shortid }
    })
    // console.log(note?.labels.name)
    return { note }
  } catch (error) {
    return { error }
  }
}