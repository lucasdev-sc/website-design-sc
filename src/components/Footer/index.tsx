import { FaTypo3 } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { SocialIconsData } from "./SocialIconsData";

import {
  Container,
  FooterSubscription,
  FooterHeading,
  FooterText,
  FooterInputs,
  Form,
  Input,
  FooterLinks,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterH2,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  Rights,
  SocialIcons,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <FooterSubscription>
        <FooterHeading>
          Junte-se à newsletter de Aventuras para receber nossas melhores ofertas de férias.
        </FooterHeading>
        <FooterText>Você pode cancelar a inscrição a qualquer momento.</FooterText>
        <FooterInputs>
          <Form>
            <Input type="email" name="email" placeholder="Your Email" />
            <Button buttonStyle={false} buttonSize={true}>
              Inscrever-se
            </Button>
          </Form>
        </FooterInputs>
      </FooterSubscription>

      <FooterLinks>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterH2>Sobre nós</FooterH2>
            <Link to="/sign-up">Como funciona?</Link>
            <Link to="/">Testemunhos</Link>
            <Link to="/">Carreiras</Link>
            <Link to="/">Investidoras</Link>
            <Link to="/">Termos de serviço</Link>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterH2>Contate-nos</FooterH2>
            <Link to="/">Contato</Link>
            <Link to="/">Suporte</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Patrocínios</Link>
          </FooterLinksItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterH2>Videos</FooterH2>
            <Link to="/">Enviar vídeo</Link>
            <Link to="/">Embaixadores</Link>
            <Link to="/">Agência</Link>
            <Link to="/">Influenciador</Link>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterH2>Social Media</FooterH2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinks>

      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo>
            <Link to="/">
              LAPTRAVEL<FaTypo3 />
            </Link>
          </FooterLogo>
        </SocialMediaWrap>
        <Rights>TRVL © 2023</Rights>
        <SocialIcons>
          {SocialIconsData.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className={item.class}
                target={item.target}
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            );
          })}
        </SocialIcons>
      </SocialMedia>
    </Container>
  );
};
