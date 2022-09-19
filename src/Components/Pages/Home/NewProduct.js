import React from 'react';
import { Link } from 'react-router-dom';

const NewProduct = () => {
    return (
        <div className='mx-auto bg-base-200 shadow-lg p-10 w-full'>
            <h1 className='text-3xl mb-5 text-secondary text-center font-bold'><i class="fa-solid fa-dolly mx-2 text-secondary"></i>New Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Health & Personal Care!
                            <div className="badge badge-accent">NEW</div>
                        </h2>
                        <div className="card-actions justify-center">
                         
                            <Link to="/HealthCare" className="badge badge-outline">See More</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='img-fluid' src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Electrics Goods!
                            <div className="badge badge-accent">NEW</div>
                        </h2>
                        <div className="card-actions justify-center">
                         
                            <Link to="/eProd" className="badge badge-outline">See More</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals__2x._SY608_CB430401031_.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           Mans Accessories
                            <div className="badge badge-accent">NEW</div>
                        </h2>
                        <div className="card-actions justify-center">
                         
                            <Link to="/mProd" className="badge badge-outline">See More</Link>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    );
};

export default NewProduct;