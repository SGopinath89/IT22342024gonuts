import React, { useState, useEffect } from 'react';
import './Orders.css';
import orders_icon from '../../assets/parcel_icon.png';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await fetch('http://localhost:4000/vieworders');
      const data = await response.json();

      if (data.success) {
        setOrders(data.data);
      } else {
        alert("Error fetching orders");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await fetch('http://localhost:4000/status', {
        method: 'POST', // Ensure this matches your backend API method
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: orderId,
          status: event.target.value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        await fetchAllOrders();
      } else {
        alert("Error updating order status");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating order status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h1>Orders</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={orders_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>Rs.{order.amount}.00</p>
            <p>Payment: {order.address.deliveryMethod}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="Order Processing">Order Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
