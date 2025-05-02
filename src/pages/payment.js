import '../style/payment.css';
import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <h2 className="payment-title">Payment for WaMa</h2>

        <div className="method-selection">
          <label>
            <input
              type="radio"
              value="card"
              checked={method === 'card'}
              onChange={(e) => setMethod(e.target.value)}
            />
            Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={method === 'upi'}
              onChange={(e) => setMethod(e.target.value)}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="qr"
              checked={method === 'qr'}
              onChange={(e) => setMethod(e.target.value)}
            />
            QR Code
          </label>
          <label>
            <input
              type="radio"
              value="netbanking"
              checked={method === 'netbanking'}
              onChange={(e) => setMethod(e.target.value)}
            />
            Net Banking
          </label>
        </div>

        <form className="payment-form">
          {method === 'card' && (
            <>
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Ajju Hariom" />
              </div>
              <div>
                <label htmlFor="cardnumber">Card Number</label>
                <input type="text" id="cardnumber" maxLength="16" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="row">
                <div className="column">
                  <label htmlFor="expiry">Expiry</label>
                  <input type="text" id="expiry" maxLength="5" placeholder="MM/YY" />
                </div>
                <div className="column">
                  <label htmlFor="cvv">CVV</label>
                  <input type="password" id="cvv" maxLength="3" placeholder="123" />
                </div>
              </div>
            </>
          )}

          {method === 'upi' && (
            <div>
              <label htmlFor="upi">UPI ID</label>
              <input type="text" id="upi" placeholder="example@upi" />
            </div>
          )}

          {method === 'qr' && (
            <div className="qr-box">
              <p>Scan this QR code using your UPI app:</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/UPI-QR-Code-Example.svg/256px-UPI-QR-Code-Example.svg.png"
                alt="QR Code"
                className="qr-image"
              />
            </div>
          )}

          {method === 'netbanking' && (
            <div>
              <label htmlFor="bank">Select Your Bank</label>
              <select id="bank">
                <option value="">-- Choose Bank --</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
          )}

          <button type="submit" className="payment-button"
          onClick={() => navigate('/admin')}
          >Make Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
