import React from 'react';

const Blogs = () => {
    return (
        <>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'></div> */}
            <div class="divider mx-10 font-bold text-3xl text-secondary my-10"> Question And Answer </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card w-96 bg-base-100 hover:shadow-xl">
                    <div class="card-body">
                        <h3 class="text-xl">#01 - How will you improve the performance of a React Application?</h3>
                        <ul>
                            <li>-components should receive only necessary props at once.</li>
                            <li>-Avoid unnecessary non optimized image</li>
                            <li>-Careful with rerendering with components</li>
                            <li>-Should avoid over css animation</li>
                            <li>-Analytics tracking libraries can reduce performace of react app</li>
                        </ul>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 hover:shadow-xl">
                    <div class="card-body">
                        <h3 class="text-xl text-accent">#02 - What are the different ways to manage a state in a React application?</h3>
                        <ul>

                            <li>-hooks allow to manage state in react app.</li>
                            <li>-Redux is the nice solution for manage state in react app.</li>
                            <li>-reactQuery is also a great tools to manage react state in app.</li>
                            <li>-using localstorage for functional component to maintain state in app.</li>
                        </ul>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 hover:shadow-xl">
                    <div class="card-body">
                        <h3 class="text-xl">#03- Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`?</h3>
                        <p>
                            it we do use state the directly that will automatically replace all data  that is depend on the state.
                            if we use spread operator "[...], "
                            that will help us to keep existing data on the state in which preset, futhermore,
                            new data will add with existing data in that state.
                        </p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 hover:shadow-xl">
                    <div class="card-body">
                        <h3 class="text-xl">#04 - How does prototypical inheritance work?</h3>
                        <p>
                            Each object has a private property which holds a link to another object called its prototype.
                             That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                              By definition, null has no prototype, and acts as the final link in this prototype chain.
                            Nearly all objects in JavaScript are instances of Object, which has null as its prototype.
                            Ref: MDN web docs..
                        </p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 hover:shadow-xl">
                    <div class="card-body">
                        <h3 class="text-xl">#05 - What is a unit test? Why should write unit tests?</h3>
                        <p>
                        Unit test is an significant algorithom process to finish the task perfectly, 
                        it can help us to figure out the flaws of programe that developer is writing. this tools also can benefits our programming 
                        efficieny in real time.
                         Moreover, this test teach us to follow the coding standred globally. A lot of advantage available for developer for using the unit test.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Blogs;