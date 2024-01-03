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
                                How can I join the BNMPC IT club?

                            </div>
                            <div className="collapse-content">
                                <p>The procedures to join BNMPCITC is very simple and interesting.Follow the steps below to become a volunteer. <br />
                                    1.Collect the “Curio Card” from our club representatives. <br />
                                    2.Scan the QR code provided in your card. <br />
                                    3.This will redirect you to the registration page. <br />
                                    4.After submitting all your information you will get the official messenger group link instantly.
                                    Congratulations!! You are now a volunteer of BNMPCITC.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Is it free to join the BNMPC IT club?
                            </div>
                            <div className="collapse-content">
                                <p>Yes,it is totally free to join BNMPCITC.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Are “general members” and “volunteers” same thing?

                            </div>
                            <div className="collapse-content">
                                <p>Yes,both are same.In BNMPCITC the term “general member” doesn’t even exist.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Why BNMPC ITC is the best?

                            </div>
                            <div className="collapse-content">
                                <p>Undoubtedly BNMPCITC is the best in BNMPC.You can get into a skillful and friendly circle through this club.Again the workshops will enlighten your spirit to learn something new.You can learn management,leadership and many more skill without any problems. Also you will get some  seniors who will always guide you to be on the right path.
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;