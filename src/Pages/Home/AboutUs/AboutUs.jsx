import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/banner.jpg'
const AboutUs = () => {
    return (
        <div>
            <SectionTitle heading={'About Us'}></SectionTitle>
            <div className="md:flex my-5 ml-10 text-center justify-center items-center">
                <div className="w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum libero voluptatibus delectus impedit possimus, dolorem tenetur laudantium a quidem culpa porro eum aut inventore enim assumenda quam labore at.
                Dolorem architecto unde reiciendis alias voluptas at, doloribus laboriosam hic porro quo cum praesentium adipisci quisquam quia saepe voluptatum minima commodi quod, enim culpa earum. Quis exercitationem corrupti error quas?
               udiandae tempore beatae eum praesentium molestiae, dolores id optio, sit vel minus perspiciatis iste totam! Non corporis eveniet vero dolores reiciendis iusto dignissimos? Perferendis, quidem praesentium!
                Quaerat sunt nihil, iste, voluptas molestias blanditiis temporibus necessitatibus laborum doloremque unde quia. aliquam.</div>
                <div  className='lg:w-1/2 relative ml-5'>
                    <img className='w-3/4 rounded-lg border-8' src={img} alt="" />
                    <img className=' w-1/2 absolute right-5 top-24 rounded-lg border-8' src={img} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;