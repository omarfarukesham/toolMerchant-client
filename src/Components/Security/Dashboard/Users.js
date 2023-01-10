import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';
// import Loading from '../../Shared/Loading';

const Users = () => {
    const { data, isLoading, refetch } = useQuery('available', () => fetch('https://toolmerchant-server-production.up.railway.app/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`https://toolmerchant-server-production.up.railway.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (

        <>
            <h1 className='text-2xl text-center'>users:{data?.length}</h1>
            <div class="overflow-x-auto" data-aos="fade-up" data-aos-duration="2000">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Approved</th>
                            <th>Restriction</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' ? <button onClick={() => makeAdmin(user?.email)} class="btn btn-xs">Make Admin</button> : <button class="btn btn-xs btn-primary">Admin</button>} </td>
                                <td><button class="btn btn-xs">Remove Admin</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;