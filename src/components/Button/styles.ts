import { styled } from "@stitches/react";

export const ButtonTag = styled("button", {
  padding: "8px 20px",
  borderRadius: "2px",
  outline: "none",
  border: "none",
  cursor: "pointer",

  variants: {
    size: {
      true: { // Medium
        padding: "8px 20px",
        fontSize: "18px",

        "&:hover": {
          backgroundColor: "#fff",
          color: "#242424",
          transition: "all 0.3s ease-out",
        },
      },
      false: { // Large
        padding: "12px 26px",
        fontSize: "20px",

        "&:hover": {
          backgroundColor: "#fff",
          color: "#242424",
          transition: "all 0.3s ease-out",
        },
      },
    },
    style: {
      true: { //Primary
        backgroundColor: "#fff",
        color: "#242424",
        border: "1px solid #fff",
      },
      false: { //Outline
        backgroundColor: "transparent",
        color: "#fff",
        padding: "8px 20px",
        border: "1px solid #fff",
        transition: "all 0.3s ease-out",
      },
    },
  },
});
