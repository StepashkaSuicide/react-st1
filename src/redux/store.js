import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";





let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, are you?', likes: 15},
                {id: 3, message: 'Privet kak dela?', likes: 20},
                {id: 4, message: 'Privet kak dela?', likes: 20},
                {id: 5, message: 'Privet kak dela?', likes: 20},
                {id: 6, message: 'Privet kak dela?', likes: 20},
                {id: 7, message: 'Privet kak dela?', likes: 20},
                {id: 8, message: 'Privet kak dela?', likes: 20},
                {id: 9, message: 'Privet kak dela?', likes: 20},
            ],
            newPostText: 'stepashka',

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Privet kak dela'},
                {id: 3, message: 'Hi allo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'ky'},
            ],

            newMessageBody: ''
        },
        sidebar: {},

    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.state = store;