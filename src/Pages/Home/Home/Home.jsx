import Faq from "../../../FAQ/Faq";
import Magazine from "../../../Magazine/Magazine";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Magazine></Magazine>
            <ChooseUs></ChooseUs>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;