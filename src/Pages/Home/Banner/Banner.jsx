import banner from '../../../assets/banner.jpg'
const Banner = () => {
  return (



    <div className="hero bg-center md:min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl md:text-5xl font-bold">Not a volunteer?</h1>
          <p className="mb-5">Join Now!!!</p>
          <button className="btn bg-blue-800 text-white border-none">Register</button>
        </div>
      </div>
    </div>





    // <div className='w-full h-screen mb-20 bg-no-repeat bg-cover  ' style={{ backgroundImage: `url(${banner})` }}>
    //   <div className='flex justify-center items-center md:ml-40 text-center w-3/4 mx-auto content-center lg:pt-40'>
    //   <div>
    //    <h1 className='md:text-3xl text-white font-bold lg:my-10'>Not A Member?</h1>
    //         <p className='text-white md:font-extrabold md:text-5xl lg:my-10'>Join Now!!</p>

    //    </div>
    //   </div>

    // </div>
  );
};

export default Banner;