import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createPost(req, res);
  } else if (req.method === 'GET') {
    return await readPosts(req, res);
  } else if (req.method === 'DELETE') {
    return await deletePost(req, res);
  } else if (req.method === 'PUT') {
    return await updatePost(req, res);
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
      }
    });
    return res.status(200).json(newEntry);
  } catch (error) {
    console.error('request error', error);
    res.status(500).json({ error: 'error adding post', success: false });
  }
}

async function readPosts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allPosts = await prisma.post.findMany({});
    return res.status(200).json(allPosts);
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

async function updatePost(req: NextApiRequest, res: NextApiResponse) {
  const { id, title, url, content, category } = req.body;
  console.log(req.body);
  try {
    const postUpdate = await prisma.post.update({
      where: {
        id: id
      },
      data: {
        title: title,
        url: url,
        content: content,
        category: category
      }
    });
    return res.status(200).json(postUpdate);
  } catch (error) {}
}
