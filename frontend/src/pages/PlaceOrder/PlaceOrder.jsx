import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { ShopContext } from '../../Context/ShopContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formValues).forEach(key => {
      if (!formValues[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
    }
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>

        <div className='multi-fields'>
          <input
            type="text"
            name="firstName"
            placeholder='First Name'
            value={formValues.firstName}
            onChange={handleInputChange}
            className={errors.firstName ? 'error' : ''}
          />
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={formValues.lastName}
            onChange={handleInputChange}
            className={errors.lastName ? 'error' : ''}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder='Email Address'
          value={formValues.email}
          onChange={handleInputChange}
          className={errors.email ? 'error' : ''}
        />
        <input
          type="text"
          name="street"
          placeholder='Street'
          value={formValues.street}
          onChange={handleInputChange}
          className={errors.street ? 'error' : ''}
        />

        <div className='multi-fields'>
          <input
            type="text"
            name="city"
            placeholder='City'
            value={formValues.city}
            onChange={handleInputChange}
            className={errors.city ? 'error' : ''}
          />
          <input
            type="text"
            name="state"
            placeholder='State'
            value={formValues.state}
            onChange={handleInputChange}
            className={errors.state ? 'error' : ''}
          />
        </div>
        <div className='multi-fields'>
          <input
            type="text"
            name="zipCode"
            placeholder='Zip Code'
            value={formValues.zipCode}
            onChange={handleInputChange}
            className={errors.zipCode ? 'error' : ''}
          />
          <input
            type="text"
            name="country"
            placeholder='Country'
            value={formValues.country}
            onChange={handleInputChange}
            className={errors.country ? 'error' : ''}
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder='Phone'
          value={formValues.phone}
          onChange={handleInputChange}
          className={errors.phone ? 'error' : ''}
        />
      </div>

      <div className="place-order-right">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}.00</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:99}.00</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+99}.00</h3>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
