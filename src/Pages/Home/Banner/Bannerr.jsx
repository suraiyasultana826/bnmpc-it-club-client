import banner from '../../../assets/finalBanner.jpg'
const Bannerr = () => {
    return (
        <div className="hero  md:min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} className="w-full md:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="md:text-5xl text-3xl font-bold md:px-10">Welcome to BNMPC IT CLUB!</h1>
            <p className="py-6 md:px-10 md:font-bold">Welcome to BNMPCITC, where collaboration meets innovation! Embrace the dynamic world of technology at our IT club, a hub for passionate minds and aspiring tech enthusiasts. Here, we foster creativity, collaboration, and cutting-edge exploration. Whether you are a coding maestro, a design virtuoso, or simply curious about the digital realm, BNMPCITC is your platform to thrive. 
</p>
           
          </div>
        </div>
      </div>
    );
};

export default Bannerr;