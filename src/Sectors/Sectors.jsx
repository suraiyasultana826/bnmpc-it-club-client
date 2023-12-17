import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import ChooseUs from '../assets/chooseUs.jpg';
import whyChooseUs from '../assets/whyChooseUs.jpg'
import game from '../assets/banner.jpg'
const Sectors = () => {
    return (
        <div>
            <SectionTitle heading='our sectors'></SectionTitle>
            <Tabs className='text-center'>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Robotics</Tab>
                    <Tab>Game Development</Tab>
                    <Tab>Graphics</Tab>
                </TabList>

                <TabPanel>
                    <div className="card  bg-base-100 ">
                        <figure><img className='w-3/4' src={ChooseUs}alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Web Development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae tempora iusto minus maiores ducimus unde tenetur incidunt! Voluptatum, rem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic commodi accusamus necessitatibus veniam, maxime eveniet exercitationem voluptatem. Optio ab amet enim dolores ut eligendi iusto debitis, incidunt aspernatur? Aperiam, necessitatibus.</p>
                           
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="card bg-base-100 ">
                        <figure><img className='w-3/4' src={whyChooseUs}alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Robotics</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae tempora iusto minus maiores ducimus unde tenetur incidunt! Voluptatum, rem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic commodi accusamus necessitatibus veniam, maxime eveniet exercitationem voluptatem. Optio ab amet enim dolores ut eligendi iusto debitis, incidunt aspernatur? Aperiam, necessitatibus.</p>
                           
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="card bg-base-100 ">
                        <figure><img className='w-3/4' src={game}alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Game Development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae tempora iusto minus maiores ducimus unde tenetur incidunt! Voluptatum, rem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic commodi accusamus necessitatibus veniam, maxime eveniet exercitationem voluptatem. Optio ab amet enim dolores ut eligendi iusto debitis, incidunt aspernatur? Aperiam, necessitatibus.</p>
                           
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="card bg-base-100 ">
                        <figure><img className='w-3/4' src={whyChooseUs}alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Graphics</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae tempora iusto minus maiores ducimus unde tenetur incidunt! Voluptatum, rem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic commodi accusamus necessitatibus veniam, maxime eveniet exercitationem voluptatem. Optio ab amet enim dolores ut eligendi iusto debitis, incidunt aspernatur? Aperiam, necessitatibus.</p>
                           
                        </div>
                    </div>
                </TabPanel>
              
            </Tabs>

        </div>
    );
};

export default Sectors;