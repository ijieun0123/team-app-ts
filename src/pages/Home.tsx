import type { FC } from "react";
import "../styles/Home.css";
import ReviewCard from "../components/ReviewCard";
import { reviewCardData } from "../data/reviewCardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: FC = () => {
    const cardBoxRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

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
        <main>
            {/* hero 섹션 */}
            <section className="hero">
                <div className="container">
                    <div className="left_box">
                        <div className="txt_box">
                            <h1 className="hero_title">
                                Instant
                                <br className="mobile_br" />
                                collaboration
                                <br className="desktop_br" />
                                <br className="tablet_br" />
                                for <br className="mobile_br" />
                                <span>remote teams</span>
                            </h1>
                            <p className="hero_paragraph">
                                All-in-one place for your remote team to chat,
                                <br />
                                collaborate and track project progress.
                            </p>
                        </div>
                        <form>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <button type="submit" aria-label="Get Early Access">
                                Get Early Access
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
                            Your Hub for
                            <br />
                            teamwork
                        </h2>
                        <p className="paragraph fade_up item_2">
                            In Team App, you’ve got all the flexiblity to work
                            <br className="tablet_br" />
                            when, where
                            <br className="desktop_br" />
                            and how it’s best for you. You can
                            <br className="tablet_br" />
                            easily chat, send audio and
                            <br className="desktop_br" />
                            video clips, or hop on a
                            <br className="tablet_br" />
                            huddle to talk things out live.
                        </p>
                        <a href="#" className="link fade_up item_3">
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
                    <img
                        className="desktop_management_img"
                        src="/team-app-ts/img/desktop_management.svg"
                        alt="management image"
                    />
                    <img
                        className="tablet_management_img"
                        src="/team-app-ts/img/tablet_management.svg"
                        alt="management image"
                    />
                    <img
                        className="mobile_management_img"
                        src="/team-app-ts/img/mobile_management.svg"
                        alt="management image"
                    />
                    <div className={`txt_box ${isVisible ? "visible" : ""}`}>
                        <h2 className="title fade_up item_1">
                            Simple task <br />
                            management
                        </h2>
                        <p className="paragraph fade_up item_2">
                            Tast management with Team App is as simple as it
                            gets. No complicated layout and need for user
                            training. Tour team members will intuitively know
                            how to navigate the platform. it’s so simple a baby
                            could do it!
                        </p>
                        <a href="#" className="link fade_up item_3">
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
                            Scheduling that
                            <br />
                            actually works
                        </h2>
                        <p className="paragraph fade_up item_2">
                            Integrate the Team calendar with your favorite
                            calendar app, be it Google Calendar or iCal. Each
                            team member works with their favorite calendar,
                            while all the data is synced with the master
                            calendar.
                        </p>
                        <a href="#" className="link fade_up item_3">
                            Learn More
                            <img
                                src="/team-app-ts/img/learn_more_arrow.svg"
                                alt="→"
                            />
                        </a>
                    </div>
                    <img
                        className="desktop_scheduling_img"
                        src="/team-app-ts/img/desktop_scheduling.svg"
                        alt="scheduling image"
                    />
                    <img
                        className="tablet_scheduling_img"
                        src="/team-app-ts/img/tablet_scheduling.svg"
                        alt="scheduling image"
                    />
                    <img
                        className="mobile_scheduling_img"
                        src="/team-app-ts/img/mobile_scheduling.svg"
                        alt="scheduling image"
                    />
                </div>
            </section>
            {/* review 섹션 */}
            <section className="review">
                <div className="container">
                    <h2 className="title">What people say about</h2>
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
                                        avatarImage={item.avatarImage}
                                        comments={item.comments}
                                        avatarName={item.avatarName}
                                        avatarCareer={item.avatarCareer}
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
