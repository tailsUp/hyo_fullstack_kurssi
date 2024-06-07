import { useMutation }  from '@apollo/client'
import { ADD_REVIEW } from "../apolllo_queries/Mutations";
import { GET_ME_WITH_REVIEWS } from '../apolllo_queries/Queries';

const createNewReview = () => {
    const [mutate, result] = useMutation(ADD_REVIEW);
    const createNewReview = async ({ owner, name, rating, review }) => {   
        const newReview = { ownerName: owner, repositoryName: name, rating: Number(rating), text: review };
        return mutate(
            {
                variables: { newReview },
                refetchQueries: [{ query: GET_ME_WITH_REVIEWS }],
            }
        );
    }
    return [createNewReview, result];
};

export default createNewReview;
