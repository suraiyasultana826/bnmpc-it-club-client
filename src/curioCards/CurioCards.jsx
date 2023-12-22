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
                        <h1 className="text-5xl font-bold">Curio Cards!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/register'>
                            <button className="btn bg-blue-900 border-none text-white">Register</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CurioCards;