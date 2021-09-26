import React from 'react';
import './Heros.css';
import Hero from '../Hero/Hero';

const Heros = (props) => {
    // console.log(props.handleBooking)
    return (
        <div className="">
            <div className="heros-container">
                {
                    props.heros.map(person => <Hero
                        key={person.id}
                        handleBooking={props.handleBooking}
                        person={person}></Hero>)

                }
            </div>

        </div>
    );
};

export default Heros;