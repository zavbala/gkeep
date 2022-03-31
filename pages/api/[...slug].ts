import type { NextApiRequest, NextApiResponse } from "next";
import Notes from "lib/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;
  const [path, noteID] = query.slug as [string, string];

  if (noteID) {
    try {
      const note = await Notes.get(noteID);
      res.status(200).json(note);
    } catch (e) {
      res.status(404).json({ detail: "Item Not Found" });
    }
  }

  const notes = await Notes.all();
  res.status(200).json(notes);
};
