import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const orderData = location.state?.orderData;
  const token = localStorage.getItem('auth-token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate payment processing (you should replace this with real payment processing logic)
    const isPaymentSuccessful = true; // Simulate successful payment

    if (isPaymentSuccessful) {
      alert('Payment Successful');
      
      // Add payment field to orderData
      const orderDataWithPayment = { ...orderData, payment: true };

      await fetch('http://localhost:4000/placeorder', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': token,
        },
        body: JSON.stringify(orderDataWithPayment),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Order Placed Successfully");
          navigate('/');
        } else {
          alert("Error Placing Order");
        }
      });
    } else {
      alert('Payment Failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Expire"
          value={expire}
          onChange={(e) => setExpire(e.target.value)}
          required
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Payment;
