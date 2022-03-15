import DialogsUserLink from './dialogs__user/user.jsx'
import Message from './dialogs__messages/message.jsx'
import './dialogs.css'

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Артём", text: 'Хочу гулять' },
        { id: 2, name: "Маша", text: 'Радуюсь погоде' },
        { id: 3, name: "Егор", text: 'Хочу спать' }
    ]

    let messageData = [
        { id: 1, message: 'message 1' },
        { id: 2, message: 'message 2' },
        { id: 3, message: 'message 3' }
    ]

    return (
        <div className="dialogs">
            <div className='dialogs__user'>
                {dialogsData.map(element => 
                    <DialogsUserLink id={element.id} name={element.name} text={element.text}/>
                )}
            </div>

            <div className='dialogs__messages'>
                {messageData.map(element => <Message id={element.id} message={element.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs












