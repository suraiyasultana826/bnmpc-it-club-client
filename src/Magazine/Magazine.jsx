import SectionTitle from "../Components/SectionTitle/SectionTitle";
import maddhom from '../assets/IMG_20231216_153044.jpg'

const Magazine = () => {
    return (
        <div className="mt-20">
            <SectionTitle heading='our magazine'></SectionTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={maddhom}className="max-w-full md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-5xl font-bold">Online Magazine!</h1>
                        <p className="py-6">Magazines, revered as periodic literary gems clad in paper, encapsulated the profound truths & ideals of distinctive entities. Universally acknowledged, they stand as a pinnacle medium, casting an illuminating spotlight on the craft of literature. With immense pride, our IT club presents the second edition of our online information technology magazine, “মাধ্যম”. Under the sagacious guidance of Mr. Mujibur Rahman Sir, our club’s moderator, & the esteemed patronage of Principal Lt. Col. Md. Mizanur Rahman, PSC, PhD, AC Sir, we anticipate a triumphant journey for this literary endeavor.
</p>
                        <button className="btn bg-blue-800 text-white"><a href="https://drive.google.com/file/d/1lEK532XdNc24xcT86qEAuaXJOhlC8oQY/view?usp=sharing" target="blank"> Read Magazine</a></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Magazine;