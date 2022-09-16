export const useAuth = () => {
    let isAuth = false;
    const data = localStorage.getItem('token');
    if (data) {
        isAuth = true;
    } else {
        isAuth = false;
    }
    return { isAuth }
}