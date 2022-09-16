import { Field, Form } from "react-final-form";
import { useState } from "react";
import { loginValidation } from "../../utils/Validation";
import { ErrorField } from "../UI/ErrorField/ErrorField";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { loginMutation } from "../../api/loginMutation";

import FormError from "../UI/FormError/FormError";
import MyInput from "../UI/Input/MyInput";
import MyInputPassword from "../UI/InputPassword/MyInputPassword";
import MyButton from "../UI/Button/MyButton";
import s from "./SignIn.module.scss";
import { serverError } from "../../utils/serverError";

export const SignIn = () => {
  const [startLogin] = useMutation(loginMutation);
  const [Error, setError] = useState(null);

  const onSubmit = async (data: any) => {
    console.log(data);
    startLogin({
      variables: { email: data.email, password: data.password },
    }).then(
      (res: any) => {
        localStorage.setItem("token", res?.data?.login.token);
        window.location.href = "/profile";
      },
      (err: any) => {
        setError(err.message);
      }
    );
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={loginValidation}
        render={({ handleSubmit, submitting }) => (
          <form className={s.myForm} onSubmit={handleSubmit}>
            <ul className={s.form__list}>
              <li className={s.form__item}>
                <Field
                  name="email"
                  component={MyInput}
                  placeholder="Электронная почта"
                />
                <ErrorField name="email" />
              </li>
              <li className={s.form__item}>
                <Field
                  name="password"
                  component={MyInputPassword}
                  placeholder="Пароль"
                />
                <ErrorField name="password" />
              </li>
              <li className={s.form__item__btn}>
                <div className={s.buttons}>
                  <MyButton
                    value={"Войти в систему"}
                    type={"submit"}
                    disabled={submitting}
                  />
                </div>
              </li>
              <li className={s.form__item}>
                <Link to="/signup" className={s.form__link}>
                  Зарегистрироваться
                </Link>
              </li>
            </ul>
            {Error ? <FormError msg={serverError(Error)} /> : null}
          </form>
        )}
      />
    </>
  );
};
