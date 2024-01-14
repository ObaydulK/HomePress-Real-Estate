// import { FaBed, FaHandsWash, FaRegSquareFull } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"



const Home = () => {

    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplaySpeed: 500,
        cssEase: "linear"
    };
    const slide = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    const OurClients = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear"
    };


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
            <div className="bg-slate-300 ">
                <div className="text-center text-black py-10">
                    <h1 className="text-3xl font-bold py-8">Discover Our Featured Listings</h1>
                    <p className="text-2xl">These featured listings contain exclusive real estate opportunities within the city </p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        <div className=" p-10 ">
                            <div className=" align-middle m-auto bg-white     my-10 text-black">
                                <img className="   " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                                <div>
                                    <h1 className="text-3xl font-bold pt-3"> Studio in Compton</h1>
                                    <div className="grid grid-flow-col items-center">
                                        <dir className=" grid grid-flow-col  " >
                                            <p className="text-2xl">  4</p>
                                            <p className="text-2xl">  3</p>
                                            <p className="text-2xl">  5200sq ft</p>
                                        </dir>
                                        <div>
                                            <p>$50000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10">
                            <div className=" align-middle m-auto bg-white my-10 text-black">
                                <img className="  " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                                <div>
                                    <h1 className="text-3xl font-bold pt-3"> Studio in Compton</h1>
                                    <div className="grid grid-flow-col items-center">
                                        <dir className=" grid grid-flow-col  " >
                                            <p className="text-2xl">  4</p>
                                            <p className="text-2xl">  3</p>
                                            <p className="text-2xl">  5200sq ft</p>
                                        </dir>
                                        <div>
                                            <p>$50000</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="p-10">
                            <div className=" align-middle m-auto bg-white  my-10 text-black">
                                <img className="  " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                                <div>
                                    <h1 className="text-3xl font-bold pt-3"> Studio in Compton</h1>
                                    <div className="grid grid-flow-col items-center">
                                        <dir className=" grid grid-flow-col  " >
                                            <p className="text-2xl">  4</p>
                                            <p className="text-2xl">  3</p>
                                            <p className="text-2xl">  5200sq ft</p>
                                        </dir>
                                        <div>
                                            <p>$50000</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="p-10">
                            <div className=" align-middle m-auto bg-white  my-10 text-black">
                                <img className="  " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                                <div>
                                    <h1 className="text-3xl font-bold pt-3"> Studio in Compton</h1>
                                    <div className="grid grid-flow-col items-center">
                                        <dir className=" grid grid-flow-col  " >
                                            <p className="text-2xl">  4</p>
                                            <p className="text-2xl">  3</p>
                                            <p className="text-2xl">  5200sq ft</p>
                                        </dir>
                                        <div>
                                            <p>$50000</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Slider>
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







            {/* Real Estate from Rent part start  */}
            <div>
                <div>
                    <div className="hero   text-black ">
                        <div className="hero-content flex flex-1 flex-col lg:flex-row-reverse">
                            <div className="text-center bg-indigo-700 lg:text-left">
                                <h1 className="text-5xl font-bold">Why Choose Us</h1>
                                <p className="py-6">It’s our job to get you the best price for your home and make sure that you get the best possible deal on the property </p>
                                <div className="grid grid-flow-col gap-7">
                                    <div className="  w-full bg-[url('https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/icon-1.png')]"> hi
                                        <h1 className=" "></h1>
                                    </div>
                                    <div>
                                        <h1>Wide Range of Properties</h1>
                                        <p>With a robust selection of popular properties on hand,<br /> as well as leading properties from real estate experts.</p>
                                    </div>
                                </div>
                                <div className="grid grid-flow-col gap-7 my-10">
                                    <div className="  max-h-full bg-[url('https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/icon-1.png')]"> hi
                                        <h1 className=" "></h1>
                                    </div>
                                    <div>
                                        <h1>Wide Range of Properties</h1>
                                        <p>With a robust selection of popular properties on hand,<br /> as well as leading properties from real estate experts.</p>
                                    </div>
                                </div>
                                <div className="grid grid-flow-col gap-7 ">
                                    <div className="  h-full bg-[url('https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/icon-1.png')]"> hi
                                        <h1 className=" "></h1>
                                    </div>
                                    <div>
                                        <h1>Wide Range of Properties</h1>
                                        <p>With a robust selection of popular properties on hand,<br /> as well as leading properties from real estate experts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex-1 bg-slate-500 ">
                                <div> REal Estate Inquiry form</div>
                                <div className="card shrink-0     shadow-2xl  ">

                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="text-black">Inquiry  Type</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input  " required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="text-black">Personal info</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input  " required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="text-black">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input  " required />
                                        </div>
                                        <div className="form-control bg-sky-200">
                                            <label className="label">
                                                <span className="text-black">How to address you </span>
                                            </label   >
                                            <section className="bg">
                                                <select name="" id="">Mr</select>
                                                <select name="" id="">Mrs</select>
                                            </section>


                                            <input type="email" placeholder="email" className="input  " required />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Real Estate from  Rent part end  */}








            {/* Meet Our Agent part start  */}
            <div className="p-10 bg-indigo-50  text-black">
                <div>
                    <div className="text-center text-black py-10">
                        <h1 className="text-3xl font-bold py-8">Properties For Rent</h1>
                        <p className="text-2xl">Search over 2000 properties to rent from the top agents in the country</p>
                    </div>
                </div>
                {/* Meet Our Agent slider part start  */}
                <Slider {...slide}>
                    <div className=" align-middle m-auto">
                        <img className="w-96 h-96 align-middle m-auto rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                        <h1 className="text-3xl font-bold pt-3"> Donald Lloyd</h1>
                        <h1 className="text-2xl"> Chief Analytics Officer</h1>
                        <div className="py-5 items-start">
                            <p className="text-2xl">Mobile:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">office:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">fex:<span className="font-bold ">(866)234-5678</span></p>
                        </div>
                        {/* <div className=" ">
                            <p className=""><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                        </div> */}
                    </div>
                    <div className=" align-middle m-auto">
                        <img className="w-96 h-96 align-middle m-auto rounded-full border-8" src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-6.jpg" alt="" />
                        <h1 className="text-3xl font-bold pt-3"> Amanda Reiter</h1>
                        <h1 className="text-2xl"> Chief Legal Officer</h1>
                        <div className="py-5 items-start">
                            <p className="text-2xl">Mobile:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">office:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">fex:<span className="font-bold ">(866)234-5678</span></p>
                        </div>
                        {/* <div className=" ">
                            <p className=""><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                        </div> */}
                    </div>
                    <div className=" align-middle m-auto">
                        <img className="w-96 h-96 align-middle m-auto rounded-full border-8" src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-1.jpg" alt="" />
                        <h1 className="text-3xl font-bold pt-3"> Rich Wacksman</h1>
                        <h1 className="text-2xl"> Co-Founder and Executive Chairman</h1>
                        <div className="py-5 items-start">
                            <p className="text-2xl">Mobile:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">office:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">fex:<span className="font-bold ">(866)234-5678</span></p>
                        </div>
                        {/* <div className=" ">
                            <p className=""><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                        </div> */}
                    </div>
                    <div className=" align-middle m-auto">
                        <img className="w-96 h-96 align-middle m-auto rounded-full border-8" src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-2.jpg" alt="" />
                        <h1 className="text-3xl font-bold pt-3"> Jennifer Barton</h1>
                        <h1 className="text-2xl"> Snior Vice President, Product</h1>
                        <div className="py-5 items-start">
                            <p className="text-2xl">Mobile:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">office:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">fex:<span className="font-bold ">(866)234-5678</span></p>
                        </div>
                        {/* <div className=" ">
                            <p className=""><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                        </div> */}
                    </div>
                    <div className=" align-middle m-auto">
                        <img className="w-96 h-96 align-middle m-auto rounded-full border-8" src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                        <h1 className="text-3xl font-bold pt-3"> Nick Swift</h1>
                        <h1 className="text-2xl"> Chief Technology Officer</h1>
                        <div className="py-5 items-start">
                            <p className="text-2xl">Mobile:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">office:<span className="font-bold ">(866)234-5678</span></p>
                            <p className="text-2xl">fex:<span className="font-bold ">(866)234-5678</span></p>
                        </div>
                        {/* <div className=" ">
                            <p className=""><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                            <p className="align-middle m-auto"><FaFacebook/></p>
                        </div> */}
                    </div>
                </Slider>
                {/* Meet Our Agent slider part end  */}
            </div>
            {/* Meet Our Agent part end  */}




            {/* Our Clients Says part start  */}
            <div className="p-10 bg-white  text-black">
                <div>
                    <div className="text-center text-black py-10">
                        <h1 className="text-3xl font-bold py-8">Our Clients Says</h1>
                    </div>
                </div>
                {/* Our Clients Says slider part start  */}
                <Slider {...OurClients}>
                    <div className="   px-10 ">
                        <div className=" flex gap-4  ">
                            <div>
                                <img className=" h-14  rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                            </div>
                            <div className=" text-start ">
                                <h1 className="text-3xl font-bold "> Donald Lloyd</h1>
                                <h1 className="text-2xl"> Chief Analytics Officer</h1>
                            </div>
                        </div>
                        <div className="py-5 text-start">
                            <p>We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job <br /> Training program and other employer.</p>
                        </div>
                    </div>
                    <div className="   px-10 ">
                        <div className=" flex gap-4  ">
                            <div>
                                <img className=" h-14  rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                            </div>
                            <div className=" text-start ">
                                <h1 className="text-3xl font-bold "> Donald Lloyd</h1>
                                <h1 className="text-2xl"> Chief Analytics Officer</h1>
                            </div>
                        </div>
                        <div className="py-5 text-start">
                            <p>We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job <br /> Training program and other employer.</p>
                        </div>
                    </div>
                    <div className="   px-10 ">
                        <div className=" flex gap-4  ">
                            <div>
                                <img className=" h-14  rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                            </div>
                            <div className=" text-start ">
                                <h1 className="text-3xl font-bold "> Donald Lloyd</h1>
                                <h1 className="text-2xl"> Chief Analytics Officer</h1>
                            </div>
                        </div>
                        <div className="py-5 text-start">
                            <p>We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job <br /> Training program and other employer.</p>
                        </div>
                    </div>
                    <div className="   px-10 ">
                        <div className=" flex gap-4  ">
                            <div>
                                <img className=" h-14  rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                            </div>
                            <div className=" text-start ">
                                <h1 className="text-3xl font-bold "> Donald Lloyd</h1>
                                <h1 className="text-2xl"> Chief Analytics Officer</h1>
                            </div>
                        </div>
                        <div className="py-5 text-start">
                            <p>We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job <br /> Training program and other employer.</p>
                        </div>
                    </div>
                    <div className="   px-10 ">
                        <div className=" flex gap-4  ">
                            <div>
                                <img className=" h-14  rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                            </div>
                            <div className=" text-start ">
                                <h1 className="text-3xl font-bold "> Donald Lloyd</h1>
                                <h1 className="text-2xl"> Chief Analytics Officer</h1>
                            </div>
                        </div>
                        <div className="py-5 text-start">
                            <p>We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job <br /> Training program and other employer.</p>
                        </div>
                    </div>
                    <div className="   px-10 ">
                        <div className=" flex gap-4  ">
                            <div>
                                <img className=" h-14  rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                            </div>
                            <div className=" text-start ">
                                <h1 className="text-3xl font-bold "> Donald Lloyd</h1>
                                <h1 className="text-2xl"> Chief Analytics Officer</h1>
                            </div>
                        </div>
                        <div className="py-5 text-start">
                            <p>We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job <br /> Training program and other employer.</p>
                        </div>
                    </div>
                    <div className="   px-10 ">
                        <div className=" flex gap-4  ">
                            <div>
                                <img className=" h-14  rounded-full border-8 " src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/staff-5.jpg" alt="" />
                            </div>
                            <div className=" text-start ">
                                <h1 className="text-3xl font-bold "> Donald Lloyd</h1>
                                <h1 className="text-2xl"> Chief Analytics Officer</h1>
                            </div>
                        </div>
                        <div className="py-5 text-start">
                            <p>We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job <br /> Training program and other employer.</p>
                        </div>
                    </div>

                </Slider>
                {/* Our Clients Says slider part end  */}
            </div>
            {/* Our Clients Says part end  */}















































            <div className="text-black">
                <h2>Auto Play</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>



        </div>
    );
};

export default Home;