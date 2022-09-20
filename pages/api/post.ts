import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createPost(req, res);
  } else if (req.method === 'GET') {
    return await readPosts(req, res);
  } else if (req.method === 'DELETE') {
    return await deletePost(req, res);
  } else {
    return res.status(405).json({ message: 'method not allowed', success: false });
  }
}

async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const { title, url, content, category } = req.body;
  try {
    const newEntry = await prisma.post.create({
      data: {
        title: title,
        url: url,
        content: content,
        category: category
        // createdAt: createdAt
      }
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('request error', error);
    res.status(500).json({ error: 'error adding post', success: false });
  }
}

async function readPosts(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const allPosts = await prisma.post.findMany({
      // orderBy: {
      //   createdAt: {
      //     sort: 'asc'
      //   }
      // }
    });
    return res.status(200).json(allPosts, { success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'error reading from db', success: false });
  }
}

async function deletePost(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  try {
    const postDelete = await prisma.post.delete({
      where: {
        id: id
      }
    });
    return res.status(200).json(postDelete);
  } catch (error) {}
}
