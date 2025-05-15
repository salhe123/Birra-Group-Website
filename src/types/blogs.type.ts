export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string; // ISO 8601 date format
  category: string;
  image: string; // URL of the image
  createdAt: string; // ISO 8601 date format
  updatedAt: string; // ISO 8601 date format
}

export interface GetBlogPostsResponse {
  blogs: BlogPost[];
}

export interface GetBlogPostResponse {
  blog: BlogPost;
}
