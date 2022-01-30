import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReduser from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReduser} from 'redux-form'
import appReduser from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarR: sidebarReducer,
    usersPage: usersReducer,
    auth: authReduser,
    form: formReduser,
    app: appReduser,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store =store;

export default store