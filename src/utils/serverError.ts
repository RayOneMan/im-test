export const serverError = (props: any): any => {
    switch (props) {
        case "GraphQL error: Incorrect password":
            return "Не правильный пароль";
        case "GraphQL error: This email is already registered":
            return "Этот email уже занят";
        case "GraphQL error: No user with that email":
            return "Такого пользователя не существует";
    }
};
