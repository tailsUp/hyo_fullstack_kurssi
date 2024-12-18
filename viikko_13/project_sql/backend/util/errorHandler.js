/**
 * Aiemmasta projektista kopioitu virheiden käsittelijä. Lisätty loppuun tämän viikon tehtävien vaatimukset. 
 */
const errorHandler = (error, request, response, next) => {
    if (error.name === 'CastError') 
    {
        return response.status(400).send({ error: 'malformatted id' })
    } 
    else if (error.name === 'ValidationError') 
    {
        return response.status(400).json({ error: error.message })
    } 
    else if (error.name === 'SessionExpiredError') 
    {
        return response.status(400).json({ error: 'Your session has expired' })
    }
    else if (error.name === 'noSession') 
    {
        return response.status(400).json({ error: 'No active session found - cant logout' })
    }
    else if (error.name === 'TokenExpiredError') 
    {    
        return response.status(401).json({ error: 'token expired' })
    }
    else if (error.name === 'UserDisabled') 
    {
        return response.status(401).json({ error: 'Your account has been disabled' })
    }
    else if (error.name === 'TokenMissingError') 
    {
        return response.status(401).json({ error: 'Token is missing.' })
    }
    else if (error.name === 'errorX') 
    {
        console.log(response)
        return response.status(400).json({ error: 'TO BE DEFINED' })
    }
    else if (error.name === 'errorY') 
    {
        console.log(response)
        return response.status(400).json({ error: 'Year has to be between 1991 amd current year' })
    }
    else if (error.name === 'errorEmail') 
    {
            return response.status(400).json({ error: 'Username is not in email format' })
    }
    else if (error.name === 'noUser') 
    {
        return response.status(400).json({ error: 'user was not found - cant logout' })
    }
    next(error)
}

/**
 * Funktio tarkistaa sisältääkö error validaattori avaimen jonka arvona on isEmail 
 * @returns true/false.
 */
const checkEmail = (errors) => {
    if (errors.some(e => e['validatorKey'] === 'isEmail')) {
        return true;
    }
    return false;
}
  
module.exports = { errorHandler, checkEmail }
