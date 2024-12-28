export interface Author {
  _id: string;
  name: string;
  avatar: string;
  verified?: boolean;
}

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  category: string;
  views: number;
  author: Author;
  imageUrl?: string;
}
