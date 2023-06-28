import { ButtonTag } from "./styles";

interface PropsButton {
  children?: any;
  type?: any;
  onClick?: any;
  buttonStyle: boolean;
  buttonSize: boolean;
}

export const Button = (props: PropsButton) => {
  return (
    <a href="https://www.instagram.com/turismonosul/" className="btn-mobile" target="_blank">
      <ButtonTag
        onClick={props.onClick}
        type={props.type}
        size={props.buttonSize}
        style={props.buttonStyle}
      >
        {props.children}
      </ButtonTag>
    </a>
  );
};