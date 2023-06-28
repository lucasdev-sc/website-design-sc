import { styled } from "@stitches/react";

export const CardItem = styled("li", {
  display: "flex",
  flex: 1,
  margin: "0 1rem",
  borderRadius: "10px",

  a: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
    "-webkit-filter": "drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))",
    filter: "drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))",
    borderRadius: "10px",
    overflow: "hidden",
    textDecoration: "none",
  },

  "@media only screen and (max-width: 1024px)": {
    marginBottom: '2rem',
  },
});
export const CardFig = styled("figcaption", {});

export const Figure = styled("figure", {
  position: "relative",
  width: "100%",
  paddingTop: "67%",
  overflow: "hidden",

  "&::after": {
    content: "attr(data-category)",
    position: "absolute",
    bottom: 0,
    marginLeft: "10px",
    padding: "6px 8px",
    maxWidth: "calc((100%) - 60px)",
    fontSize: "12px",
    fontWeight: 700,
    color: "#fff",
    backgroundColor: "#1f98f4",
    boxSizing: "border-box",
  },
});

export const Image = styled("img", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "block",
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "100%",
  objectFit: "cover",
  transition: "all 0.2s linear",

  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const CardInfo = styled("div", {
  padding: "20px 30px 30px",
});

export const CardH5 = styled("h5", {
  color: "#252e48",
  fontSize: "18px",
  lineHeight: "24px",
});
