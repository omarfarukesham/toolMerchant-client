import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const ManageOrder = () => {

    //using react query for loading appointment data..................................
    const { data, isLoading } = useQuery('available', () => fetch('https://aqueous-scrubland-33744.herokuapp.com/orders').then(res => res.json())
    )
    //react need loading time here is the loader...................................
    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(orders)
    return (
        <div class="overflow-x-auto">
            <h1 className='text-center text-3xl font-bold py-5 text-secondary'>Total Orders -{data.length}</h1>
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>itemName</th>
                        <th>Quantity</th>
                        <th>BuyerName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data?.map((order, index) => <>
                            <tr>
                                <th>{index+1}</th>
                                <td>{order?.product}</td>
                                <td>{order?.orderQty}</td>
                                <td>{order?.name}</td>
                                <td><button className='btn btn-warning btn-xs'>Pending</button></td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;