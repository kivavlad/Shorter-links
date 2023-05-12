import css from "./footer.css";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import instIcon from "../../assets/images/icon-instagram.svg";


const Footer = () => {

    return(
        <div className="footer">
            <div className="container">
                <div className="footer_content">
                    <div className="footer_logo">Shortly</div>
                    <div className="footer_nav">
                        <div className="footer_nav_column">
                            <div className="footer_nav_title">Features</div>
                            <div className="footer_nav_links">
                                <a href="#!" className="footer_nav_link">Link Shortening</a>
                                <a href="#!" className="footer_nav_link">Branded Links</a>
                                <a href="#!" className="footer_nav_link">Analytics</a>
                            </div>
                        </div>

                        <div className="footer_nav_column">
                            <div className="footer_nav_title">Resources</div>
                            <div className="footer_nav_links">
                                <a href="#!" className="footer_nav_link">Blog</a>
                                <a href="#!" className="footer_nav_link">Developers</a>
                                <a href="#!" className="footer_nav_link">Support</a>
                            </div>
                        </div>

                        <div className="footer_nav_column">
                            <div className="footer_nav_title">Company</div>
                            <div className="footer_nav_links">
                                <a href="#!" className="footer_nav_link">About</a>
                                <a href="#!" className="footer_nav_link">Our Team</a>
                                <a href="#!" className="footer_nav_link">Careers</a>
                                <a href="#!" className="footer_nav_link">Contact</a>
                            </div>
                        </div>

                    </div>
                    <div className="footer_nav_icons">
                        <div className="footer_icons">
                            <img src={facebookIcon} alt="fb" className="footer_icon_img"/>
                            <img src={twitterIcon} alt="twit" className="footer_icon_img"/>
                            <img src={pinterestIcon} alt="icon" className="footer_icon_img"/>
                            <img src={instIcon} alt="inst" className="footer_icon_img"/>
                        </div>
                        <div className="footer_info">
                                <div className="footer_info_title">Created by:</div><a target="_blank" href="https://github.com/KivaVlad" className="footer_info_text">@kivavlad</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer