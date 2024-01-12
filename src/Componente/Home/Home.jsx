// import { FaBed, FaHandsWash, FaRegSquareFull } from "react-icons/fa";
const Home = () => {
    return (
        <div className="text-center bg-white">

            {/* Hero part start  */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item min-h-sc relative w-full ">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full " />
                    <div className="hero-content text-start  absolute hero pt-10 text-black">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                            <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                            <p className="mb-5"> $580,000  </p>
                            <button className="btn btn-primary">view Details</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item min-h-sc relative w-full ">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full " />
                    <div className="hero-content text-start  absolute hero pt-10 text-black">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                            <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                            <p className="mb-5"> $580,000  </p>
                            <button className="btn btn-primary">view Details</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item min-h-sc relative w-full ">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full " />
                    <div className="hero-content text-start  absolute hero pt-10 text-black">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                            <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                            <p className="mb-5"> $580,000  </p>
                            <button className="btn btn-primary">view Details</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item min-h-sc relative w-full ">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full " />
                    <div className="hero-content text-start  absolute hero pt-10 text-black">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                            <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                            <p className="mb-5"> $580,000  </p>
                            <button className="btn btn-primary">view Details</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* Hero part end  */}
            {/* Discover our part start  */}
            <div className="bg-slate-300">
                <div className="text-center text-black py-10">
                    <h1 className="text-3xl font-bold py-8">Discover Our Featured Listings</h1>
                    <p className="text-2xl">These featured listings contain exclusive real estate opportunities within the city </p>
                </div>
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item card card-body min-h-sc relative   ">
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full " />
                            <div className="hero-content text-start  absolute hero pt-10 text-black">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                                    <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                                    <p className="mb-5"> $580,000  </p>
                                    <button className="btn btn-primary">view Details</button>
                                </div>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item card card-body min-h-sc relative   ">
                            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full " />
                            <div className="hero-content text-start  absolute hero pt-10 text-black">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                                    <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                                    <p className="mb-5"> $580,000  </p>
                                    <button className="btn btn-primary">view Details</button>
                                </div>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item card card-body min-h-sc relative   ">
                            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full " />
                            <div className="hero-content text-start  absolute hero pt-10 text-black">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                                    <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                                    <p className="mb-5"> $580,000  </p>
                                    <button className="btn btn-primary">view Details</button>
                                </div>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item card card-body min-h-sc relative   ">
                            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full " />
                            <div className="hero-content text-start  absolute hero pt-10 text-black">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Awesome Family Home </h1>
                                    <p className="mb-5"> 285 Beds 291 Baths 1500 sq ft </p>
                                    <p className="mb-5"> $580,000  </p>
                                    <button className="btn btn-primary">view Details</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Discover our part end  */}
            {/* Explore Apartment part start  */}
            <div>
                <div className="text-center text-black py-10">
                    <h1 className="text-3xl font-bold py-8">Explore Apartment Types</h1>
                    <p className="text-2xl">Explore all the different types of apartments so you can choose the best option for you  </p>
                </div>
                {/* view this apartment part start */}
                <div className="w-3/4">
                    <div className=" grid grid-flow-row grid-cols-2">
                        <div className="">
                            <div className="carousel-item card card-body min-h-sc relative">
                                <img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/cat-4-1.jpg" alt="" />
                            </div>
                            <div className="hero-content text-start  absolute hero pt-10 text-black bg-white">
                                <h1>Town home</h1>
                                <h1>20 properties</h1>
                            </div>
                        </div>
                        <div className="    ">
                            <div className="carousel-item card card-body min-h-sc relative">
                                <img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2019/01/apartament-4-1399x899.jpg" alt="" />
                            </div>
                            <div className="hero-content text-start  absolute hero pt-10 text-black bg-white">
                                <h1>Town home</h1>
                                <h1>20 properties</h1>
                            </div>
                        </div>
                        <div className="">
                            <div className="carousel-item card card-body min-h-sc relative">
                                <img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2019/01/apartament-4-1399x899.jpg" alt="" />
                            </div>
                            <div className="hero-content text-start  absolute hero pt-10 text-black bg-white">
                                <h1>Town home</h1>
                                <h1>20 properties</h1>
                            </div>
                        </div>
                        <div className="">
                            <div className="carousel-item card card-body min-h-sc relative">
                                <img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/cat-4-1.jpg" alt="" />
                            </div>
                            <div className="hero-content text-start  absolute hero pt-10 text-black bg-white">
                                <h1>Town home</h1>
                                <h1>20 properties</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/12">

                </div>
                {/* view this apartment part end */}
            </div>

            {/* Explore Apartment part end  */}
            {/* Properties Apartment Rent part Start  */}

            <div className="bg-slate-200 py-10">
                <div>
                    <div className="text-center text-black py-10">
                        <h1 className="text-3xl font-bold py-8">Properties For Rent</h1>
                        <p className="text-2xl">Search over 2000 properties to rent from the top agents in the country</p>
                    </div>
                </div>

                {/* Properties for Rent part Start  */}
                <div className="grid grid-flow-row grid-cols-3 gap-6 py-10">
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white text-black shadow-xl">
                        <figure><img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Awesome Family Home </h2>
                            <div className="card-actions flex gap-10">
                                <div className=" grid grid-flow-col gap-5 text-2xl">
                                    <p>  1</p>
                                    <p>  1</p>
                                    <p>  1200 sq ft</p>
                                </div>
                                <div className=" justify-end text-end items-end m-auto text-2xl">
                                    <a className="text-indigo-500 font-bold">$450,000</a>
                                </div>
                            </div>
                        </div>
                    </div>
              

                    
                </div>

                <div>
                    <button className="btn btn-success mb-10 ">View more</button>
                </div>
                {/* Properties for Rent part end  */}
            </div>


            {/* Properties Apartment Rent part end  */}




















































        </div>
    );
};

export default Home;