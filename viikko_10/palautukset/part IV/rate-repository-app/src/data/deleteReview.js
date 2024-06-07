import { useMutation }  from '@apollo/client'
import { DELETE_REVIEW } from "../apolllo_queries/Mutations";
import { GET_ME_WITH_REVIEWS, GET_REVIEWS } from '../apolllo_queries/Queries';

const deleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
    const deleteReview = async ({ reviewId }) => {
        return mutate(
            {
                variables: { deleteReviewId: reviewId },
                //notifyOnNetworkStatusChange: true,
                refetchQueries: [
                    { query: GET_ME_WITH_REVIEWS },
                    { query: GET_REVIEWS },
                ],
            }
        );
    }
    return [deleteReview, result];
};

export default deleteReview;
