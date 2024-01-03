import SectionTitle from '../Components/SectionTitle/SectionTitle';
import curio from '../assets/curio-card.jpg'
const RealCurioCard = () => {
    return (
        <div className="mt-20">
            <SectionTitle heading='Easiest Way To Join Club'></SectionTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={curio} className="max-w-full md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-5xl font-bold">Curio Cards!</h1>
                        <p className="py-6"> Redefining Volunteerism in the 2024 HSC Batch! Our innovative approach to recruitment, through unique coupon cards, transforms the process into an enjoyable and convenient experience. Breaking away from tradition, we prioritize ease by eliminating manual form filling and money submissions. Just like the BNMPC IT Club, we're not just an IT club in name; we're genuinely committed. "Curio Cards" stands out, captivating Volunteers with increased interest and quality enhancement. Witness the impact through the applications of the 2023 and 2024 batches. Join us as we shape a new era of volunteering with passion and efficiency!

                        </p>
                        <button className="btn bg-blue-800 text-white"><a href="https://fb.watch/pigXezdZRw/" target="blank"> Know More</a></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RealCurioCard;