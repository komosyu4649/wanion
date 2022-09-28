import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await searchPost(req, res);
  }
}

async function searchPost(req: NextApiRequest, res: NextApiResponse) {
  const { searchText } = req.body;
  try {
    const result = await prisma.post.findMany({
      where: {
        title: {
          search: searchText
        }
        // content: {
        //   search: searchText
        // },
        // url: {
        //   search: searchText
        // }
      }
    });
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'error reading from db search', success: false });
  }
}
