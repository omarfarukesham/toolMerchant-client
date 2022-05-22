import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams()
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setProduct(data));
    // }, []);


    const { data, isLoading } = useQuery('available', () => fetch(`http://localhost:5000/products/${id}`).then(res => res.json())
    )

    // react need loading time here is the loader...................................
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <>

            <div class="card card-side bg-base-100 shadow-xl mx-20 mt-20">
                <div class="card-body">
                    <h2 class="card-title">Name: {data?.name}!</h2>
                    <h2 class="card-title">Available :{data?.stock}</h2>
                    <h2 class="card-title text-purple-500">MinOrder :{data?.minOrderQty}</h2>
                    <h2 class="card-title font-bold text-orange-500">LodPrice :${data?.price}</h2>
                    <h2 class="card-title font-bold text-orange-500">Shipping :$15</h2>

                    <p>{data?.details}</p>
                </div>
                <figure><img src={data?.image} alt="Shoes" /></figure>
            </div>
            <div>
                {/* <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    );
};

export default Purchase;