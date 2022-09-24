export type allPostsType = {
  posts: [
    {
      category: string;
      content: string;
      createdAt: string;
      id: number;
      title: string;
      url: string;
    }
  ];
};

export type postsType = {
  post: {
    category: string;
    content: string;
    createdAt: string;
    id: number;
    title: string;
    url: string;
  };
};

export type postType = {
  category: string;
  content: string;
  createdAt: string;
  id: number;
  title: string;
  url: string;
};

export type postPropsType = {
  props: {
    category: string;
    content: string;
    createdAt: string;
    id: number;
    title: string;
    url: string;
  };
};

// export type postArrayType = {
//   category: string;
//   content: string;
//   createdAt: string;
//   id: number;
//   title: string;
//   url: string;
// };
