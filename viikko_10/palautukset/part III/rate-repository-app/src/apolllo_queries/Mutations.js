import { gql } from '@apollo/client'

export const authenticateUser = gql`
    mutation AUTHENTICATE_USER($credentials: AuthenticateInput){
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

export const createNewUser = gql`
    mutation createNewUser {
        createUser(user: { username: "myusername", password: "mypassword" }) {
            id
            username
        }
    }
`;