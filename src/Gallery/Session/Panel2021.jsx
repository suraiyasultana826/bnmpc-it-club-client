import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import banner from '../../assets/session2021.png'
import panel1 from '../../assets/panel2021-1.jpg'
import panel2 from '../../assets/panel2021-2.png'
import panel3 from '../../assets/panel2021-3.png'
import panel4 from '../../assets/panel2021-4.png'
import panel5 from '../../assets/panel2021-5.png'
import panel6 from '../../assets/panel2021-6.png'

const Panel2021 = () => {
    return (
        <div>
            <SectionTitle heading='session 20-21'></SectionTitle>
            <img src={banner} alt="" />
            <div data-aos="fade-up"  className="grid md:grid-cols-3 gap-5 my-10 ">
                <img src={panel1} alt="" />
                <img src={panel2} alt="" />
                <img className="md:h-72" src={panel3} alt="" />
                <img className="md:h-60"  src={panel4} alt="" />
                <img src={panel5} alt="" />
                <img src={panel6} alt="" />
            </div>

        </div>

    );
};

export default Panel2021;