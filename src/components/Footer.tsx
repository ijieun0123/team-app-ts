import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <div className="identity_box">
                    <img
                        src="/team-app-ts/img/white_logo.png"
                        alt="team app logo"
                    />
                    <p className="identity_text">
                        <Trans i18nKey="footerIdentity" />
                    </p>
                </div>
                <div className="footer_group">
                    <div className="company">
                        <h3>
                            <Trans i18nKey="footerCompany" />
                        </h3>
                        <ul className="links">
                            <li>
                                <Link to="#">
                                    <Trans i18nKey="footerProduct" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <Trans i18nKey="footerBlog" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <Trans i18nKey="footerSupport" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="features">
                        <h3>
                            <Trans i18nKey="footerFeatures" />
                        </h3>
                        <ul className="links">
                            <li>
                                <Link to="#">
                                    <Trans i18nKey="footerScreenSharing" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <Trans i18nKey="footerKnowledgebase" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <Trans i18nKey="footerTutorials" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <Trans i18nKey="footerUserManagement" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contact_us">
                        <h3>
                            <Trans i18nKey="footerContactUs" />
                        </h3>
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
                        <h3>
                            <Trans i18nKey="footerStayUpToDate" />
                        </h3>
                        <div className="links">
                            <p>
                                <Trans i18nKey="footerSubscribe" />
                            </p>
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
