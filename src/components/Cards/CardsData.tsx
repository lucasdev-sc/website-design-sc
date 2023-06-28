import { Link } from "react-router-dom";

import {
  CardItem,
  Figure,
  Image,
  CardInfo,
  CardH5,
} from "./stylesData";

interface PropsCard {
  src: string;
  text: string;
  label: string;
  path: string;
}

export const CardsData = (props: PropsCard) => {
  return (
    <>
      <CardItem>
        <Link to={props.path} className="item">
          <Figure data-category={props.label}>
            <Image src={props.src} alt="Travel Image" />
          </Figure>
          <CardInfo>
            <CardH5>{props.text}</CardH5>
          </CardInfo>
        </Link>
      </CardItem>
    </>
  );
};
