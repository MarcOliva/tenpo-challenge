import { useResponsiveColumns } from "@/hooks/useResponsiveColumns";
import { Post } from "@/models/Post";
import { useEffect, useState } from "react";

const CARD_GAP = 20;

export const usePostsGrid = (posts: Post[]) => {
  const columns = useResponsiveColumns();
  const [containerWidth, setContainerWidth] = useState(1200);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef) return;
    function handleResize() {
      if (containerRef) setContainerWidth(containerRef.offsetWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [containerRef]);

  const rows = Math.ceil(posts.length / columns);
  const cardWidth =
    columns > 0 ? (containerWidth - CARD_GAP * (columns - 1)) / columns : 300;
  return {
    columns,
    containerWidth,
    containerRef,
    rows,
    cardWidth,
    setContainerRef,
  };
};
