import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES, GET_ME } from '../apolllo_queries/Queries';

export const queryAllRepositories = () => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES);
    if (loading) return 'Loading repositories...';
    if (error) return `Error! ${error.message}`;
    return data
};

export const checkIfLoggedIn = () => {
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return 'Loading user login information';
  if (error) return  `Error! ${error.message}`;
  if(data !== undefined && data !== null && data.me !== null) {
    console.log('DATA: ', data);
    return true;
  }
  return false;
};

