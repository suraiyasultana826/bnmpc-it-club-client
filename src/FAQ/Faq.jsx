import SectionTitle from '../Components/SectionTitle/SectionTitle';
import faq from '../assets/faq.jpg'
const Faq = () => {
    return (
        <div>
              <SectionTitle heading="frequently asked questions"></SectionTitle>
        <div className="hero min-h-screen ">
            
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <img src={faq} className="max-w-full md:max-w-sm rounded-lg " />
                <div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    );
};

export default Faq;