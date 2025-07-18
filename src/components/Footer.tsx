import "../styles/footer.css";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="identity_box">
                    <img src="/team-app-ts/img/white_logo.png" alt="logo" />
                    <p className="identity_text">
                        The last team chat you will ever need.
                    </p>
                </div>
                <div className="footer_group">
                    <div className="company">
                        <h3>Company</h3>
                        <div className="links">
                            <a href="#">Product</a>
                            <a href="#">Blog</a>
                            <a href="#">Support</a>
                        </div>
                    </div>
                    <div className="features">
                        <h3>Features</h3>
                        <div className="links">
                            <a href="#">Screen Sharing</a>
                            <a href="#">Knowledgebase</a>
                            <a href="#">Tutorials</a>
                            <a href="#">User Management</a>
                        </div>
                    </div>
                    <div className="contact_us">
                        <h3>Contact Us</h3>
                        <address className="links">
                            <a href="mailto:info@chatapp.com">
                                info@chatapp.com
                            </a>
                            <a href="tel:1800200300">1-800-200-300</a>
                            <br />
                            <p>3500 Deer Creek Rd Palo Alto, CA</p>
                        </address>
                    </div>
                    <div className="stay_up_to_date">
                        <h3>Stay up to date</h3>
                        <div className="links">
                            <p>Subscribe to our newsletter.</p>
                        </div>
                        <form className="email_box">
                            <input type="text" placeholder="Email" />
                            <button type="submit">
                                <img
                                    src="/team-app-ts/img/footer_email_arrow.svg"
                                    alt="arrow"
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
