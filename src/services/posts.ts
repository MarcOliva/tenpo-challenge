import axios from "@/lib/axios";
import { Post } from "@/models/Post";

function generateFakePosts(basePosts: Post[], total: number): Post[] {
  const result: Post[] = [];
  let currentId = 1;
  while (result.length < total) {
    for (const post of basePosts) {
      if (result.length >= total) break;
      result.push({
        ...post,
        id: currentId,
        title: `${post.title} (fake #${currentId})`,
      });
      currentId++;
    }
  }
  return result;
}

export const postsService = {
  // El api solo trae 100 posts , por lo que se usa uan funcion para generar los 2000 posts
  getPosts: async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>("/posts");
    const basePosts = response.data;
    return generateFakePosts(basePosts, 2000);
  },
};
