import { Button } from "../Button";

import { HeroContainer, Video, HeroH1, HeroP, HeroButtons } from "./styles";
import Film from '../../videos/video-2.mp4'

export const HeroSection = () => {
  return (
    <HeroContainer>
      <Video src={Film} autoPlay loop muted />
      <HeroH1>Santa Catarina</HeroH1>
      <HeroP>O que você está esperando?</HeroP>
      <HeroButtons>
        <Button buttonStyle={false} buttonSize={false}>
          Conheça SC
        </Button>
        <Button buttonStyle={true} buttonSize={false}>
          Se inscreva 
        </Button>
      </HeroButtons>
    </HeroContainer>
  );
};
