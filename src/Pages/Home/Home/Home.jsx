import Achievements from "../../../Achievements/Achievements";
import Faq from "../../../FAQ/Faq";
import Magazine from "../../../Magazine/Magazine";
import MailBox from "../../../MailBox/MailBox";
import RealCurioCard from "../../../RealCurioCard/RealCurioCard";
import Sectors from "../../../Sectors/Sectors";
import CurioCards from "../../../curioCards/CurioCards";
import AboutUs from "../AboutUs/AboutUs";
import Bannerr from "../Banner/Bannerr";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
    return (
        <div>
            <Bannerr></Bannerr>
            <CurioCards></CurioCards>
            <RealCurioCard></RealCurioCard>
            <AboutUs></AboutUs>
            <Achievements></Achievements>
            <Sectors></Sectors>
            <Magazine></Magazine>
            <ChooseUs></ChooseUs>
            <Faq></Faq>
            <MailBox></MailBox>
            
        </div>
    );
};

export default Home;