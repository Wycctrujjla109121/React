import DialogsUserLink from './dialogs__user/user.jsx'
import Message from './dialogs__messages/message.jsx'
import './dialogs.css'

const Dialogs = (props) => {

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
        </div>
    )
}

export default Dialogs












