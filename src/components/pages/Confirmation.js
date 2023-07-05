
import { useEffect , useState } from 'react';
import restaurant from '../../assets/images/restaurant.jpg';
import { Link } from "react-router-dom";

export default function Confirmation({fields}) {
  const [formFields, setFormFields] = useState(fields[0]);
  const [fieldsList, setFieldsList] = useState([]);

  useEffect(() => {
    // console.log(fields);
    // console.log(" length : " + fields.length);
    if(fields.length)
    {
      
      setFormFields(fields[0]);
      // console.log(" form fields : ");
      // console.log(formFields);
      let fieldsList1 = Object.keys(formFields).map(key => 
        <li key={key}>{key} : {formFields[key]}</li>
      )
      setFieldsList(fieldsList1);
      
    }
    else {
      // fieldsList = [];
      console.log("field list is null.");
      // console.log(fieldsList);
    }
  }, [fields]);

  // console.log(" form fields out of effect hook : ");
  // console.log(formFields);
  // console.log(" fieldsList out of effect hook : ");
  // console.log(fieldsList);
  
 
  return (
    <header className="confirmation-header">
      
      <div class="px-4 pt-5 my-5 text-center border-bottom confirmation-text">
        <h1 class="display-4 fw-bold">Your Reservation is Confirmed!</h1>
        
        <div class="col-lg-6 mx-auto">
          <h4>A confirmation message has been sent to your email.</h4>
          <h4>Thanks for dining with us!</h4>
          <h4>your reservation table information is :</h4>
          <ul className='fields'>
            {fieldsList}
          </ul>

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
      
    </header>
  );
}
