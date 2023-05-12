import css from "./home.css";
import Hero from "../../assets/images/illustration-working.svg";
import brand from "../../assets/images/icon-brand-recognition.svg";
import details from "../../assets/images/icon-detailed-records.svg";
import fully from "../../assets/images/icon-fully-customizable.svg";
import Form from "../Form/Form";
import Shortens from "../Shortens/Shortens";

const Home = () => {

    return(
        <>
            <section className="up_section">
                <div className="container">
                    <div className="up_section_content">
                        <div className="up_section_text">
                            <div className="up_section_title">More than just shorter links</div>
                            <div className="up_section_subtitle">Build your brands recognition and get detailed insights on how your links are performing.</div>
                            <button className="button up_section_button">Get Started</button>
                        </div>
                        <div className="up_section_image">
                            <img src={Hero} alt="hero" className="up_section_hero_img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="search">
            <div className="container">
                        <div className="search_form">
                            <div className="search_form_wrapper">
                                <Form />
                            </div>
                        </div>
                    </div>
            </section>

            <section className="statistics">
                   <div className="container">
                        <div className="result_container">
                            <Shortens />
                        </div>
                        <div className="statictics_title">Advanced Statistics</div>
                            <div className="statictics_subtitle">Track how your links are performing across the web with <br/>our advanced statistics dashboard.</div>
                            <div className="statistics_cards">

                                <div className="statistics_card statistics_card_first">
                                    <div className="statistics_card_circle">
                                        <img src={brand} alt="brand" className="statistics_card_img" />
                                    </div>
                                    <div className="statistics_card_title">Brand Recognition</div>
                                    <div className="statistics_card_subtitle">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</div>
                                </div>

                                <span className="statistics_card_line"></span>

                                <div className="statistics_card statistics_card_second">
                                    <div className="statistics_card_circle">
                                        <img src={details} alt="brand" className="statistics_card_img" />
                                    </div>
                                    <div className="statistics_card_title">Detailed Records</div>
                                    <div className="statistics_card_subtitle">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</div>
                                </div>

                                <span className="statistics_card_line"></span>

                                <div className="statistics_card statistics_card_third">
                                    <div className="statistics_card_circle">
                                        <img src={fully} alt="brand" className="statistics_card_img" />
                                    </div>
                                    <div className="statistics_card_title">Fully Customizable</div>
                                    <div className="statistics_card_subtitle">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</div>
                                </div>
                            </div>
                   </div>
            </section>
            <section className="down_section">
                <div className="container">
                    <div className="down_section_content">
                        <div className="down_section_title">Boost your links today</div>
                        <button className="button down_section_button">Get Started</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home