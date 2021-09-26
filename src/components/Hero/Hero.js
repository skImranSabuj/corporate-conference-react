import React from 'react';
import './Hero.css';
import fbIncon from '../../images/fb.png';
import linkedIn from '../../images/linkedIn.jpg';
import gmailIcon from '../../images/gmail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />

const Hero = (props) => {
    // console.log('from Hero: ', props)
    const { img, first_name, last_name, gender, Profession, Salary, email } = props.person;
    // console.log(props.person)
    return (
        <div className="cards">
            <div className="photo mt-2">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <h4>{first_name} {last_name}</h4>
            <p><span className="fw-bold">Gender:</span>  {gender}</p>
            <p> <span className="fw-bold">Profession:</span>  {Profession}</p>

            <h6> Salary:<span className="fw-normal"> ${Math.round(Salary)}</span></h6>
            <p>{mailIcon} {email} </p>
            <div className="d-flex justify-content-between w-50">
                <img className="w-25 rounded-circle" src={fbIncon} alt="" />
                <img className="w-25 rounded-circle" src={gmailIcon} alt="" />
                <img className="w-25 rounded-circle" src={linkedIn} alt="" />
            </div>
            <button onClick={() => props.handleBooking(props.person)} className="btn btn-warning text-dark fw-bold my-3">{cartIcon} Book Now</button>
        </div>
    );
};

export default Hero;