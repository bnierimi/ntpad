import { Note } from "@/types"
import { makeNote, getNotes } from "@/lib/prisma/notes";

const handler = async (req: any, res: any) => {
  if (req.method === "GET") {
    try {
      const { notes, error } = await getNotes()
      if (error) throw new Error(`${error}`);
      return res.status(200).json({ notes })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method == "POST") {
    try {
      const data = req.body
      const { note, error } = await makeNote(data)
      if (error) throw new Error(`${error}`);
      return res.status(200).json({ note })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader("Allow", ["GET", "POST"])
  res.status(425).end(`Method ${req.method} is not allowed`)
}

export default handler