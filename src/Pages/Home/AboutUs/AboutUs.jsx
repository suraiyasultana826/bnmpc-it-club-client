import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/banner.jpg'
const AboutUs = () => {
    return (
        <div className="mb-10">
            <SectionTitle heading={'About Us'}></SectionTitle>
            <div className="md:flex my-5 ml-10 text-center justify-center items-center">
                <div className="w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum libero voluptatibus delectus impedit possimus, dolorem tenetur laudantium a quidem culpa porro eum aut inventore enim assumenda quam labore at.
                Dolorem architecto unde reiciendis tiis temporibus necessitatibus laborum doloremque unde quia. aliquam.</div>
                <div  className='lg:w-1/2 relative ml-5'>
                    <img className='w-3/4 rounded-lg border-8' src={img} alt="" />
                    <img className=' w-1/2 absolute right-5 top-24 rounded-lg border-8' src={img} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;