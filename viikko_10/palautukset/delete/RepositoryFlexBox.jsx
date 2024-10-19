import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';
import RepositorySingleItem from './RepositorySingleItem';
import { queryAllRepositoriesByOrder } from '../services/services';
import ViewPicker from '../components/Views/ViewPicker';
import ViewSearch2 from '../components/Views/ViewSearch2';
import ViewLoading from '../components/Views/ViewLoading';
import ViewDBConnectionError from '../components/Views/ViewDBConnectionError';
import ViewError from '../components/Views/ViewError';
import ViewRepositoriesList from '../components/Views/ViewRepositoriesList';

const sortRepos = ({ data }) => {
    return data.repositories ? data.repositories.edges.map(edge => edge.node) : [];
};

const updateRepos = (props) => {
    if(props.item.value === 'high') 
    {
        props.setDirection('DESC');
        props.setOrder('high');
        props.setLoad(true);
    }
    else if(props.item.value === 'low') 
    {
        props.setDirection('ASC');
        props.setOrder('low');
        props.setLoad(true);
    }
    else if(props.item.value === 'new') 
    {
        props.setDirection('DESC');
        props.setOrder('new');
        props.setLoad(true);
    }
};

const RepositoryFlexbox = () => {

    //Koko näkymä vs. yksittäinen näkymä vivut:
    const [single, setSingle]   = useState(false);
    const [repo, setRepo]       = useState(null);
    const [repos, setRepos]     = useState([]);
    //Repositorioiden lajittelu:
    const [order, setOrder]         = useState('new');
    const [direction, setDirection] = useState('ASC');
    const [load, setLoad]           = useState(true);

    //Etsintä kentän vivut:
    const [keyword, setKeyword]     = useState('');
    const [debounce]                = useDebounce(keyword, 1000);
    const [test, setTest]           = useState(false);
    
    const { loading, error, data } = queryAllRepositoriesByOrder({ direction, order, debounce });  

    useEffect(() => {
        if (debounce && keyword !== '')
        {
            console.log('X:', keyword);
            setTest(true);
            //setDirection('DESC');
            //setOrder('RATING_AVERAGE');
        }
        if(!debounce && keyword === '') 
        {
            setLoad(true);
        }
    }, [debounce]);


    if(error)
    {
        return <ViewError error={error} />
    }

    //Näytetään latausikkuna vain ensimmäisellä latauksella.
    if((loading && load) || (loading && test))
    {
        return <ViewLoading />
    }

    if(data === null && data === undefined )
    {
        return <ViewDBConnectionError />
    }

    if(single)
    {
        return (
            <RepositorySingleItem item={repo} single={single} setSingle={setSingle} repo={repo} setRepo={setRepo} />
        );
    }

    try {
        

        if(load && data !== undefined)
        {
            let x = sortRepos({ data });
            setRepos(x);
            setLoad(false);
        } else if(test)
        {
            let x = sortRepos({ data });
            setRepos(x);
            setTest(false);
        } 

        //console.log('REPOS:', repos);

        return (
            <View>
                <ViewSearch2 keyword={keyword} setKeyword={setKeyword} />
                <ViewPicker updateRepos={updateRepos} setRepos={setRepos} repos={repos} setDirection={setDirection} setOrder={setOrder} order={order} setLoad={setLoad} />
                <ViewRepositoriesList repos={repos} repo={repo} setRepo={setRepo} single={single} setSingle={setSingle} />
            </View>
          );
    } catch(error) {
        console.log("Error in looping thorugh data to create FlexBox: ", error);
        return <ViewError error={error} />
    }
};
  
export default RepositoryFlexbox;
