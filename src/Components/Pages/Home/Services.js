import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Services = () => {
    const [products, setProducts] = useState([])
    const [modalData, setModalData] = useState([])
  
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://aqueous-scrubland-33744.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 15)))
    }, [])

    const purchaseHandler = (id) => {
        navigate(`/purchase/${id}`);
    };


    const SortProduct = (a) => {
        console.log(a)
        fetch('https://aqueous-scrubland-33744.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                if (a === 'all') {
                    window.location.reload();
                }
                const match = data.filter(v => v.name.includes(a))
                setProducts(match)
            })
    }


    return (
        <>
            <div className='mx-auto bg-base-200 shadow-lg p-10 w-full'>
                <h1 className='text-3xl mb-5 text-secondary text-center font-bold'><i class="fa-solid fa-dolly mx-2 text-secondary"></i>Products</h1>

                <div className='flex justify-center mb-5'>
                    <button onClick={() => SortProduct('all')} className='btn btn-accent btn-xs mx-2 text-white'>All</button>
                    <button onClick={() => SortProduct('Watch')} className='btn btn-accent btn-xs mx-2 text-white'>Watch</button>
                    <button onClick={() => SortProduct('Mobile')} className='btn btn-accent btn-xs mx-2 text-white'>Mobile</button>
                    <button onClick={() => SortProduct('Laptop')} className='btn btn-accent btn-xs mx-2 text-white'>Laptop</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        products?.map(product => <>
                            <div className='card bg-base-100 shadow-xl text-center' data-aos="fade-up" data-aos-duration="2000">
                                <img src={product?.image} alt="product" className="rounded-xl ml-10 text-center h-48 w-48 p-5 " />

                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Product - {product?.name}</h2>
                                    <small className='text-bold text-red-500 text-center'> Price ${product?.price}</small>
                                    <div className="card-actions flex justify-between ">
                                        <label for="my-modal-6" onClick={() => setModalData(product)} class="btn btn-accent  modal-button text-white">Details</label>
                                        <button onClick={() => purchaseHandler(product?._id)} className="btn btn-secondary text-white">Buy Now</button>
                                    </div>
                                </div>
                            </div>

                        </>)
                    }
                </div>
            </div>
            <div>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <figure><img src={modalData?.image} alt="Shoes" /></figure>
                        <h3 class="font-bold text-lg">Name - {modalData?.name}</h3>
                        <h3 class="font-bold text-lg">Price - ${modalData?.price}</h3>
                        <h3 class="font-bold text-lg">Details -{modalData?.details}</h3>

                        <div class="modal-action">
                            <label for="my-modal-6" class="btn btn-accent text-white">Close!</label>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Services;