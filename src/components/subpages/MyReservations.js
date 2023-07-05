import { useEffect , useState } from 'react';
import { Link } from "react-router-dom";

export default function MyReservations({fields}) {
    const [formFields, setFormFields] = useState(fields[0]);
    const [fieldsList, setFieldsList] = useState([]);

    useEffect(() => {
        
        if(fields.length)
        {
        setFormFields(fields[0]);
        let fieldsList1 = Object.keys(formFields).map(key => 
            <li key={key}>{key} : {formFields[key]}</li>
        )
        setFieldsList(fieldsList1);
        
        }
        else {
        console.log("field list is null.");
        }
    }, [fields]);
  
    return (
        <section className='container col-xl-10 col-xxl-8 px-4 py-5 myreservation'>   
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-md-10 mx-auto col-lg-10">

                    <h1 className="display-4 fw-bold lh-1 mb-3">Check Reservation</h1>
                    {
                    formFields && 
                        <>
                            <h4>A confirmation message has been sent to your email.</h4>
                            <h4>Thanks for dining with us!</h4>
                            <h4>your reservation table information is :</h4>
                            <ul className='fields'>
                                {fieldsList}
                            </ul>
                        </>
                         
                    }
                    
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        {/* <Link className="btn redirect-button" to="/order">
                        <button class="action-button">Order Online</button>
                        </Link> */}
                        <Link className="btn redirect-button" to="/">
                        <button class="action-button">Home Page</button>
                        </Link>
                        
                    </div>   
                </div>
            </div>
                
        </section>
    );
}