import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import whyChooseUs from '../../../assets/choose.jpg'
import './ChooseUs.css';
const ChooseUs = () => {
    return (
        <div className="chooseUs bg-fixed text-blue md:font-bold my-28 pt-8">
            <SectionTitle className='' heading="why choose it club?"></SectionTitle>
            <div className="md:flex  justify-center bg-slate-50 bg-opacity-60  items-center pb-20 pt-12 px-5 md:px-36 ">
                <div><img src={whyChooseUs} alt="" /></div>
                <div className="md:pl-5">
                    <p className="uppercase md:pl-5 mt-5 ">
                    BNMPC has over 30 clubs, so prompting the question: Why opt for the IT Club? This club unveils a dynamic realm of technological collaboration. Connecting with like-minded individuals, staying in touch with cutting-edge trends, and partaking in knowledge exchange — a continuous learning path remains open for you! In a world increasingly reliant on technology, our various online / offline events, workshops and other activities will help you gain profound knowledge and hands-on experience. If you are seeking an environment where passion meets technology along with limitless opportunities, BNMPC IT CLUB is the path forward!

                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;