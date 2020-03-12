import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator, minLengthCreator, email} from "./validators";

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);
const minLength6 = minLengthCreator(6);


const RegisterForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={'each_field'}>
                <Field validate={[required, minLength2] } name={'name'} component={Input} placeholder={'Name'}  className={'input'}/>
            </div>
            <div className={'each_field'}>
                <Field validate={[required]} name={'surname'} component={Input} placeholder={'Surname'} className={'input'}/>
            </div>
            <div className={'each_field'}>
                <Field validate={[required, email]} name={'email'} component={Input} placeholder={'Email'} className={'input'} />
            </div>
            <div className={'each_field'}>
                <Field validate={[required, minLength6, maxLength10]} name={'password'} component={Input} placeholder={'Password'} className={'input'} />
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'} /> remember me
            </div>
            <div>
                <button>Register </button>
            </div>
        </form>
    )
}

const Register = (props) => {
    const onSubmit = (registerData) => {
        console.log(registerData)
    }
    return <div>
        <h1>Register</h1>
       <RegisterReduxForm onSubmit={onSubmit}/>
    </div>
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

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm)

export default  Register;