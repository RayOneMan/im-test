import { TLogin } from "../store/types/types";
import { TSignUp } from "../store/types/types";

const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])./;

export const loginValidation = (values: TLogin) => {
    const errors:any = {};
    if (!values.email) {
        errors.email = "Произошла ошибка. Поле должно быть заполнено!";
    }
    if (!values.password) {
        errors.password = "Произошла ошибка. Поле должно быть заполнено!";
    }
    return errors;
}

export const signUpValidation = (values: TSignUp) => {
    const errors:any = {};
    if (!values.firstName) {
        errors.firstName = "Произошла ошибка. Поле должно быть заполнено!"
    }
    if (values.firstName?.length < 3) {
        errors.firstName = "Минимальное количество символов 3"
    }

    if (!values.secondName) {
        errors.secondName = "Произошла ошибка. Поле должно быть заполнено!"
    } if (values.secondName?.length < 3) {
        errors.secondName = "Минимальное количество символов 3"
    }

    if (!checkEmail.test(values.email)) {
        errors.email = "Произошла ошибка. Неправильный Email";
    }
    if (!values.email) {
        errors.email = "Произошла ошибка. Поле должно быть заполнено!";
    }

    if (!checkPassword.test(values.password)) {
        errors.password = "Пароль должен содержать: английские буквы верхнего и нижнего регистра, цифры и знаки.";
    } if (values.password?.length < 8) {
        errors.password = "Минимальное количество символов 8"
    }
    if (!values.password) {
        errors.password = "Произошла ошибка. Поле должно быть заполнено!";
    }
    if (!values.repeatPassword) {
        errors.repeatPassword = "Произошла ошибка. Поле должно быть заполнено!";
    }
     if (values.repeatPassword !== values.password) {
        errors.repeatPassword = "Произошла ошибка. Пароли не совпадают!";
    }
    return errors;
}
