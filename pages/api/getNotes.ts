import { getNotes, makeNote } from "@/lib/prisma/notes";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "GET") {
    try {
      const { notes, error }: any = await getNotes()
      if (error) throw new Error(`${error}`);
      // console.log(noteFromDB)
      return response.status(200).json({ notes })
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }

  response.setHeader("Allow", ["GET"])
  response.status(425).end(`Method ${request.method} is not allowed`)

}