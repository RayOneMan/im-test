import { Field } from "react-final-form";
import s from "./ErrorField.module.scss";

export const ErrorField = ({ name }: any) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span className={s.field__error}>{error}</span> : null
    }
  />
);
