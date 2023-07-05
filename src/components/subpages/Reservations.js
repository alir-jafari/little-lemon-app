import React , { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {Link} from 'react-router-dom';

export default function Reservations({fieldsForm}) {
    const {
        user,
        setUser
    } = useContext(UserContext);
    const navigate = useNavigate();

    const returnToLoginPage = <div class="px-4 py-5 my-5 text-center">
                                    <h1 class="display-5 fw-bold">Sorry</h1>
                                    <div class="col-lg-6 mx-auto">
                                    <p class="lead mb-4">you must first sign in then reserve a table.</p>
                                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                        <Link  to="/login">
                                            <button id="button">Sign in</button>
                                        </Link>
                                    </div>
                                    </div>
                             </div> ;
    
    
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            phone_number: '',
            people: 1,
            date: '',
            time: '',
            occasion: '',
            seating_preferences: '',
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
            last_name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            message: Yup.string()
                .min(10,'Must be 10 characters at least')
                .max(300, 'Must be 300 characters or less'),
            phone_number: Yup.string()
                .required('Required'),
            people: Yup.number()
                .max(100, 'Must be below 100 ')
                .required('Required'),  
            date: Yup.date()
                
                .required('Required'),
            time: Yup.string()
                .required('Required'),
            occasion: Yup.string()
                .required('Required'),
            seating_preferences: Yup.string()
                .required('Required'),  
        }),
        onSubmit: values => {
            fieldsForm(values);
            // alert(JSON.stringify(values, null, 2));
          
            navigate('/confirmation');
        },
    });

    if(user===null){
        return (
            returnToLoginPage
        );
    }

    return (
        <section className='container col-xl-10 col-xxl-8 px-4 py-5 reservation'>   
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-md-10 mx-auto col-lg-10">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Reserve a Table</h1>
                    <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={formik.handleSubmit}>
                        <div className="form-floating mb-3">
                            
                            <input 
                            type="text" 
                            id="first_name" 
                            name='first_name'
                            className={formik.touched.first_name && formik.errors.first_name ? (
                                "form-control error-element"
                            ) : "form-control"}
                            placeholder="first name *" 
                            {...formik.getFieldProps('first_name')}
                            />

                            <label htmlFor="first_name">First Name *</label>

                            {formik.touched.first_name && formik.errors.first_name ? (
                                <div className='error'>{formik.errors.first_name}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                id="last_name" 
                                name='last_name'
                                className={formik.touched.last_name && formik.errors.last_name ? (
                                "form-control error-element"
                            ) : "form-control"}
                                placeholder="last name" 
                                {...formik.getFieldProps('last_name')}
                            />

                            <label htmlFor="last_name">Last Name *</label>

                            {formik.touched.last_name && formik.errors.last_name ? (
                                <div className='error'>{formik.errors.last_name}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                id="email" 
                                name='email'
                                className={formik.touched.email && formik.errors.email ? (
                                "form-control error-element"
                            ) : "form-control"} 
                                placeholder="name@example.com" 
                                {...formik.getFieldProps('email')}
                            />
                            <label htmlFor="email">Email</label>
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="phone" 
                                id="phone_number" 
                                name='phone_number'
                                className={formik.touched.phone_number && formik.errors.phone_number ? (
                                "form-control error-element"
                            ) : "form-control"} 
                                placeholder="(xxx)-xxx-xxxx" 
                                {...formik.getFieldProps('phone_number')}
                            />
                            <label htmlFor="phone_number">Phone Number *</label>
                            {formik.touched.phone_number && formik.errors.phone_number ? (
                                <div className='error'>{formik.errors.phone_number}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="number" 
                                id="people" 
                                name='people'
                                className={formik.touched.people && formik.errors.people ? (
                                "form-control error-element"
                            ) : "form-control"} 
                                placeholder="Number of People" 
                                {...formik.getFieldProps('people')}
                            />
                            <label htmlFor="people">Number of People *</label>
                            {formik.touched.people && formik.errors.people ? (
                                <div className='error'>{formik.errors.people}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="date" 
                                id="date" 
                                name='date'
                                className={formik.touched.date && formik.errors.date ? (
                                "form-control error-element"
                            ) : "form-control"} 
                                placeholder="Date" 
                                {...formik.getFieldProps('date')}
                            />
                            <label htmlFor="date">Date</label>
                            {formik.touched.date && formik.errors.date ? (
                                <div className='error'>{formik.errors.date}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="time" 
                                id="time" 
                                name='time'
                                className={formik.touched.time && formik.errors.time ? (
                                "form-control error-element"
                            ) : "form-control"}
                                placeholder="Time" 
                                {...formik.getFieldProps('time')}
                            />
                            <label htmlFor="time">Time</label>
                            {formik.touched.time && formik.errors.time ? (
                                <div className='error'>{formik.errors.time}</div>
                            ) : null}
                        </div>
                    
                        <div className="form-floating mb-3">
                            
                            <select
                            id="occasion"
                            name='occasion'
                            className={formik.touched.occasion && formik.errors.occasion ? (
                                "form-select error-element"
                            ) : "form-select"}
                            aria-label="select Occasion" 
                            {...formik.getFieldProps('occasion')}
                            >
                                <option defaultValue>Open this select Occasions</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                                <option>Other</option>
                            </select>
                            <label htmlFor="occasion">Occasion</label>
                            {formik.touched.occasion && formik.errors.occasion ? (
                                <div className='error'>{formik.errors.occasion}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            
                            <select 
                            id="seating_preferences" 
                            name="seating_preferences" 
                            className={formik.touched.seating_preferences && formik.errors.seating_preferences ? (
                                "form-select error-element"
                            ) : "form-select"} 
                            aria-label="select Seating Preferences" 
                            {...formik.getFieldProps('seating_preferences')}
                            >
                                <option defaultValue>Open this select Seating Preferences </option>
                                <option>Indoors</option>
                                <option>Outdoor (Patio)</option>
                                <option>Outdoor (Sidewalk)</option>
                            </select>
                            <label htmlFor="seating_preferences">Seating Preferences</label>
                            {formik.touched.seating_preferences && formik.errors.seating_preferences ? (
                                <div className='error'>{formik.errors.seating_preferences}</div>
                            ) : null}
                        </div>

                        <div className="form-floating mb-3">
                            <textarea 
                            className={formik.touched.message && formik.errors.message ? (
                                "form-control error-element"
                            ) : "form-control"} 
                            rows="5" 
                            name="message" 
                            id="message" 
                            placeholder="Message"
                            {...formik.getFieldProps('message')}
                            >

                            </textarea>
                            <label htmlFor="message">Message</label>
                            {formik.touched.message && formik.errors.message ? (
                                <div className='error'>{formik.errors.message}</div>
                            ) : null}
                        </div>
                        <hr className="my-4" />
                        <button 
                        className="w-100 btn btn-lg submit-button" 
                        type="submit" 
                        disabled={!(formik.isValid && formik.dirty)}
                        >
                        Book a Table
                        </button>
                    
                    
                    </form>
                </div>
            </div>
                
        </section>
    );
}