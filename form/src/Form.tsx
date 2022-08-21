import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
type Iinput = {
    password: string,
    confirmPwd: string
}
const Form = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('پسورد شما مشکل داره')
            .min(3, 'Password must be at 3 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm<Iinput>(formOptions)
    const { errors } = formState
    function onSubmit(data:any) {
        console.log(JSON.stringify(data, null, 4))
        return false
    }
    return (
        <div className="container mt-5">
            <h2>React Confirm Password Validation Example</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPwd')}
                        className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
