import blogService from "../services/blogService"
import Button2 from "./Button2"

const divID = "divBlogRest"
const btn1ID = "buttonTitle"

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

/**
 * Funktio pyörittää näkyvyttää blogin kaikkien tietojen ja otsikon välillä. 
 */
const toggle = (event) => {
    event.preventDefault()
    const nro = event.target.id.replace('buttonTitle', '')
    const visibility = document.getElementById(divID + nro)
    const btn1 = document.getElementById(btn1ID + nro)
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
    return (
        <div id={"divBlogMain" + props.nro} style={infoStyle}>
                <div id={"divBlogTitle" + props.nro}>
                    <label>{props.b.title}</label>
                    <Button2 text={'view'} id={btn1ID + props.nro} click={toggle} />
                </div>
                <div id={divID + props.nro} style={{ display: "none" }}>
                    <div id={"divBlogURL" + props.nro}>
                        <label>{props.b.url}</label>
                    </div>
                    <div id={"divBlogLikes" + props.nro}>
                        <label>{props.b.likes}</label>
                        <input id={'buttonLike' + props.nro} onClick={event => {props.updateOldBlog(event, props.b)}} value='like' type='submit'/>
                    </div>
                    <div id={"divBlogAuthor" + props.nro}>
                        <label>{props.b.user.username}</label>
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