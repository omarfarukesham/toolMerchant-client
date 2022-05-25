import React from 'react';
import omar from '../../assets/omar.png'
const Profile2 = () => {
    return (
        <>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'></div> */}
            <div className='flex justify-center align-middle gap-10 mt-12'>
                <div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src={omar} />
                        </div>
                    </div>

                </div>
                <div>
                    <small>Hi,<br></br>
                        <strong>Omar Faruk(Bangladesh)</strong>, is full-stack-web-developer(MERN),<br></br>
                        6+ years full-time professional working as a Soft skills trainer, Mentor and Coach.
                    </small><br></br>

                </div>
            </div>

            <div class="divider mx-10 font-bold text-3xl text-secondary my-10"> Skills in Technologies </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4  bg-primary py-10'>

                <div class="indicator mx-5">
                    <span class="indicator-item indicator-center badge badge-accent"></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" />
                        </div>

                    </div>
                </div>
                <div class="indicator">
                    <span class="indicator-item indicator-center badge badge-secondary "></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://www.logo.wine/a/logo/Node.js/Node.js-Logo.wine.svg" />
                        </div>

                    </div>
                </div>
                <div class="indicator ">
                    <span class="indicator-item indicator-center badge badge-secondary"></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://www.logo.wine/a/logo/MongoDB/MongoDB-Logo.wine.svg" />
                        </div>

                    </div>
                </div>
                <div class="indicator ">
                    <span class="indicator-item indicator-center badge badge-secondary"></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://mpng.subpng.com/20180604/xox/kisspng-web-development-express-js-javascript-software-fra-frame-work-5b15153ce5bb85.615845371528108348941.jpg" />
                        </div>

                    </div>
                </div>
                <div class="indicator ">
                    <span class="indicator-item indicator-center badge badge-secondary"></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg" />
                        </div>

                    </div>
                </div>
                <div class="indicator">
                    <span class="indicator-item indicator-center badge badge-secondary"></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/768px-Firebase_Logo.svg.png?20200221081546" />
                        </div>

                    </div>
                </div>
                <div class="indicator">
                    <span class="indicator-item indicator-center badge badge-secondary"></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://ies.solutions/wordpress/wp-content/uploads/jwt.png" />
                        </div>

                    </div>
                </div>
                <div class="indicator ">
                    <span class="indicator-item indicator-center badge badge-secondary"></span>
                    <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                        <div class="w-32 bg-">
                            <img src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" />
                        </div>

                    </div>
                </div>


            </div>

            <div class="divider font-bold text-3xl text-secondary my-20"> Hire Me </div>

            <div className=''>
                <div class="hero h-screen lg:h-[70vh] bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <iframe width="699" height="393" src="https://www.youtube.com/embed/iHv6RW3OBdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h1 class="text-5xl font-bold">Technology and Productivity</h1>
                            <p class="py-6">
                                Technology is the ultimate solution for Complex human task, to bring the right proficiency of your services,<br></br>
                                I am willing to help you any time.
                                I always promise to add value to your business to compete globally.

                            </p>
                            <a className='btn btn-secondary btn-xs' href='https://docs.google.com/document/d/1sPzxEgZM-iGuJ4kmswOsoUwgFMKZ9dm065ENagIo-iQ/edit' download >Download cv</a>
                            <br></br>
                            <a target='_blank' href="https://github.com/omarfarukesham" className='btn btn-secondary btn-xs'> Github Profile </a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="divider font-bold text-3xl text-secondary my-20"> Experiences</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10'>
                <div class="card  bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>10minschools</h2>
                        <p>Freelance Trainer</p>
                        <div class="w-full">
                            <img src="https://bangladeshpost.net/webroot/uploads/featureimage/2020-05/5eb028efcfb2b.jpg" />
                        </div>

                    </div>
                </div>
                <div class="card bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>BGMEA</h2>
                        <p>Learning and Development, Trainer</p>
                        <div class="w-full">
                            <div>
                                <img src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/thumbnail/lead/news/5189700_5114178_8503083_4819574_9453778_5145035_New%20Project%20(1).jpg" />
                            </div>

                        </div>

                    </div>
                </div>
                <div class="card bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>ILO, Bangladesh</h2>
                        <p>Sr. Master Trainer</p>
                        <div class="w-full">
                            <img src="https://aiforgood.itu.int/wp-content/uploads/2022/05/ILO-2022-1000x392-1.png" />
                        </div>

                    </div>
                </div>
                <div class="card bg-base-100 hover:shadow-xl">
                    <div class="card-body text-center">
                        <h2 className='text-xl font-bold text-secondary'>a2i, Bangladesh</h2>
                        <p>Trainer</p>
                        <div class="w-full">
                            <img src="https://www.daily-bangladesh.com/media/imgAll/2019December/en/a2i-2001111502.jpg" />
                        </div>

                    </div>
                </div>

            </div>



            <div class="divider font-bold text-3xl text-secondary my-20"> Education and Training</div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 '>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-12 rounded-full">
                            <img src="https://www.vhv.rs/dpng/d/397-3976471_education-icon-png-transparent-png.png" />
                        </div>
                    </div>

                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Post Graduation</h2>
                        <p>Master of Economics</p>
                        <p>National University</p>

                        <small>Result - 1st Class</small>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-around">
                        <div class="w-12 rounded-full">
                            <img src="https://aplikas.com/wp-content/uploads/2017/01/icon-training-informationmapping-r-worldssl-net_.png" />
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Diploma in web Development(php,sql)</h2>
                        <p>People and Tech(usa, online)</p>
                        <small>Successfully completion with Certified</small>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-16 rounded-full">
                            <img src="https://static.vecteezy.com/system/resources/previews/003/241/296/non_2x/webinar-online-training-tutor-icon-vector.jpg" />
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Complete Web Development(MERN)</h2>
                        <p>Programming Hero(Bangladesh)</p>
                        <small>Successfully completed with Certified</small>

                    </div>
                </div>
            </div>


            <div class="divider font-bold text-3xl text-secondary my-10"></div>
            <div>
                <footer class="footer items-center p-4 bg-neutral text-neutral-content">
                    <div class="items-center grid-flow-col">
                        <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </footer>
            </div>


        </>
    );
};

export default Profile2;