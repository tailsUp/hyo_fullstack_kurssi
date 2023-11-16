/* eslint-disable no-unused-vars */
import { filterText, filterEmpty } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const FilterComponent = (props) => {
  const dispatch = useDispatch()

  const handleChange = (event) =>  {    
    if(event.target.value !== '') 
    {
      console.log('Filtterissä on tekstiä')
      dispatch(filterText(event.target.value))
    }
    else 
    {
      console.log('Filtteri on tyhjä')
      dispatch(filterEmpty(''))
    }
  }

  return (
    <div>
      <label>
        Filter: <input type="text" name="filter" onChange={handleChange} />
      </label>
      <br/><br/>
    </div>
  )
}

export default FilterComponent