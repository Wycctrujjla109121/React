const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATEMESSAGE = 'UPDATE-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state

        case UPDATEMESSAGE:
            state.newMessageText = action.newMessageText;
            return state

        default: return state
    }
}

export const changeTextareaMessage = (messageChange) => ({ type: UPDATEMESSAGE, newMessageText: messageChange })
export const ADDMESSAGE = () => ({ type: ADD_MESSAGE })

export default dialogsReducer