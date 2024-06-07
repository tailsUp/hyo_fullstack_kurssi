import { useQuery } from '@apollo/client';

//import { GET_REPOSITORIES, GET_ME, GET_REVIEWS, GET_REPOSITORIES_SORT, GET_ME_WITH_REVIEWS, GET_REPOS_BY_OWNER, GET_REPO_WITH_ID } from '../apolllo_queries/Queries';
import { GET_REVIEWS, GET_REPOSITORIES_SORT, GET_ME_WITH_REVIEWS, GET_REPO_WITH_ID } from '../apolllo_queries/Queries';

export const checkIfLoggedIn = () => {
  const { loading, error, data } = useQuery(GET_ME_WITH_REVIEWS);
  return { loading, error, data };
};

export const getRepoWithID = ({ ID }) => {
  const { loading, error, data } = useQuery(
    GET_REPO_WITH_ID,
    {
      variables:
      {
        repositoryId: ID
      },
    }
  );
  return { loading, error, data };
};

export const queryRepositories = ({ repoID }) => {
  const { loading, error, data } = useQuery(GET_REVIEWS, {variables: { repositoryId: repoID },});
  return { loading, error, data };
};

export const queryAllRepositoriesByOrder = ({ direction, order, debounce }) => {
  let keyword = '';
  let order2 = '';
  if(debounce) 
  {
    keyword = debounce.toLowerCase();
  }
  if(order === 'new')
  {
    order2 = 'CREATED_AT';
  }
  if(order === 'high' || order === 'low')
  {
    order2 = 'RATING_AVERAGE';
  }
  const { loading, error, data } = useQuery(
    GET_REPOSITORIES_SORT,
    {variables: {
      "orderBy": order2.toString(), 
      "orderDirection": direction.toString(), 
      "searchKeyword": keyword }
    }, 
    {fetchPolicy: 'cache-and-network'}
  );
  return { loading, error, data };
};

export const queryAllRepositoriesByOrder2 = ({ orderDirection, orderBy, searchKeyword }) => {
  if(searchKeyword)
  {
    searchKeyword.toLowerCase();
  }
  //orderBy = 'CREATED_AT';
  //orderDirection = 'DESC';
  /*if(orderBy === 'new')
  {
    order2 = 'CREATED_AT';
  }
  if(orderBy === 'high' || orderBy === 'low')
  {
    order2 = 'RATING_AVERAGE';
  }*/
  const { loading, error, data } = useQuery(
    GET_REPOSITORIES_SORT,
    {variables: {
        "orderBy": orderBy, 
        "orderDirection": orderDirection, 
        "searchKeyword": searchKeyword 
      }
    }, 
    {fetchPolicy: 'cache-and-network'}
  );
  return { loading, error, data };
};

/*export const queryAllRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'});
  if (loading) return 'Loading repositories...';
  if (error) return `Error! ${error.message}`;
  return { loading, error, data };
};*/

/*export const checkIfLoggedIn2 = () => {
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return 'Loading user login information';
  if (error) return  `Error! ${error.message}`;
  if(data !== undefined && data !== null && data.me !== null) {
    return true;
  }
  return false;
};*/

/*export const getOwnerRepos = ({ name }) => {
  console.log(name)
  //name = 'jaredpalmer';
  console.log('getOwnerRepos funktio. NAME:', name);
  if(name === undefined || name === null) 
  {
    return null;
  }
  const { loading, error, data } = useQuery(GET_REPOS_BY_OWNER, {variables: { ownerName: name },});
  return { loading, error, data };
};*/


