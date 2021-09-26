import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
const removeIcon = <FontAwesomeIcon icon={faWindowClose} />

const Cart = (props) => {
    const { img, first_name, last_name, gender, Profession, Salary, email } = props.cart;
    return (
        <div className="text-center cart">
            <img className="img-fluid" src={img} alt="" />
            <div className="deatis">
                <p className="fw-bold m-0">
                    {first_name} {last_name} <br />
                    <small className="fw-normal">{Profession.slice(0, 15)}</small> <br />
                    <small className="fw-bold">${Math.round(Salary)}</small>
                </p>
            </div>
            <button className="remove-btn"> {removeIcon}</button>

        </div>
    );
};

export default Cart;