/**
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