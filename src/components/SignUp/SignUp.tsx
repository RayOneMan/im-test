import { useState } from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import { signUpValidation } from "../../utils/Validation";
import { ErrorField } from "../UI/ErrorField/ErrorField";
import { useMutation } from "@apollo/client";

import MyButton from "../UI/Button/MyButton";
import FormError from "../UI/FormError/FormError";
import MyInput from "../UI/Input/MyInput";
import MyInputPassword from "../UI/InputPassword/MyInputPassword";

import s from "./SignUp.module.scss";
import { SignUpMutation } from "../../api/SignUpMutation";
import { serverError } from "../../utils/serverError";

export const SignUp = () => {
  const [startSignUp] = useMutation(SignUpMutation);
  const [Error, setError] = useState(null);

  const onSubmit = async (data: any) => {
    startSignUp({
      variables: {
        firstName: data.firstName,
        secondName: data.secondName,
        email: data.email,
        password: data.password,
      },
    }).then(
      (res: any) => {
        localStorage.setItem("token", res?.data?.signup);
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
        validate={signUpValidation}
        render={({ handleSubmit, submitting }) => (
          <form className={s.myForm} onSubmit={handleSubmit}>
            <div className={s.title}>Регистрация</div>
            <ul className={s.form__list}>
              <li className={s.form__item}>
                <Field name="firstName" component={MyInput} placeholder="Имя" />
                <ErrorField name="firstName" />
              </li>
              <li className={s.form__item}>
                <Field
                  name="secondName"
                  component={MyInput}
                  placeholder="Фамилия"
                />
                <ErrorField name="secondName" />
              </li>
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
                  placeholder="Введите пароль"
                />
                <ErrorField name="password" />
              </li>
              <li className={s.form__item}>
                <Field
                  name="repeatPassword"
                  component={MyInputPassword}
                  placeholder="Повторите пароль"
                />
                <ErrorField name="repeatPassword" />
              </li>
              <li className={s.form__item__btn}>
                <div className={s.buttons}>
                  <MyButton
                    value={"Применить и войти"}
                    type={"submit"}
                    disabled={submitting}
                  />
                </div>
              </li>
              <li className={s.form__item}>
                <p>
                  Уже зарегестрированы?{" "}
                  <Link to="/" className={s.form__link}>
                    Вход
                  </Link>
                </p>
              </li>
            </ul>
            {Error ? <FormError msg={serverError(Error)} /> : null}
          </form>
        )}
      />
    </>
  );
};
