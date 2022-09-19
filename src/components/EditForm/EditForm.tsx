import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Field, Form } from "react-final-form";
import { EditUserMutation } from "../../api/EditUserMutation";
import { LoadUserInfoQuery } from "../../api/LoadUserInfoQuery";
import { serverError } from "../../utils/serverError";

import { signUpValidation } from "../../utils/Validation";
import Spinner from "../Spinner/Spinner";
import MyButton from "../UI/Button/MyButton";
import EditFormError from "../UI/EditFormError/EditFormError";
import { ErrorField } from "../UI/ErrorField/ErrorField";
import MyInput from "../UI/Input/MyInput";

import MyInputPassword from "../UI/InputPassword/MyInputPassword";
import s from "./EditUser.module.scss";
interface IEditFormProps {}

export const EditForm: React.FC<IEditFormProps> = (props: any) => {
  const { loading, data, refetch } = useQuery(LoadUserInfoQuery);
  const [writeInButton, setWriteInButton] = useState("Сохранить");
  const [Error, setError] = useState(null);
  const [initValues, setInitValues] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });

  const [startEdit] = useMutation(EditUserMutation, {
    onCompleted() {
      refetch();
    },
  });

  const onSubmit = async (editData: any) => {
    startEdit({
      variables: {
        id: data.currentUser.id,
        email: editData.email,
        password: editData.password,
        firstName: editData.firstName,
        secondName: editData.secondName,
      },
    }).then(
      (res: any) => {
        setWriteInButton("Сохранено");
        const timer = setTimeout(() => {
          setWriteInButton("Сохранить");
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
      },
      (err: any) => {
        setError(err.message)
      }
    );
  };

  useEffect(() => {
    if (!loading) {
      setInitValues({
        email: data.currentUser.email,
        firstName: data.currentUser.firstName,
        secondName: data.currentUser.secondName,
      });
    }
  }, [data, loading]);

  if (loading) {
    return <Spinner/>;
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={signUpValidation}
        initialValues={initValues}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className={s.title}>
              <div className={s.title__text}>
                {data?.currentUser.firstName} {data?.currentUser.secondName}.
                Редактирование
              </div>
              <div className={s.myButton}>
                <MyButton
                  value={writeInButton}
                  type={"submit"}
                  disabled={submitting || pristine}
                />
              </div>
            </div>
            <div className={s.myForm}>
              <ul className={s.form__list}>
                <li className={s.form__item}>
                  <div className={s.label}>Имя</div>
                  <div className={s.myField}>
                    <Field
                      name="firstName"
                      component={MyInput}
                      placeholder="Имя"
                    />
                    <ErrorField name="firstName" />
                  </div>
                </li>
                <li className={s.form__item}>
                  <div className={s.label}>Фамилия</div>
                  <div className={s.myField}>
                    <Field
                      name="secondName"
                      component={MyInput}
                      placeholder="Фамилия"
                    />
                    <ErrorField name="secondName" />
                  </div>
                </li>
                <li className={s.form__item}>
                  <div className={s.label}>email</div>
                  <div className={s.myField}>
                    <Field
                      name="email"
                      component={MyInput}
                      placeholder="Электронная почта"
                    />
                    <ErrorField name="email" />
                  </div>
                </li>
                <li className={s.form__item}>
                  <div className={s.label}>Пароль</div>
                  <div className={s.myField}>
                    <Field
                      name="password"
                      component={MyInputPassword}
                      placeholder="Введите пароль"
                    />
                    <ErrorField name="password" />
                  </div>
                </li>
                <li className={s.form__item}>
                  <div className={s.label}>Повторите пароль</div>
                  <div className={s.myField}>
                    <Field
                      name="repeatPassword"
                      component={MyInputPassword}
                      placeholder="Повторите пароль"
                    />
                    <ErrorField name="repeatPassword" />
                  </div>
                </li>
              </ul>
            {Error ? <EditFormError msg={serverError(Error)} /> : null}
            </div>
          </form>
        )}
      />
    </>
  );
};
