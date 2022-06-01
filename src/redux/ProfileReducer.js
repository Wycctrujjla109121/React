const ADD_POST = 'ADD-POST'
const UPDATE = 'UPDATE'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                img: "https://sun9-28.userapi.com/impf/c824503/v824503099/1758cd/FuaPI1dPq0E.jpg?size=483x259&quality=96&sign=7676fe76512aebb93eda62d45d4e13f9&type=album",
                message: state.newPostChange
            };
            state.postData.unshift(newPost);
            state.newPostChange = '';
            return state

        case UPDATE:
            state.newPostChange = action.newText;
            return state

        default: return state
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeTextareaActionCreator = (textChange) => ({ type: UPDATE, newText: textChange })

export default profileReducer