import { styled } from "@stitches/react";

import Img from "../../images/img-2.jpg";

export const Container = styled("div", {
  display: "flex",
  height: "calc(100vh - 80px)",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",

  backgroundImage: "url(" + Img + ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#fff",
});
