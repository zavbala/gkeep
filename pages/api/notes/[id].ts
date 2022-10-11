import Notes from 'lib/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const ID = query.id as string;

  switch (method) {
    case 'GET':
      try {
        const myNote = await Notes.get(ID);
        res.status(200).json(myNote);
      } catch (error) {
        res.status(404).json({ message: 'Note Not Found' });
      }

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
