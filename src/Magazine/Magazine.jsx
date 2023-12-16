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
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi distinctio non impedit veniam quaerat iusto sint rem quidem nostrum repudiandae deleniti voluptatem, perspiciatis optio, accusantium vitae quibusdam. Mollitia, quibusdam?</p>
                        <button className="btn bg-blue-800 text-white"><a href="https://drive.google.com/file/d/1lEK532XdNc24xcT86qEAuaXJOhlC8oQY/view?usp=sharing" target="blank"> Read Magazine</a></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Magazine;