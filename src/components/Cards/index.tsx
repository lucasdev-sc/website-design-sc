import { CardsData } from "./CardsData";

import Img from "../../images/img-9.jpg";
import Img2 from "../../images/img-2.jpg";
import Img3 from "../../images/img-3.jpg";
import Img4 from "../../images/img-4.jpg";
import Img8 from "../../images/img-8.jpg";

import {
  Container,
  Title,
  CardsContainer,
  CardsWrapper,
  CardsItems,
} from "./styles";

export const Cards = () => {
  return (
    <Container>
      <Title>O que fazer em Santa Catarina</Title>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardsData
              src={Img}
              text="Alugue uma lancha e pague de rico no Caixa D'aço"
              label="Luxury"
              path="/services"
            />
            <CardsData
              src={Img2}
              text="Aprecia praias paradisiacas"
              label="View"
              path="/services"
            />
          </CardsItems>
          <CardsItems>
            <CardsData
              src={Img3}
              text="Roadtrip na interpraias com vista maravilhosa"
              label="Roadtrip"
              path="/services"
            />
            <CardsData
              src={Img4}
              text="Dê um pedal na ciclovia da Meia Praia, Itapema"
              label="Sports"
              path="/products"
            />
            <CardsData
              src={Img8}
              text="Inúmeras trilhas para fazer com família e amigos"
              label="Adrenaline"
              path="/sign-up"
            />
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Container>
  );
};
