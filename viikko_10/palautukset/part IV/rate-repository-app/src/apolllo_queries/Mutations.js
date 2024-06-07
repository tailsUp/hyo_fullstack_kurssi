import { gql } from '@apollo/client'

/**
 * Mutaatiota käytetään tarkistamaan laitteessa olevan tokenin tarkistamiseen ja käyttäjän kirjaamiseen
 * suoraan sisään ohjelmaan.
 */
export const authenticateUser = gql`
    mutation AUTHENTICATE_USER($credentials: AuthenticateInput){
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

/**
 * Mutaatiota käytetään arvostelun lisäämiseen.
 */
export const ADD_REVIEW = gql`
    mutation CreateReview($newReview: CreateReviewInput) {
        createReview(review: $newReview) {
        id
        rating
        repositoryId
        createdAt
        text
        }
    }
`;

/**
 * Mutaatiota käytetään uuden käyttäjän luomiseen.
 */
export const ADD_USER = gql`
    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            username
        }
    }
`;

/**
 * Queryä käytetään oman arvotestelun poistamiseen.
 */
export const DELETE_REVIEW = gql`
    mutation DeleteReview($deleteReviewId: ID!) {
        deleteReview(id: $deleteReviewId)
    }
`;

/*export const createNewUser = gql`
    mutation createNewUser {
        createUser(user: { username: "myusername", password: "mypassword" }) {
            id
            username
        }
    }
`;*/