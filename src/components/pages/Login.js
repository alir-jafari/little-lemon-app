import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const {
        user,
        setUser
    } = useContext(UserContext);

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            user_name: '',
            password: '',
        },
        validationSchema: Yup.object({
            user_name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
            password: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .min(6, 'Must be 6 characters at least')
                .required('Required'),
        }),
        onSubmit: values => {
            setUser(values.user_name);
            navigate('/reservations');
        },
    });

    return (
        <section className="form-signin mt-5 pt-5 login">
            <form onSubmit={formik.handleSubmit}>
                <img className="mb-4" src="./images/logo.png" alt="" width="70%"  />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input 
                    type="text" 
                    className={formik.touched.user_name && formik.errors.user_name ? (
                        "form-control error-element"
                    ) : "form-control"}
                    id="user_name" 
                    name="user_name"
                    placeholder="User Name" 
                    {...formik.getFieldProps('user_name')}
                    />
                    <label htmlFor="floatingInput">User Name</label>

                    {formik.touched.user_name && formik.errors.user_name ? (
                        <div className='error'>{formik.errors.user_name}</div>
                    ) : null}
                </div>
                <div className="form-floating">
                    <input 
                    type="password" 
                    className={formik.touched.password && formik.errors.password ? (
                        "form-control error-element"
                    ) : "form-control"} 
                    id="password" 
                    name="password"
                    placeholder="Password" 
                    {...formik.getFieldProps('password')}
                    />
                    <label htmlFor="password">Password</label>
                    {formik.touched.password && formik.errors.password ? (
                        <div className='error'>{formik.errors.password}</div>
                    ) : null}
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button 
                type="submit" 
                disabled={!(formik.isValid && formik.dirty)}
                className="w-100 btn btn-lg btn-primary" 
                >
                    Sign in
                </button>
                
            </form>
        </section>
    );
}