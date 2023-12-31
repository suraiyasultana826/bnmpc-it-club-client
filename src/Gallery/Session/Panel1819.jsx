import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import banner from '../../../src/assets/session1819.png'
import panel1 from '../../assets/panel1819-1.png'
import panel2 from '../../assets/panel1819-2.png'
import panel3 from '../../assets/panel-1819-3.png'
import AOS from 'aos';
AOS.init();

const Panel1819 = () => {
    return (
        <div >
            <SectionTitle heading='session 18-19'></SectionTitle>
            <img data-aos="fade-up"  data-aos-duration="2000" src={banner} alt="" />
            <div data-aos="fade-up"  data-aos-duration="2000"  className="grid md:grid-cols-3 gap-5 my-10">
                <img src={panel1} alt="" />
                <img src={panel2} alt="" />
                <img src={panel3} alt="" />
            </div>
            
        </div>
    );
};

export default Panel1819;