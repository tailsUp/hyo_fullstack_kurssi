import blogService from '../services/blogService'
import Button2 from './Button2'

const divID = 'divBlogRest'
const btnView = 'buttonView'

/**
 * Määrittää blogeille listatyyppisen näkymän, jotta ne erottuvat toisistaan paremmin.
 */
const infoStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}

const btnDELSyle = {
  backgroundColor: '#f44336'
}

/**
 * Funktio pyörittää näkyvyttää blogin kaikkien tietojen ja otsikon välillä.
 */
const toggle = (event) => {
  event.preventDefault()
  const nro = event.target.id.replace(btnView, '')
  const visibility = document.getElementById(divID + nro)
  const btn1 = document.getElementById(btnView + nro)
  if (visibility.style.display === 'none')
  {
    visibility.style.display = 'block'
    btn1.textContent = 'hide'
  }
  else
  {
    visibility.style.display = 'none'
    btn1.textContent = 'view'
  }
}

/**
 * Funktio palauttaa div elementin jonka sisällä on lista blogeja.
 * { b, nro }
 */
const fullBlogInfo = (props) => {

  if(props.user.username === props.b.user.username)
  {
    return returnWithAll(props)
  }
  else
  {
    return returnWithOutDEL(props)
  }
}

const returnWithOutDEL = (props) => {
  return (
    <div id={'divBlogMain' + props.nro} style={infoStyle}>
      <div id={'divBlogTitle' + props.nro}>
        <label>{props.b.title}</label>
        <Button2 text={'view'} id={btnView + props.nro} data-testid={btnView + props.nro} click={toggle} />
      </div>
      <div id={divID + props.nro} style={{ display: 'none' }}>
        <div id={'divBlogURL' + props.nro}>
          <label>{props.b.url}</label>
        </div>
        <div id={'divBlogLikes' + props.nro}>
          <label>{props.b.likes}</label>
          <input id={'buttonLike' + props.nro} onClick={event => {props.updateOldBlog(event, props.b)}} value='like' type='submit'/>
        </div>
        <div id={'divBlogAuthor' + props.nro}>
          <label>{props.b.user.username}</label>
        </div>
      </div>
    </div>
  )
}

const returnWithAll = (props) => {
  return (
    <div id={'divBlogMain' + props.nro} style={infoStyle}>
      <div id={'divBlogTitle' + props.nro}>
        <label>{props.b.title}</label>
        <Button2 text={'view'} id={btnView + props.nro} click={toggle} />
      </div>
      <div id={divID + props.nro} data-testid={divID + props.nro} style={{ display: 'none' }}>
        <div id={'divBlogURL' + props.nro}>
          <label>{props.b.url}</label>
        </div>
        <div id={'divBlogLikes' + props.nro}>
          <label>{props.b.likes}</label>
          <input id={'buttonLike' + props.nro} data-testid={'buttonLike' + props.nro} onClick={event => {props.updateOldBlog(event, props.b)}} value='like' type='submit'/>
        </div>
        <div id={'divBlogAuthor' + props.nro}>
          <label>{props.b.user.username}</label>
        </div>
        <div id="divDeleteBlog">
          <button id={'buttonDelete' + props.nro} data-testid={'buttonDelete' + props.nro} onClick={event => {props.deleteBlogs(event, props.b.id)}} style={btnDELSyle}>delete</button>
        </div>
      </div>
    </div>
  )
}

export default fullBlogInfo

/*
<input id={'buttonLike' + props.nro} onClick={props.testi} value='like' type='submit'/>

<input id={'buttonLike' + props.b.id} onClick={props.testi} value='like' type='submit'/>

{(e) => {props.testi(e, someParameter)}}

<input id={'buttonLike' + props.b.id} onClick={event => {props.testi(event, b)}} value='like' type='submit'/>

*/