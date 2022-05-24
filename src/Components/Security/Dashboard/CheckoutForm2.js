import React from 'react';

const CheckoutForm2 = ({appointment}) => {
    const { _id, price, name, email } = appointment;
    const price2 = parseInt(price)
    
    return (
        <div>
            Cheeck out.............{parseInt(price)}
            Cheeck out.............{typeof(price2)}
        </div>
    );
};

export default CheckoutForm2;