import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await addPost(req, res);
  } else if (req.method === 'GET') {
    return await readPosts(req, res);
  } else {
    return res.status(405).json({ message: 'method not allowed', success: false });
  }
}

async function addPost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newEntry = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content
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
    const allPosts = await prisma.post.findMany();
    return res.status(200).json(allPosts, { success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'error reading from db', success: false });
  }
}
