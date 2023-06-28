import { styled } from "../../Styles/styles"

export const Container = styled("div", {
  backgroundColor: "#242424",
  padding: "4rem 0 2rem 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "center",
});

export const FooterSubscription = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "24px",
  padding: "24px",
  color: "#fff",
});

export const FooterHeading = styled("p", {
  fontFamily: "Trebuchet Ms, sans-serif",
  marginBottom: "24px",
  fontSize: "24px",
  textAlign: 'center'
});

export const FooterText = styled("p", {
  fontFamily: "Trebuchet Ms, sans-serif",
  marginBottom: "24px",
  fontSize: "20px",
});

export const FooterInputs = styled("div", {});

export const Form = styled("form", {});

export const Input = styled("input", {
  padding: "8px 20px",
  borderRadius: "2px",
  marginRight: "10px",
  outline: "none",
  fontSize: "18px",
  marginBottom: "16px",
  border: "1px solid #fff",

  "&::placeholder": {
    color: "#b1b1b1",
  },
});

export const FooterLinks = styled("div", {
  // width: "100%",
  // maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  "@md": {
    flexDirection: "column",
    alignItems: "center"
  }
});

export const FooterLinksWrapper = styled("div", {
  display: "flex",
});


export const FooterLinksItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "16px",
  textAlign: "left",
  width: "160px",

  a: {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "0.5rem",

    "&:hover": {
      color: "#e9e9e9",
      transition: "0.3s ease-out",
    },
  },
});

export const FooterH2 = styled("h2", {
  marginBottom: "16px",
  color: "#fff",
});

export const SocialMedia = styled("section", {
  maxWidth: "1000px",
  width: "100%",
  margin: "auto",
  alignItems: "center",
  "@md": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

export const SocialMediaWrap = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  maxWidth: "1000px",
  margin: "40px auto 0 auto",
});

export const FooterLogo = styled("div", {
  a: {
    color: "#fff",
    justifySelf: "start",
    marginLeft: "20px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
});

export const Rights = styled("small", {
  color: "#fff",
  marginBottom: "16px",
});

export const SocialIcons = styled("div", {
  ".social-icon-link": {
    color: "#fff",
    fontSize: "24px",
  },
});