import React from "react";
import { FieldRenderProps } from "react-final-form";
import s from "./MyInput.module.scss";

type Props = FieldRenderProps<string, any>;

const MyInput: React.FC<Props> = ({ input, type, meta, ...rest }: Props) => (
  <input className={s.myField} type={type} {...input} {...rest} />
);

export default MyInput;
