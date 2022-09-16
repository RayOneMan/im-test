import ApolloClient from 'apollo-boost';

export const client:any = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    request: async operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ""
            }
        })
    }
});