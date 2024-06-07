import { useMutation }  from '@apollo/client'
import { authenticateUser  } from "../apolllo_queries/Mutations";

const useSignIn = () => {
    console.log('SignInGateway = ()');
    const [mutate, result] = useMutation(authenticateUser);
    
    const testLog = async ({username, password}) => {
        console.log('testLog funktio');
        const credentials = {username: username, password: password};
        return mutate({variables: {credentials}});
    }

    return [testLog, result];
};

export default useSignIn;
