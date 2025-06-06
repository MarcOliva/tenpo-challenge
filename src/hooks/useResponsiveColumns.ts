import { useEffect, useState } from "react";

export const useResponsiveColumns = () => {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) setColumns(1);
      else if (window.innerWidth <= 1024) setColumns(2);
      else if (window.innerWidth <= 1200) setColumns(3);
      else setColumns(4);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columns;
};
