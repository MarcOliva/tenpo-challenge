import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
      primary: "#03ff94",
      primaryHover: "#97fdb4",
      error: "#dc2626",
      lightGray: "#f5f5f5",
      lightGray10: "#f8fafc",
      lightGray20: "#ddd",
      lightGray40: "#888",
      lightGray50: "#666",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1280px)",
    bp5: "(min-width: 1536px)",
    bp6: "(min-width: 1920px)",
    bp7: "(max-width: 480px)",
    bp8: "(max-width: 768px)",
    bp9: "(max-width: 1024px)",
    bp10: "(max-width: 1280px)",
    bp11: "(max-width: 1536px)",
    bp12: "(max-width: 1920px)",
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value }),
  },
});
