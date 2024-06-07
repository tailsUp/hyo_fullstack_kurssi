/**
 * 
 * Funktio pyöristää numerot.
 * 
 * Solution from stackoverlow. Ticket: 9461621.
 */
export const numberFormatterBrief = (props) => {
    try
    {
        const nro = parseInt(props.number);
        return Math.abs(nro) > 999 ? Math.sign(nro)*((Math.abs(nro)/1000).toFixed(1)) + 'k' : Math.sign(nro)*Math.abs(nro); 
    }
    catch(error) 
    {
        console.log("Error in numberFormatterBrief: ", error);
    }
}

/**
 * 
 * Funktio hakee repositoriot edgejen joukosta ja palauttaa perinteisenä taulukkona.
 * 
 * @param {Array} data - edge taulukko. 
 * @returns ns. normaali taulukko.
 */
export const sortAllRepositories = ({ data }) => {
    try
    {
        return data.repositories ? data.repositories.edges.map(edge => edge.node) : [];
    }
    catch (error)
    {
        console.log('Error while sorting all repositories (sortAllRepositories):', error);
        return [];
    }
};

/**
 * 
 * Funktio hakee arvostelut edgejen joukosta ja palauttaa perinteisenä taulukkona.
 * 
 * @param {Array} temp - edge taulukko. 
 * @returns ns. normaali taulukko.
 */
export const sortAllReviews = ({ temp }) => {
    try
    {
        return temp ? temp.edges.map(edge => edge.node) : [];
    }
    catch (error)
    {
        console.log('Error while sorting all repositories (sortAllReviews):', error);
        return [];
    }
};

/**
 * 
 * Funktio järjestää repositoriot arvosanan perusteella.
 * 
 * @param {Array} reviews - repositoriot. 
 * @returns järjestetyt repositoriot.
 */
export const OrderRepositoriesByRating = ({ reviews }) => {
    try
    {
        reviews = reviews.sort((a, b) => b.rating - a.rating);
        return reviews;
    }
    catch(error)
    {
        return reviews;
    }
};

/**
 * 
 * Funktio muokkaa päivämäärämerkkijonon tehtävänannon mukaiseen muotoon.
 * 
 * @param {String} date - päivämäärä
 * @returns päivämäärä muodossa pp.kk.vvvv
 */
export const handelDates = ({ date }) => {
    try
    {
        const d = date.slice(8, 10);
        const m = date.slice(5, 7);
        const y = date.slice(0, 4);
        return (d + "." + m + "." + y);
    }
    catch(error)
    {
        console.log('Error in converting datetime: ', error);
        return 'date not available';
    }
};