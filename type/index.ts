export type allPostsType = {
  posts: [
    {
      id: number;
      title: string;
      url: string;
      content: string;
      category: string;
      createdAt: string;
    }
  ];
};

export type postsType = {
  post: {
    id: number;
    title: string;
    url: string;
    content: string;
    category: string;
    createdAt: string;
  };
};

export type postType = {
  id: number;
  title: string;
  url: string;
  content: string;
  category: string;
  createdAt: string;
};
