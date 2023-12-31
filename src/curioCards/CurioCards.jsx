import { Link } from 'react-router-dom';
import curioVid from '../assets/curioCards.mp4'
import SectionTitle from '../Components/SectionTitle/SectionTitle';
const CurioCards = () => {
    return (
        <div>
            <SectionTitle subHeading='Joining BNMPCITC is very easy now!'></SectionTitle>
           
            <div className="hero min-h-screen bg-blue-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <video controls loop className="w-full md:w-1/2 rounded-lg shadow-2xl" src={curioVid}></video>
                  
                    <div>
                        <h1 className="text-5xl font-bold">Join Now!</h1>
                        <p className="py-6 font-bold">Join us on this exciting journey of learning, networking, and unleashing the limitless potential of IT. Let us explore, create, and connect as we embark on a thrilling adventure together. Welcome to the BNMPCITC family – where tech dreams become reality!
                        Want to know more? <a className='text-blue-700 font-extrabold' href="https://www.facebook.com/bnmpc.itc">Click Here</a>
</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CurioCards;