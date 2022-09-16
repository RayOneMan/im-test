import React from "react";
import s from "./MyButton.module.scss";

interface IButtonProps {
  value: string;
  onClick?: React.MouseEventHandler;
  type?: string;
  disabled?: any;
  className?: string;
}

const MyButton: React.FC<IButtonProps> = (props: any) => {
  return (
    <button
      className={s.myButton}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props?.value}
    </button>
  );
};

export default MyButton;
