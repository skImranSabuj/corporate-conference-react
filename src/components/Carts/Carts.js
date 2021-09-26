import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = (props) => {
    const { cart, total, handleBooking } = props;
    // console.log(typeof (total))
    return (
        <div>
            <div className="carts-container text-center">
                <h3>Speakers Added: <span className="count">{props.cart.length}</span> </h3>
                <h5>Total Spendings: ${total}</h5>
                {
                    cart.map(c => <Cart
                        key={c.id}
                        handleBooking={handleBooking}
                        cart={c}>
                    </Cart>
                    )

                }
            </div>
        </div>
    );
};

export default Carts;