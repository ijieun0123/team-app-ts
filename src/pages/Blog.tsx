import type { FC } from "react";
import { blogCardData } from "../data/blogCardData";
import BlogCard from "../components/BlogCard";
import "../styles/Blog.css";

const Blog: FC = () => {
    return (
        <main id="main-content" className="blog">
            <div className="container">
                <div className="title_box">
                    <h1 className="title">Blog</h1>
                    <p className="paragraph">
                        Our latest web design tips, tricks, insights and
                        resources hot off the presses.
                    </p>
                </div>
                <div className="card_box">
                    {/* card */}
                    {blogCardData.map((item, idx) => (
                        <BlogCard
                            key={idx}
                            cardImage={item.cardImage}
                            title={item.title}
                            description={item.description}
                            avatarImage={item.avatarImage}
                            avatarName={item.avatarName}
                            createdAt={item.createdAt}
                        />
                    ))}
                </div>
                <button className="next_btn" aria-label="Next">
                    <span className="caption">Next</span>
                    <img src="img/next_arrow.svg" alt="next button" />
                </button>
            </div>
        </main>
    );
};

export default Blog;
