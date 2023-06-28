import { styled } from "@stitches/react";

export const HeroContainer = styled("div", {
  //   background: 'url("../../images/img-home.jpg") center center/cover no-repeat',
  height: "calc(100vh - 80px)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.2)",
  objectFit: "contain",
  justifyContent: "center",
});

export const Video = styled("video", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: -1,
});

export const HeroH1 = styled("h1", {
  color: "#fff",
  fontSize: "100px",
  marginTop: "-100px",

  "@media screen and (max-width: 960px)": {
    fontSize: "70px",
    marginTop: "-150px",
  },
  "@media screen and (max-width: 768px)": {
    fontSize: "50px",
    marginTop: "-100px ",
  },
});

export const HeroP = styled("p", {
  marginTop: "8px",
  color: "#fff",
  fontSize: "32px",
  fontFamily: "Trebuchet MS, sans-serif",

  "@media screen and (max-width: 768px)": {
    fontSize: "38px",
  },
});

export const HeroButtons = styled("div", {
  marginTop: "32px",

  "& button": {
    margin: "6px",

    "@media screen and (max-width: 768px)": {
      width: "100%",
    },

    "& svg": {
      marginLeft: "4px",
    },
  },
});
