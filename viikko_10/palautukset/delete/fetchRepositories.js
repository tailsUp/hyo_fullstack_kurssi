import { useQuery }  from '@apollo/client'
import { GET_REPOSITORIES_SORT } from "../apolllo_queries/Queries";

//$orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection

const fetchRepositories = () => {
    const [query, result] = useQuery(GET_REPOSITORIES_SORT);
    const getRepositories = async ({ sort, order, keyword }) => {
        if(keyword === undefined || keyword === null) 
        {
            keyword = '';
        }
        const orderBy           = { orderBy: sort };
        const orderDirection    = { orderDirection: order };
        const searchKeyword     = { searchKeyword: keyword };
        return await query({variables: { orderBy, orderDirection, searchKeyword }});
    }
    return [getRepositories, result];
};

export default fetchRepositories;
