import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import classWork from '../../../assets/working.jpg'
import sitting from '../../../assets/class.png'
const AboutUs = () => {
    return (
        <div className="mb-30" id="about">
            <SectionTitle heading={'About Us'}></SectionTitle>
            <div className="md:flex my-5 ml-10 text-center justify-center items-center">
                <div className="w-3/4 md:font-bold">The main purpose of the BNMPC IT club is to allow it is inquisitive members to pursue relevant opportunities in growing their repertoire of skills in the world of technology.
                    As a means to this end,the majority of our workshops,projects,events revolve around 5 of the most prevalent topics in this sphere,which will surely prove to be an invaluable asset in your journey. </div>
                <div className='lg:w-1/2 relative ml-5'>
                    <img className='w-3/4 rounded-lg border-8' src={classWork} alt="" />
                    <img className=' w-1/2 absolute right-12 top-36 rounded-lg border-8' src={sitting} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;