import { useMutation }  from '@apollo/client'
import { authenticateUser  } from "../apolllo_queries/Mutations";

/**
 * 
 * Funktio kokeilee sisäänkirjautumista annetuilla tunnuksilla. 
 * 
 * @returns 
 */
const useSignIn = () => {
    const [mutate, result] = useMutation(authenticateUser);
    
    const testLog = async ({username, password}) => {
        const credentials = {
            username: username,
            password: password
        };
        return mutate({
            variables: {
                credentials
            }
        });
    }
    return [testLog, result];
};

export default useSignIn;
