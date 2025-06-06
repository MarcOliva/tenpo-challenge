import RouteGuard from "@/components/auth/RouteGuard";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import PostsList from "@/components/posts/PostsList";
import { Post } from "@/models/Post";
import {
  HomeRoot,
  ErrorContainer,
  Error,
  Header,
  HeaderTitle,
} from "./Home.styled";

interface HomeViewProps {
  error: string | null;
  initialPosts: Post[];
}

export default function HomeView({ error, initialPosts }: HomeViewProps) {
  return (
    <RouteGuard>
      <PrivateLayout>
        <HomeRoot>
          <Header>
            <HeaderTitle>Posts</HeaderTitle>
          </Header>
          {error ? (
            <ErrorContainer>
              <Error>{error}</Error>
            </ErrorContainer>
          ) : (
            <PostsList posts={initialPosts} />
          )}
        </HomeRoot>
      </PrivateLayout>
    </RouteGuard>
  );
}
