import { NextApiRequest, NextApiResponse } from "next";

import { makeNote } from "@/lib/prisma/notes";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "POST") {
    try {
      const prop = JSON.parse(request.body)
      const { noteFromDB, error }: any = await makeNote({ title: prop.title, content: "" })
      if (error) throw new Error(`${error}`);
      // console.log(noteFromDB)
      return response.status(201).json({ noteFromDB })
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }
  }

  response.setHeader("Allow", ["POST"])
  response.status(425).end(`Method ${request.method} is not allowed`)

}