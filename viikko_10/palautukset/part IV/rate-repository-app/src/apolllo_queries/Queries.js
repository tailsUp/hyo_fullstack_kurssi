import { gql } from '@apollo/client'

/**
 * Haku hakee kaikki repositoriot muuttujien orderBy, orderDirection ja searchKeyword avulla.
 */
export const GET_REPOSITORIES_SORT = gql`
    query GETALLREPOSBYSORT($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
                    language
                    url
                }
            }
        }
    }
`;

/**
 * Haku palauttaa kaikki käyttäjän tekemät arvostelut ja tiedot käyttäjän nimestä ja id:stä.
 */
export const GET_ME_WITH_REVIEWS = gql`
    query meQueryWithReviews {
        me {
        username
        id
        reviews {
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                        repository {
                            url
                            fullName
                            id
                        }
                    }
                }
            }
        }
    }
`;

/**
 * Haku palauttaa repositorion tietoja sen ID:n perusteella.
 */
export const GET_REPO_WITH_ID = gql`
    query geetRepoWithID($repositoryId: ID!) {
        repository(id: $repositoryId) {
            id
            fullName
            stargazersCount
            reviewCount
            forksCount
            language
            ratingAverage
            description
            ownerAvatarUrl
            reviews {
                edges {
                    node {
                        id
                        createdAt
                        rating
                        text
                        user {
                            username
                        }
                    }
                }
            }
        }
    }
`;

export const GET_REVIEWS = gql`
    query Repository($repositoryId: ID!) {
        repository(id: $repositoryId) {
            id
            fullName
            reviews {
                edges {
                    cursor
                    node {
                      id
                      repositoryId
                      rating
                      createdAt
                      text
                      userId
                      user {
                        id
                        username
                        createdAt
                      }
                    }
                  }
            }
        }
    }
`;

/*export const GET_ME = gql`
    query meQuery {
        me {
            id
            username
        }
    }
`;*/

/*export const GET_REPOSITORIES = gql`
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
                    language
                    url
                }
            }
        }
    }
`;*/



/*export const GET_REPOS_BY_OWNER = gql`
    query getReposByOwner($ownerName: String) {
        repositories(ownerName: $ownerName) {
            edges {
                node {
                    id
                    fullName
                    stargazersCount
                    reviewCount
                    forksCount
                    language
                    ratingAverage
                    description
                    ownerAvatarUrl
                    reviews {
                        edges {
                            node {
                                createdAt
                                rating
                                text
                                user {
                                    username
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;*/

