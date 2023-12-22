import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import banner from '../../assets/session1920.png'
import panel1 from '../../assets/panel1920-1.png'
import panel2 from '../../assets/panel1920-2.png'
import panel3 from '../../assets/panel1920-3.png'
const Panel1920 = () => {
    return (
        <div >
        <SectionTitle heading='session 19-20'></SectionTitle>
        <img data-aos="fade-up"  data-aos-duration="2000" src={banner} alt="" />
        <div data-aos="fade-up"  data-aos-duration="2000" className="grid md:grid-cols-3 gap-5 my-10">
            <img src={panel1} alt="" />
            <img src={panel2} alt="" />
            <img src={panel3} alt="" />
        </div>
        
    </div>
    );
};

export default Panel1920;