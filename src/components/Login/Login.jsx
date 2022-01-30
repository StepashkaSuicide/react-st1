import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "./../common/FormsControls/FormsControls.module.css";


const LoginForm =(props)=> {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'email'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'}
                           validate={[required]}
                           type={'password'} component={Input}/>
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
                </div>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>


    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login =(props)=> {
    const onSubmit = (formData)=> {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login)