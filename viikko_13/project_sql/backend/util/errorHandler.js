const errorHandler = (error, request, response, next) => {
    if (error.name === 'CastError') 
    {
        return response.status(400).send({ error: 'malformatted id' })
    } 
    else if (error.name === 'ValidationError') 
    {
        return response.status(400).json({ error: error.message })
    } 
    else if (error.name === 'JsonWebTokenError') 
    {
        return response.status(400).json({ error: 'token missing or invalid' })
    }
    else if (error.name === 'TokenExpiredError') 
    {    
        return response.status(401).json({ error: 'token expired' })
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
    next(error)
}

const checkEmail = (errors) => {
    console.log(errors[0].validatorKey)
    if (errors.some(e => e['validatorKey'] === 'isEmail')) {
        return true;
    }
    return false;
}
  
module.exports = { errorHandler, checkEmail }
