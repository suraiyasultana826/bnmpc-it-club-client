import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import whyChooseUs from '../../../assets/whyChooseUs.jpg'
import './ChooseUs.css';
const ChooseUs = () => {
    return (
        <div className="chooseUs bg-fixed text-blue font-extrabold my-28 pt-8">
            <SectionTitle className='' heading="why choose it club?"></SectionTitle>
            <div className="md:flex  justify-center bg-slate-50 bg-opacity-60  items-center pb-20 pt-12 px-5 md:px-36 ">
                <div><img src={whyChooseUs} alt="" /></div>
                <div className="md:pl-5">
                    <p className="uppercase md:pl-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur nesciunt animi numquam debitis ea reprehenderit voluptatum iure iusto mollitia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;