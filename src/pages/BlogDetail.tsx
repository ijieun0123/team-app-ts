import type { FC } from "react";
import "../styles/BlogDetail.css";

const BlogDetail: FC = () => {
    return (
        <section className="blog_detail">
            <div className="blog_detail_container">
                <h1 className="title">
                    10 Secret tips for managing a remote team
                </h1>
                <div className="avatar">
                    <img src="/img/blog_avatar_1.svg" alt="avatar" />
                    <span className="caption">Kristin Watson</span>
                    <span className="line">|</span>
                    <span className="caption">25 January 2025</span>
                </div>
                <img
                    src="/img/blog_1.svg"
                    alt="blog image"
                    className="post_img"
                />
                <p className="paragraph">
                    Remote work is here to stay. Whether you're leading a fully
                    distributed startup or managing a hybrid team, navigating
                    the challenges of remote leadership takes more than just
                    scheduled Zoom calls and fancy productivity tools.
                    <br />
                    <br />
                    At its core, managing a remote team is about creating trust,
                    clarity, and human connection — even when you're miles
                    apart. <br />
                    <br />
                    Here are some not-so-obvious but incredibly effective tips
                    that can help you become a better remote leader and build a
                    thriving team culture. Start with trust. Micromanaging kills
                    creativity and motivation.
                    <br />
                    <br />
                    When you show trust from the beginning, your team feels
                    empowered. Set clear expectations, then give them space to
                    deliver. Communicate clearly — and often.
                    <br />
                    <br />
                    Lack of communication creates doubt. But constant messages
                    can overwhelm. Find a balance using async tools like Slack,
                    Notion, or Loom. <br />
                    <br />
                    Clear communication doesn’t have to mean constant noise.
                    Make meetings personal. The first few minutes of a meeting
                    are golden. Ask about someone's weekend, share a funny meme,
                    or talk about life. That personal connection helps build
                    empathy and rapport.
                    <br />
                    <br />
                    Protect deep work. Encourage time blocks where team members
                    can focus without interruptions. This prevents burnout and
                    gives people the mental space to produce their best work.
                    Create casual spaces. Remote teams need a “watercooler” too.
                    A #random Slack channel or casual Friday coffee chats can
                    give people a space to connect beyond just work. Document
                    everything. <br />
                    <br />
                    If it’s not written down, it didn’t happen. Keep decisions,
                    project updates, and shared knowledge in one place that
                    everyone can access — whether they’re in Lisbon or Seoul.
                    Respect time zones. Don’t assume everyone’s online when you
                    are. Use tools to check availability across regions and
                    embrace asynchronous workflows whenever possible. <br />
                    <br />
                    Celebrate wins, big and small. When someone ships a new
                    feature or writes an amazing report, shout it out.
                    Recognition is even more powerful when you're remote —
                    because it’s often the only feedback people get.
                    <br />
                    <br />
                    Care about well-being. Ask how your team is doing — really
                    doing. Make space for honesty, encourage time off, and watch
                    for signs of burnout. Mental health isn’t a nice-to-have.
                    It’s essential. Lead the way. Model the behaviors you want
                    your team to adopt. <br />
                    <br />
                    Set boundaries, take breaks, turn off notifications. If your
                    team sees you resting and thriving, they'll feel permission
                    to do the same. Remote teams don’t need to feel distant.
                    <br />
                    <br />
                    With a little intentionality, empathy, and structure, you
                    can create a remote culture that’s not only productive, but
                    also deeply human.
                </p>
                <div className="written_by_box">
                    <img src="/img/blog_avatar_1.svg" alt="avatar" />
                    <div className="txt_box">
                        <span className="written_by">WRITTEN BY</span>
                        <span className="name">Kristin Watson</span>
                        <span className="caption">
                            CEO at Team Inc. Author of the upcoming book on Team
                            Management and Leadership
                        </span>
                    </div>
                </div>
                <span className="line"></span>
                <div className="conversation">
                    <p className="conversation_title">Join the conversation</p>
                    <div className="img_textarea">
                        <img src="/img/blog_avatar_2.svg" alt="avatar" />
                        <textarea
                            name=""
                            id=""
                            placeholder="Comments"
                        ></textarea>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
