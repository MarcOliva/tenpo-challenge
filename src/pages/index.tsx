import { Post } from "@/models/Post";
import { postsService } from "@/services/posts";
import HomeView from "@/views/Home";

import { GetServerSideProps } from "next";

interface HomeProps {
  initialPosts: Post[];
  error: string | null;
}
//considere esta la mejor opcion para obtener los posts , ya que el api al ser publica podemos precargar los posts del lado del servidor

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const posts = await postsService.getPosts();
    return {
      props: {
        initialPosts: posts || [],
        error: null,
      },
    };
  } catch {
    return {
      props: {
        initialPosts: [],
        error: "Error al cargar los posts. Por favor, intente nuevamente.",
      },
    };
  }
};

export default function Home({ initialPosts = [], error }: HomeProps) {
  return <HomeView initialPosts={initialPosts} error={error} />;
}
