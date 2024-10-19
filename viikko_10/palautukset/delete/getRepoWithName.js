import { useMutation }  from '@apollo/client'
import { GET_REPOS_BY_OWNER } from '../apolllo_queries/Mutations';

const getRepoWithName = () => {
    const [mutate, result] = useMutation(GET_REPOS_BY_OWNER);
    const getRepos = async ({ name }) => {
            const ownerName = { ownerName: name };
            return mutate({variables: { ownerName }
        });
    }

    return [getRepos, result];
};

export default getRepoWithName;