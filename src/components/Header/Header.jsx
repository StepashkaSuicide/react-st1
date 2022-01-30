import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-1-color-black-rgb.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    :<NavLink to={'/login'}>Login</NavLink> }
            </div>

        </header>
    )
}

export default Header