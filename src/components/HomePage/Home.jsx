import css from "./home.css";
import { motion } from "framer-motion";
import Hero from "../../assets/images/illustration-working.svg";
import brand from "../../assets/images/icon-brand-recognition.svg";
import details from "../../assets/images/icon-detailed-records.svg";
import fully from "../../assets/images/icon-fully-customizable.svg";
import Form from "../Form/Form";
import Shortens from "../Shortens/Shortens";

const Home = () => {

    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    const textAnimationSecond = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    const cardsAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    }

    return(
        <>
            <motion.section 
                initial="hidden"
                whileInView="visible"
                className="up_section"
            >
                <div className="container">
                    <div className="up_section_content">
                        <div className="up_section_text">
                            <motion.div className="up_section_title" variants={textAnimation}>More than just shorter links</motion.div>
                            <motion.div className="up_section_subtitle" variants={textAnimation}>Build your brands recognition and get detailed insights on how your links are performing.</motion.div>
                            <motion.button className="button up_section_button" variants={textAnimation}>Get Started</motion.button>
                        </div>
                        <div className="up_section_image">
                            <img src={Hero} alt="hero" className="up_section_hero_img" />
                        </div>
                    </div>
                </div>
            </motion.section>

            <section className="search">
            <div className="container">
                        <div className="search_form">
                            <div className="search_form_wrapper">
                                <Form />
                            </div>
                        </div>
                    </div>
            </section>

            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="statistics"
            >
                   <div className="container">
                        <div className="result_container">
                            <Shortens />
                        </div>
                        <motion.div className="statictics_title" custom={1} variants={textAnimationSecond}>Advanced Statistics</motion.div>
                            <motion.div className="statictics_subtitle" custom={2} variants={textAnimationSecond}>Track how your links are performing across the web with <br/>our advanced statistics dashboard.</motion.div>

                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.5 }}
                                className="statistics_cards"
                            >

                                <motion.div custom={1} variants={cardsAnimation} className="statistics_card statistics_card_first">
                                    <div className="statistics_card_circle">
                                        <img src={brand} alt="brand" className="statistics_card_img" />
                                    </div>
                                    <div className="statistics_card_title">Brand Recognition</div>
                                    <div className="statistics_card_subtitle">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</div>
                                </motion.div>

                                <span className="statistics_card_line"></span>

                                <motion.div custom={2} variants={cardsAnimation} className="statistics_card statistics_card_second">
                                    <div className="statistics_card_circle">
                                        <img src={details} alt="brand" className="statistics_card_img" />
                                    </div>
                                    <div className="statistics_card_title">Detailed Records</div>
                                    <div className="statistics_card_subtitle">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</div>
                                </motion.div>

                                <span className="statistics_card_line"></span>

                                <motion.div custom={3} variants={cardsAnimation} className="statistics_card statistics_card_third">
                                    <div className="statistics_card_circle">
                                        <img src={fully} alt="brand" className="statistics_card_img" />
                                    </div>
                                    <div className="statistics_card_title">Fully Customizable</div>
                                    <div className="statistics_card_subtitle">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</div>
                                </motion.div>
                            </motion.div>
                   </div>
            </motion.section>

            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="down_section"
                style={{overflow: 'hidden'}}
            >
                <div className="container">
                    <div className="down_section_content">
                        <motion.div className="down_section_title" custom={1} variants={textAnimationSecond}>Boost your links today</motion.div>
                        <motion.button custom={1} variants={textAnimationSecond} className="button down_section_button">Get Started</motion.button>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Home