export type allPostsType = {
  posts: [
    {
      id: number;
      title: string;
      content: string;
    }
  ];
};

export type postsType = {
  post: {
    id: number;
    title: string;
    content: string;
  };
};

export type postType = {
  id: number;
  title: string;
  content: string;
};
