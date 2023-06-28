import { styled } from "@stitches/react";

export const Nav = styled("nav", {
  background:
    "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.2rem",
  position: "sticky",
  top: 0,
  zIndex: 999,
});

export const NavContainer = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "80px",
  width: '100%',
  maxWidth: "1500px",

  ".navbar-logo": {
    color: "#fff",
    display: "flex",
    justifySelf: "start",
    marginLeft: "20px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2rem",
    alignItems: "center",

    "& svg": {
      marginLeft: "0.5rem",
      fontSize: "1.8rem",

      "@media screen and (max-width: 960px)": {
        color: "#fff",
        fontSize: "2rem",
      },
    },
  },

  "@media screen and (max-width: 960px)": {
    ".navbar-logo": {
      position: "absolute",
      top: 0,
      left: 0,
      transform: "translate(25%, 50%)",
    },
  },
});

export const MenuIcon = styled("div", {
  display: "none",

  "@media screen and (max-width: 960px)": {
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-100%, 60%)",
    fontSize: "1.8rem",
    cursor: "pointer",
  },
});

export const NavMenu = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(4, auto)",
  gap: "10px",
  listStyle: "none",
  textAlign: "center",
  width: "60wh",
  justifyContent: "end",
  marginRight: "2rem",

  variants: {
    active: {
      true: {
        "@media screen and (max-width: 960px)": {
          background: "#242222",
          left: 0,
          opacity: 1,
          transition: "all 0.5s ease",
          zIndex: 1,
        },
      },
      false: {},
    },
  },

  "@media screen and (max-width: 960px)": {
    display: "flex",
    justifyContent: 'center',
    flexDirection: "column",
    width: "100%",
    height: "calc(100vh - 80px)",
    position: "absolute",
    top: "80px",
    left: "-100%",
    opacity: 1,
    transition: "all 0.5s ease",
  },
});

export const NavItem = styled("li", {
  height: "80px",

  "& .nav-links": {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    height: "100%",

    "&:hover": {
      borderBottom: "4px solid #fff",
      transition: "all 0.2s ease-out",
    },
  },

  "& .nav-links-mobile": {
    display: "none",
  },

  "@media screen and (max-width: 960px)": {
    ".nav-links": {
      textAlign: "center",
      padding: "2rem",
      width: "100%",
      display: "table",

      "&:hover": {
        backgroundColor: "#fff",
        color: "#242424",
        borderRadius: 0,
      },
    },

    ".nav-links-mobile": {
      display: "block",
      textAlign: "center",
      margin: "2rem auto",
      borderRadius: "4px",
      width: "80%",
      textDecoration: "none",
      fontSize: "1.5rem",
      backgroundColor: "transparent",
      color: " #fff",
      padding: "14px 20px",
      border: "1px solid #fff",
      transition: "all 0.3s ease-out",

      "&:hover": {
        background: "#fff",
        color: "#242424",
        transition: "250ms",
      },
    },
  },
});
