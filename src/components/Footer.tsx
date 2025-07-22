import "../styles/Footer.scss";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="identity_box">
                    <img
                        src="/team-app-ts/img/white_logo.png"
                        alt="team app logo"
                    />
                    <p className="identity_text">
                        The last team chat you will ever need.
                    </p>
                </div>
                <div className="footer_group">
                    <div className="company">
                        <h3>Company</h3>
                        <ul className="links">
                            <li>
                                <Link to="#">Product</Link>
                            </li>
                            <li>
                                <Link to="#">Blog</Link>
                            </li>
                            <li>
                                <Link to="#">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="features">
                        <h3>Features</h3>
                        <ul className="links">
                            <li>
                                <Link to="#">Screen Sharing</Link>
                            </li>
                            <li>
                                <Link to="#">Knowledgebase</Link>
                            </li>
                            <li>
                                <Link to="#">Tutorials</Link>
                            </li>
                            <li>
                                <Link to="#">User Management</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contact_us">
                        <h3>Contact Us</h3>
                        <ul className="links">
                            <li>
                                <Link to="mailto:info@chatapp.com">
                                    info@chatapp.com
                                </Link>
                            </li>
                            <li>
                                <Link to="tel:1800200300">1-800-200-300</Link>
                            </li>
                            <li>
                                <p>3500 Deer Creek Rd Palo Alto, CA</p>
                            </li>
                        </ul>
                    </div>
                    <div className="stay_up_to_date">
                        <h3>Stay up to date</h3>
                        <div className="links">
                            <p>Subscribe to our newsletter.</p>
                        </div>
                        <form className="email_box">
                            <label
                                htmlFor="footerEmail"
                                className="visually_hidden"
                            >
                                Email
                            </label>
                            <input
                                id="footerEmail"
                                type="text"
                                placeholder="Email"
                            />
                            <button type="submit" aria-label="Email submit">
                                <img
                                    src="/team-app-ts/img/footer_email_arrow.svg"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </button>
                        </form>
                    </div>
                </div>
                <p className="copyright">© Copyright chatApp Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
