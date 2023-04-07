import { NextApiRequest, NextApiResponse } from "next";

import { updateNoteByShortId } from "@/lib/prisma/notes";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "PATCH") {
    try {
      const prop = JSON.parse(request.body)
      const { note, error }: any = await updateNoteByShortId(prop.shortid, prop.content)
      if (error) throw new Error(`${error}`);
      // console.log(noteFromDB)
      return response.status(200).json({ note })
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }

  response.setHeader("Allow", ["PATCH"])
  response.status(425).end(`Method ${request.method} is not allowed`)

}