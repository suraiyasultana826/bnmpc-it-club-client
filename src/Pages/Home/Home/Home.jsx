import Faq from "../../../FAQ/Faq";
import Magazine from "../../../Magazine/Magazine";
import Sectors from "../../../Sectors/Sectors";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Bannerr from "../Banner/Bannerr";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
    return (
        <div>
            <Bannerr></Bannerr>
            <AboutUs></AboutUs>
            <Sectors></Sectors>
            <Magazine></Magazine>
            <ChooseUs></ChooseUs>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;