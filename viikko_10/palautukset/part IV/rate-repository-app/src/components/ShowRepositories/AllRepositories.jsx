import { useState, useEffect } from "react";
import { useDebounce } from 'use-debounce';
//Util:
import { sortAllRepositories } from '../../util/Util';
//Haku:
import { queryAllRepositoriesByOrder2 } from "../../services/services";
//Komponentit:
import ViewError from '../Views/ViewError';
import ShowRepositories from "./ShowRepositories";
import SingleRepository from "./SingleRepository";

const AllRepositories = () => {

    //Query variables:
    const [searchKeyword, setSearchKeyword]     = useState('');
    const [orderBy, setOrderBy]                 = useState('CREATED_AT');
    const [orderDirection, setOrderDirection]   = useState('DESC');
    const [orderValue, setOrdervalue]           = useState('default');
    //Single vs. all:
    const [single, setSingle]                   = useState('');
    //Debounce;
    const [debounce]                            = useDebounce(searchKeyword, 1000);

    const { loading, error, data } = queryAllRepositoriesByOrder2({ orderDirection, orderBy, searchKeyword });  

    useEffect(() => {
        //Muista poistaa jos ei tarvita.
    }, [debounce]);


    if(error)
    {
        return <ViewError error={error} />
    }

    const repositories = sortAllRepositories({ data });

    if(single !== '')
    {
        //TÄSSÄ YKSITTÄINEN
        return (
            <SingleRepository setSingle={setSingle} ID={single} />
        );
    }

    //TÄSSÄ KOKO NÄKYMÄ
    return (
        <ShowRepositories 
            repositories={repositories}
            searchKeyword={searchKeyword}
            setSingle={setSingle}
            setSearchKeyword={setSearchKeyword}
            setOrderDirection={setOrderDirection}
            setOrderBy={setOrderBy}
            orderValue={orderValue}
            setOrdervalue={setOrdervalue}
        />
    );

};

export default AllRepositories;
