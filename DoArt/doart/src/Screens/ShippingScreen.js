import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps';


function ShippingScreen(props) {

    const [addres, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postal, setPostal] = useState('');
   
    const dispatch = useDispatch();
  
   
   
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(saveShipping(addres,city,postal,country));
      props.history.push('payment')
    }
    return <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
    
     <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Shipping </h2>
          </li>
         
          <li>
            <label htmlFor="addres">
              Address
            </label>
            <input type="text" name="addres" id="addres" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
        
          <li>
            <label htmlFor="city">
              City
            </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
        
          <li>
            <label htmlFor="country">
              Country
            </label>
            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postal">
              Postal Code
            </label>
            <input type="text" name="postal" id="postal" onChange={(e) => setPostal(e.target.value)}>
            </input>
          </li>
        
        
          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>
  
        </ul>
      </form>
    </div>
    </div>
  }
  export default  ShippingScreen;