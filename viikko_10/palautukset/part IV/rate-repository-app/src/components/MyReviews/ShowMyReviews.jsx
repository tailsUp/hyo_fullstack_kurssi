import { useState } from 'react';
import AllMyReviews from './AllMyReviews';
import MySingleReview from './MySingleReview';

const ShowMyReviews = ({ reviews }) => {

    const [single, setSingle]   = useState(false);
    const [ID, setID]           = useState(null);
    const [values, setValues]   = useState([]);

    if(single)
    {
        return (
            <MySingleReview setSingle={setSingle} values={values} ID={ID} />
        );
    }
    return (
        <AllMyReviews reviews={reviews} setSingle={setSingle} setID={setID} setValues={setValues} />
    );
};

export default ShowMyReviews;