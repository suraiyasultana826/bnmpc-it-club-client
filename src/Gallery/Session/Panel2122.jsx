import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import banner from '../../assets/session2122.png'
import panel1 from '../../assets/panel2022-1.png'
import panel2 from '../../assets/panel2022-2.jpg'
import panel3 from '../../assets/panel2022-3.png'
const Panel2122 = () => {
    return (
        <div>
        <SectionTitle heading='session 21-22'></SectionTitle>
        <img data-aos="fade-up"  data-aos-duration="2000" src={banner} alt="" />
        <div data-aos="fade-up"  data-aos-duration="2000" className="grid md:grid-cols-3 gap-5 my-10">
            <img src={panel1} alt="" />
            <img src={panel2} alt="" />
            <img className="md: h-64" src={panel3} alt="" />
        </div>
        </div>
    );
};

export default Panel2122;