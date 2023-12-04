import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    console.log('Get all anecdotes from db.json')
    try 
    {
        const response = await axios.get(baseUrl)
        console.log('response: ', response)
        return response.data
    } catch (e) 
    {
        console.log('VIRHE: ', e)
        return []
    }
}

const createNew = async (_content) => {
    const object = {
        content: _content,
        votes: 0
    }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateAnecdote = async (_content) => {
    console.log("ASDASDAD: ", _content)
    const object = {
        content: _content.content,
        votes: _content.votes + 1
    }
    const request = await axios.put(`${baseUrl}/${_content.id}`, object)
    return request.data
    /*const request = await axios.put(`${baseUrl}/${ID}`, blog)
    return request.status*/
}

export default { getAll, createNew, updateAnecdote }
