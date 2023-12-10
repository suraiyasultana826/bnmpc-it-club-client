import banner from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='w-full h-screen mb-20 bg-no-repeat bg-cover  ' style={{ backgroundImage: `url(${banner})` }}>
          <div className='flex justify-center items-center ml-40 text-center w-3/4 mx-auto content-center lg:pt-40'>
          <div>
           <h1 className='md:text-3xl text-white font-bold lg:my-10'>Not A Member?</h1>
                <p className='text-white md:font-extrabold md:text-5xl lg:my-10'>Join Now!!</p>
           
           </div>
          </div>

        </div>
    );
};

export default Banner;