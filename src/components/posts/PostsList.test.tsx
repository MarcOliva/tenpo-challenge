import React from "react";
import { render, screen } from "@testing-library/react";
import PostsList from "./PostsList";

jest.mock("./hooks/usePostsGrid", () => ({
  usePostsGrid: () => ({
    columns: 1,
    containerWidth: 300,
    rows: 1,
    cardWidth: 300,
    setContainerRef: jest.fn(),
  }),
}));

jest.mock("react-virtualized", () => {
  const original = jest.requireActual("react-virtualized");
  return {
    ...original,
    Grid: ({
      cellRenderer,
      columnCount,
      rowCount,
    }: {
      cellRenderer: (props: {
        columnIndex: number;
        rowIndex: number;
        key: string;
        style: React.CSSProperties;
      }) => React.ReactNode;
      columnCount: number;
      rowCount: number;
    }) => (
      <div>
        {Array.from({ length: rowCount }).map((_, rowIndex) =>
          Array.from({ length: columnCount }).map((_, columnIndex) =>
            cellRenderer({
              columnIndex,
              rowIndex,
              key: `${rowIndex}-${columnIndex}`,
              style: {},
            })
          )
        )}
      </div>
    ),
  };
});

const mockPosts = [{ id: 1, title: "Post 1", body: "Body 1", userId: 1 }];

describe("PostsList", () => {
  it("renderiza el título del post", () => {
    render(<PostsList posts={mockPosts} />);
    expect(screen.getByTestId("post-title-1")).toHaveTextContent("Post 1");
  });

  it("renderiza el cuerpo del post", () => {
    render(<PostsList posts={mockPosts} />);
    expect(screen.getByTestId("post-body-1")).toHaveTextContent("Body 1");
  });

  it("renderiza los metadatos del post", () => {
    render(<PostsList posts={mockPosts} />);
    expect(screen.getByText("User ID: 1")).toBeInTheDocument();
    expect(screen.getByText("Post ID: 1")).toBeInTheDocument();
  });
});
