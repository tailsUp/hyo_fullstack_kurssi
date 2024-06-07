import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query GETALLREPOS {
        repositories {
            edges {
                node {
                    description
                    fullName
                    id
                    reviewCount
                    url
                    ratingAverage
                    forksCount
                    ownerAvatarUrl
                    stargazersCount
                }
            }
        }
    }
`;

export const GET_ME = gql`
    query meQuery {
        me {
            id
            username
        }
    }
`;