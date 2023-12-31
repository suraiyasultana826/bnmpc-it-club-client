import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import robo from '../assets/robo.jpg'
import game from '../assets/game.jpg'
import webdev from '../assets/webDev.jpg'
import rpd from '../assets/rpd.jpg'
import graphics from '../assets/graphics.png'
const Sectors = () => {
    return (
        <div className='mt-20'>
            <SectionTitle heading='our sectors'></SectionTitle>
            <Tabs className='text-center'>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Robotics</Tab>
                    <Tab>Game Development</Tab>
                    <Tab>Graphics</Tab>
                    <Tab>RPD</Tab>
                </TabList>

                <TabPanel>

                    <div className="card  bg-base-100 ">
                        <figure><img className='w-3/4' src={webdev} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Web Development</h2>
                            <p> Webpages are an integral component of any business or organization. Experience in web development is mandatory to ensure proper outreach and to allow interested parties to assess the overall state of the service providers. Web development usually entails the creation,automation and maintenance of visually appealing and interactive webpages that provide relevant information in a cohesive and concise manner.
                            </p>

                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="card bg-base-100 ">
                        <figure><img className='w-3/4' src={robo} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Robotics</h2>
                            <p>This is the third sector of the BNMPC IT Club, established in 2017.Since its inception, students of this institution, through the club's facilitation, have immersed themselves profoundly into the realm of robotics.In 2018, a team from BNMPC IT Club took part in a robotics competition, hosted by Japanese IT firm 'Venturas Limited' and achieved notable success leaving an indelible mark of accomplishment.Beyond competitions, the club's members consistently contribute to the field of robotics,displaying their skills in different events and festivals,manifesting the club and institution with their creativity and dedication.</p>

                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="card bg-base-100 ">
                        <figure><img className='w-3/4' src={game} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Game Development</h2>
                            <p>Every individual reading this has imagined themselves creating games at one point or another. Although the decisive factor leading to that may have varied from person to person,such as someone picturing it out of disappointment at their favorite game,or simply out of fervent passion. Nevertheless,the sensation of having utter and complete creative freedom over a world of your making can only be compared to ecstasy. Many people might initially be disheartened by the arduous and lengthy process of video game creation. But fear not,for we are here to guide you through every step of the way! Become the weaver of your own story and bring to life your outlandish ideas in the BNMPC IT club.
                            </p>

                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="card bg-base-100 ">
                        <figure><img className='w-3/4' src={graphics} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Graphics</h2>
                            <p>In a world where creative works made by AI are slowly becoming indiscernible from human creations,it's imperative to achieve excellence in fields like graphic designing. Mastery in graphics designing has diverse applications,from providing information in a more compact manner to turning a seemingly bland and uninteresting presentation into a visual masterpiece,you name it. The BNMPC IT club provides regular resources,workshops for popular tools such as Canva and Photoshop and sites for you to channel your inner artist and express your ingenuity in a myriad of ways.
                            </p>

                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card bg-base-100 ">
                        <figure><img className='w-3/4' src={rpd} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Research and Project Development</h2>
                            <p> This is the 5th sector of BNMPC IT Club,  established in 2023 to coordinate volunteers for various college and institution festivals.
                                In this sector, fostering the productivity of volunteers plays a crucial role.Festivals at various institutes serve as the main canvas,featuring wall magazines, project displays,and scrapbook designs.Besides,amazing segments such as poster and T-shirt design, are demanded through research. Volunteers in this sector engage proactively in team consultations, tackling challenges by offering practical support to complete tasks and utilising their insights, ideas, and available resources.The main goal of the sector is to highlight a cooperative methodology for efficiently accomplishing tasks</p>

                        </div>
                    </div>
                </TabPanel>

            </Tabs>


        </div>
    );
};

export default Sectors;