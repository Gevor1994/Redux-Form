import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "./validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={'each_field'}>
                <Field validate={[required]}  component={Input} name={'login'} placeholder={'Login'} className={'input'} />
            </div>
            <div className={'each_field'}>
                <Field validate={[required]} component={Input} name={'password'} placeholder={'Password'} className={'input'} />
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    const onSubmit = (loginData) => {
        console.log(loginData)
    }
    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div >
            <div className={(hasError) ? 'errorStyle' : 'input_wrapper'} >
                <input  {...input} {...props} />
            </div>
            {hasError && <p>{meta.error}</p>}
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;