import { useCallback } from "react";
import { Grid as VirtualizedGrid, GridCellProps } from "react-virtualized";
import { Post } from "@/models/Post";
import {
  Container,
  PostCard,
  PostTitle,
  PostBody,
  PostMeta,
  PostDescription,
} from "./PostList.styled";
import { usePostsGrid } from "./hooks/usePostsGrid";

interface PostsListProps {
  posts: Post[];
}

const CARD_HEIGHT = 320;
const CARD_GAP = 20;

const PostsList = ({ posts }: PostsListProps) => {
  const { columns, containerWidth, rows, cardWidth, setContainerRef } =
    usePostsGrid(posts);
  const cellRenderer = useCallback(
    ({ columnIndex, rowIndex, key, style }: GridCellProps) => {
      const index = rowIndex * columns + columnIndex;
      if (index >= posts.length) return null;
      const post = posts[index];
      return (
        <div
          key={key}
          style={{
            ...style,
            padding: CARD_GAP / 2,
          }}
        >
          <PostCard>
            <PostTitle data-testid={`post-title-${post.id}`}>
              {post.title}
            </PostTitle>
            <PostBody data-testid={`post-body-${post.id}`}>
              {post.body}
            </PostBody>
            <PostMeta>
              <PostDescription>User ID: {post.userId}</PostDescription>
              <PostDescription>Post ID: {post.id}</PostDescription>
            </PostMeta>
          </PostCard>
        </div>
      );
    },
    [posts, columns]
  );

  const maxHeight = Math.min(
    window.innerHeight * 0.8,
    rows * CARD_HEIGHT + CARD_GAP * 2
  );

  return (
    <Container ref={setContainerRef}>
      {containerWidth > 0 && (
        <VirtualizedGrid
          cellRenderer={cellRenderer}
          columnCount={columns}
          columnWidth={cardWidth}
          height={maxHeight}
          rowCount={rows}
          rowHeight={CARD_HEIGHT}
          width={containerWidth}
          style={{ outline: "none", marginBottom: 20 }}
        />
      )}
    </Container>
  );
};

export default PostsList;
