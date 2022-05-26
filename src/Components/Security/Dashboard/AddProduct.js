import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AddProduct = () => {
    const [products, setProducts] = useState([])


    const addProduct = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const price = e.target.price.value
        const details = e.target.details.value
        const stock = e.target.stock.value
        const minOrderQty = e.target.minOrderQty.value

        const productInfo = {
            name: name,
            image: image,
            price: price,
            details: details,
            stock: stock,
            minOrderQty: minOrderQty
        }
        fetch('https://aqueous-scrubland-33744.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Product insert successfully");
                    const newProduct = [...products, data];
                    setProducts(newProduct);
                    e.target.reset()
                }
            })


    }
    //using react query for loading appointment data..................................
    const { data, isLoading } = useQuery('available', () => fetch('https://aqueous-scrubland-33744.herokuapp.com/products').then(res => res.json())
    )

    //react need loading time here is the loader...................................
    if (isLoading) {
        return <Loading></Loading>
    }

    const UpdateProduct = () => {

    }

   
    const deleteHandler = (id) => {
        const proceed = window.confirm("Are you sure for Delete .........");
        if (proceed) {
          const url = `https://aqueous-scrubland-33744.herokuapp.com/product/${id}`;
          fetch(url, {
            method: "delete",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = products.filter((user) => user._id !== id);
              setProducts(remaining);
              // console.log(data);
            });
        }
      };


    console.log(data)
    return (
        <>
 
            <div className='grid lg:grid-cols-1 md:grid-cols-1 mx-10 sm:mx-10' data-aos="fade-up" data-aos-duration="2000">
                <div class="card bg-base-200 shadow-xl py-5 ">
                    <h1 className='text-center font-bold text-secondary text-3xl'>Add Product</h1>
                    <form onSubmit={addProduct} className='grid grid-cols-1 gap-3 justify-items-center my-5'>
                        <input type="text" name='name' placeholder='Proudct Name' required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="image" placeholder='Product Img url...' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="price" placeholder='Price' required className="input input-bordered w-full max-w-xs" />
                        <textarea type="text" name="details" placeholder='Details....' className=" input-bordered w-full max-w-xs textarea" />
                        <input type="number" name="stock" placeholder="Quantity" required className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="minOrderQty" placeholder="Sales Lod" required className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Add Product" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
                <div className='mt-5'>
                    <div class="overflow-x-auto w-full">
                        <table class="table w-full">

                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <th>ProductImg</th>
                                    <th>ProductName</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data?.map((product, index) => <>
                                        <tr key={product?._id}>
                                            <th>
                                               {index+1}
                                            </th>
                                            <td>
                                                <div class="flex items-center space-x-3">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>{product?.name}</td>
                                            <td>{product?.stock}</td>
                                            <td>${product?.price}</td>
                                            <td><button onClick={()=>deleteHandler(product?._id)} className='btn btn-error btn-xs'>Delete</button></td>
                                            
                                           
                                        </tr>
                                    </>)
                                }



                            </tbody>

                            <tfoot>
                                <tr>
                                    <th>#</th>
                                    <th>ProductImg</th>
                                    <th>ProductName</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>


            </div>
            {/* MODAL CODE HERE..... */}
            <div>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg text-center text-secondary">UpdateProfile......</h3>
                        <form onSubmit={UpdateProduct} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                            <input type="text" name="image" placeholder='Img url...' className="input input-bordered w-full max-w-xs" />
                            <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            <input type="text" name="education" placeholder="education" className="input input-bordered w-full max-w-xs" />
                            <input type="text" name="city" placeholder="City" className="input input-bordered w-full max-w-xs" />

                            <input type="submit" value="Update" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AddProduct;