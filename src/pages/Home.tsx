import type { FC } from "react";
import "../styles/Home.scss";
import ReviewCard from "../components/ReviewCard";
import { reviewCardData } from "../data/reviewCardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: FC = () => {
    const cardBoxRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const { t: _t } = useTranslation();

    useEffect(() => {
        // txtBox scroll effect
        const txtBoxes = document.querySelectorAll<HTMLElement>(".txt_box");

        const txtBoxObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const txtBox = entry.target as HTMLElement;
                        txtBox.classList.add("visible");
                        txtBoxObserver.unobserve(txtBox);
                    }
                });
            },
            { threshold: 0.7 }
        );

        txtBoxes.forEach(txtBox => txtBoxObserver.observe(txtBox));

        // cardBox scroll effect
        const cardBoxEl = cardBoxRef.current;
        const cardBoxObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (cardBoxEl)
                        cardBoxObserver.unobserve(cardBoxEl as Element);
                }
            },
            { threshold: 0.7 }
        );

        if (cardBoxEl) cardBoxObserver.observe(cardBoxEl as Element);

        // cleanup
        return () => {
            txtBoxObserver.disconnect();
            cardBoxObserver.disconnect();
        };
    }, []);

    return (
        <main id="main-content" tabIndex={-1}>
            {/* hero 섹션 */}
            <section className="hero">
                <div className="container">
                    <div className="left_box">
                        <div className="txt_box">
                            <h1 className="hero_title">
                                <Trans
                                    i18nKey="heroTitle"
                                    components={{
                                        br: <br />,
                                        span: <span />,
                                    }}
                                />
                            </h1>
                            <p className="hero_paragraph">
                                <Trans
                                    i18nKey="heroSubtitle"
                                    components={{
                                        br: <br />,
                                        span: <span />,
                                    }}
                                />
                            </p>
                        </div>
                        <form>
                            <label htmlFor="email" className="visually_hidden">
                                <Trans i18nKey="getEarlyAccess" />
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <button type="submit" aria-label="Get Early Access">
                                <Trans i18nKey="getEarlyAccess" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {/* hub 섹션 */}
            <section className="hub">
                <div className="container">
                    <div className={`txt_box ${isVisible ? "visible" : ""}`}>
                        <h2 className="title fade_up item_1">
                            <Trans
                                i18nKey="hubTitle"
                                components={{
                                    br: <br />,
                                }}
                            />
                        </h2>
                        <p className="paragraph fade_up item_2">
                            <Trans
                                i18nKey="hubParagraph"
                                components={{
                                    br: <br />,
                                }}
                            />
                        </p>
                        <a
                            href="#"
                            className="link fade_up item_3"
                            aria-label="Learn more about Hub"
                        >
                            Learn More
                            <img
                                src="/team-app-ts/img/learn_more_arrow.svg"
                                alt="→"
                            />
                        </a>
                    </div>
                </div>
            </section>
            {/* management 섹션 */}
            <section className="management">
                <div className="container">
                    <picture>
                        <source
                            srcSet="/team-app-ts/img/mobile_management.svg"
                            media="(max-width: 480px)"
                        />
                        <source
                            srcSet="/team-app-ts/img/tablet_management.svg"
                            media="(max-width: 1024px)"
                        />
                        <img
                            src="/team-app-ts/img/desktop_management.svg"
                            alt="management image"
                            className="management_img"
                        />
                    </picture>
                    <div className={`txt_box ${isVisible ? "visible" : ""}`}>
                        <h2 className="title fade_up item_1">
                            <Trans
                                i18nKey="managementTitle"
                                components={{
                                    br: <br />,
                                }}
                            />
                        </h2>
                        <p className="paragraph fade_up item_2">
                            <Trans i18nKey="managementParagraph" />
                        </p>
                        <a
                            href="#"
                            className="link fade_up item_3"
                            aria-label="Learn more about Management"
                        >
                            Learn More
                            <img
                                src="/team-app-ts/img/learn_more_arrow.svg"
                                alt="→"
                            />
                        </a>
                    </div>
                </div>
            </section>
            {/* scheduling 섹션 */}
            <section className="scheduling">
                <div className="container">
                    <div className={`txt_box ${isVisible ? "visible" : ""}`}>
                        <h2 className="title fade_up item_1">
                            <Trans
                                i18nKey="scheduleTitle"
                                components={{
                                    br: <br />,
                                }}
                            />
                        </h2>
                        <p className="paragraph fade_up item_2">
                            <Trans i18nKey="scheduleParagraph" />
                        </p>
                        <a
                            href="#"
                            className="link fade_up item_3"
                            aria-label="Learn more about Scheduling"
                        >
                            Learn More
                            <img
                                src="/team-app-ts/img/learn_more_arrow.svg"
                                alt="→"
                            />
                        </a>
                    </div>
                    <picture>
                        <source
                            srcSet="/team-app-ts/img/mobile_scheduling.svg"
                            media="(max-width: 480px)"
                        />
                        <source
                            srcSet="/team-app-ts/img/tablet_scheduling.svg"
                            media="(max-width: 1024px)"
                        />
                        <img
                            src="/team-app-ts/img/desktop_scheduling.svg"
                            alt="schedule image"
                            className="schedule_img"
                        />
                    </picture>
                </div>
            </section>
            {/* review 섹션 */}
            <section className="review">
                <div className="container">
                    <h2 className="title">
                        <Trans i18nKey="whatPeopleSayAboutTitle" />
                    </h2>
                    <div
                        className={`card_box ${isVisible ? "visible" : ""}`}
                        ref={cardBoxRef}
                    >
                        <Swiper
                            navigation
                            pagination={{ clickable: true }}
                            spaceBetween={30}
                            slidesPerView={5}
                            loop={true}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                768: { slidesPerView: 2 },
                                0: { slidesPerView: 1 },
                            }}
                        >
                            {reviewCardData.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <ReviewCard
                                        writerImage={item.writerImage}
                                        comments={item.comments}
                                        writerName={item.writerName}
                                        writerCareer={item.writerCareer}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
