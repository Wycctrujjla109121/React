import DialogsUserLink from './dialogs__user/user.jsx'
import Message from './dialogs__messages/message.jsx'
import './dialogs.css'

import { changeTextareaMessage, ADDMESSAGE } from '../../redux/DialogsReducer'

const Dialogs = (props) => {

    function updateTextarea(e){
        let messageChange = e.target.value;
        props.dispatch(changeTextareaMessage(messageChange))
    }

    function sendMessage(){
        if (props.state.newMessageText != '' && props.state.newMessageText != ' ')
            props.dispatch(ADDMESSAGE())
    }

    return (
        <div className="dialogs">
            <div className='dialogs__user'>
                {props.state.dialogsData.map(element =>
                    <DialogsUserLink key={element.name} id={element.id} name={element.name} text={element.text} />
                )}
            </div>

            <div className='dialogs__messages'>
                {props.state.messageData.map(element =>
                    <Message key={element.message} id={element.id} message={element.message} />
                )}
            </div>

            <div className='sendMessage'>
                <div className='sendMessage__info'>
                    <textarea className='textarea' id="newMessage" onChange={updateTextarea} value={props.state.newMessageText}  placeholder='Send Message'></textarea>
                    <button className='send' onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs












