import React from 'react';
import { useNavigate } from 'react-router-dom';
// const {image, name, details, minOrderQty, price, stock} = product

const SingleProduct = ({product}) => {
    const {image, name, details, minOrderQty, price, stock, _id} = product
    const navigate = useNavigate()
    
    const purchaseHandler = (id) => {
        navigate(`/purchase/${id}`);
      };
    return (
        <div className='card bg-base-100 shadow-xl"'>
            <figure class="px-10 pt-10">
                <img src={image} alt="product" class="rounded-xl object-cover h-48 w-96" />
            </figure>
            <h3 className='text-bold text-secondary text-center mt-5'> Price ${price}</h3>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h2 class="card-title">Minimum Order :{minOrderQty}</h2>
                <h2 class="card-title">Stock Available :{stock}</h2>
                <p>{details.slice(0,30)}</p>
                <div class="card-actions">
                    <button onClick={()=>purchaseHandler(_id)} class="btn btn-secondary text-white">Booking Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;