import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
// import CheckoutForm2 from './CheckoutForm2';

const stripePromise = loadStripe('pk_test_51L17S3Aulic6qQrOWGrbv6XevLHQxjWVo0r53sg6FZULDRq3dEvVlvx6rrXVJG4gDYYKs5ygvXNO1WXApC7dl9x300xr6raBfa');

const Payment = () => {
    const { id } = useParams()
    const url = `https://aqueous-scrubland-33744.herokuapp.com/order/${id}`
    // console.log(url)
    const { data:appointment, isLoading } = useQuery(['booking', id], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(typeof(parseInt(data[0].price)))

    return (
        <>
            <h1>payment id = {id}</h1>
            <h1 className='text-center font-bold'>DinnersClub Fake card = 3056930009020004 </h1>
            {/* <h1 className='text-red-700 font-bold text-center text-3xl'>Sorry Payment method is temporarily Off, please pay Cash On Delivery....</h1> */}
           {/* price == {parseInt(data[0].price)} */}

           <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12" data-aos="fade-up" data-aos-duration="2000">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {appointment[0]?.name}</p>
                <h2 class="card-title">Please Pay for {appointment[0]?.product}</h2>
                
                <p>Please pay: ${parseInt(appointment[0]?.price)}</p>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    card......
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment[0]} />
                    </Elements>
                </div>
            </div>
        </div>

        </>
    );
};

export default Payment;