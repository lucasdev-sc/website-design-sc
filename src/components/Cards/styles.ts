import { styled } from "@stitches/react";

export const Container = styled("div", {
  padding: "4rem",
  background: "#fff",
});

export const Title = styled("h1", {
  textAlign: "center",
});

export const CardsContainer = styled("div", {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  maxWidth: "1120px",
  width: "90%",
  margin: "0 auto",
});

export const CardsWrapper = styled("div", {
  position: "relative",
  margin: "50px 0 45px",
});

export const CardsItems = styled("ul", {
  marginBottom: "24px",

  "@media only screen and (min-width: 1024px)": {
    display: "flex",
  },
});
