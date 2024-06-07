import { useMutation }  from '@apollo/client'
import { ADD_USER } from "../apolllo_queries/Mutations";

const createNewUser = () => {
    const [mutate, result] = useMutation(ADD_USER);
    const createNewUser = async ({ username, password }) => {
        const user = { username: username, password: password };
        return mutate({variables: { user }});
    }
    return [createNewUser, result];
};

export default createNewUser;