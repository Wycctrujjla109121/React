import { NavLink } from 'react-router-dom'
import './user.css'

const DialogsUserLink = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className='user' href="#">
            <div className='user__img'>
                <img className='user__img' src="" alt="" />
            </div>
            <div className='user__info'>
                <h2 className='user__name'>{props.name}</h2>
                <p className='user__text'>Статус: {props.text}</p>
            </div>
        </NavLink>
    )
}

export default DialogsUserLink