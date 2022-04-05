let rerenderEntierTree = () => {
    console.log('state changed')
}
let state = {
    profilePage: {
        // Данные постов
        postData: [
            { id: 1, img: "https://sun9-28.userapi.com/impf/c824503/v824503099/1758cd/FuaPI1dPq0E.jpg?size=483x259&quality=96&sign=7676fe76512aebb93eda62d45d4e13f9&type=album", message: "Hi, how are u ?" },
            { id: 2, img: "https://sun9-23.userapi.com/impf/c637625/v637625112/50ed3/qMecn9fosxQ.jpg?size=1080x982&quality=96&sign=6e3f97f441344f5c8163b6730f06abaf&type=album", message: "It's my first post" },
        ],
        newPostChange: ""
    },

    dialogsPage: {
        // Данные сообщений
        messageData: [
            { id: 1, message: 'message 1' },
            { id: 2, message: 'message 2' },
            { id: 3, message: 'message 3' }
        ],
        // Данные диалогов
        dialogsData: [
            { id: 1, name: "Артём", text: 'Хочу гулять' },
            { id: 2, name: "Маша", text: 'Радуюсь погоде' },
            { id: 3, name: "Егор", text: 'Хочу спать' }
        ],
    }
}
window.state = state;
export const update = (updateText) => {
    state.profilePage.newPostChange = updateText;
    rerenderEntierTree();
}

export const addPost = () => {
    let newPost = {
        id: state.profilePage.postData.length + 1,
        img: "https://sun9-28.userapi.com/impf/c824503/v824503099/1758cd/FuaPI1dPq0E.jpg?size=483x259&quality=96&sign=7676fe76512aebb93eda62d45d4e13f9&type=album",
        message: state.profilePage.newPostChange
    };
    state.profilePage.postData.unshift(newPost);
    state.profilePage.newPostChange = '';
    rerenderEntierTree();
}

export const subscribe = (observer) => {
    rerenderEntierTree = observer;
}

export default state
