import { useState, useEffect } from 'react';
import { checkIfLoggedIn } from '../services/services';

const getLogInInfo = () => {
  const [logged, setLogged] = useState();
  const [loading, setLoading] = useState(true);

    const getInfo = () => {
        setLoading(false);
        setLogged(checkIfLoggedIn());
    }

    useEffect(() => {
        getInfo();
    }, []);

    return { logged, loading, refetch: getInfo };
};

export default getLogInInfo;