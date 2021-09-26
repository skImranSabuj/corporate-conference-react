import React, { useState, useEffect } from 'react';
import Carts from '../Carts/Carts';
import Heros from '../Heros/Heros';
import './Main.css'

const Main = () => {
    const [hero, setHero] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('./heros.JSON')
            .then(res => res.json())
            .then(data => setHero(data))
    }, []);
    const handleBooking = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
        setTotal(total + parseInt(person.Salary));
    }
    return (
        <div className="main-container">
            <div className="left-cards">
                <Heros
                    heros={hero}
                    handleBooking={handleBooking}
                >
                </Heros>

            </div>
            <div className="right-cart">
                <Carts
                    key={cart.id}
                    cart={cart}
                    total={total}
                ></Carts>
            </div>
        </div>
    );
};

export default Main;