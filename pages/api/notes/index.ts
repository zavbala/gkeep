import Notes from 'lib/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      const notes = await Notes.all();
      res.status(200).json(notes);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
