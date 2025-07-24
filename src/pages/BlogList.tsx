import type { FC } from "react";
// import { blogCardData } from "../data/blogCardData";
import BlogCard from "../components/BlogCard";
import "../styles/Blog.scss";
import Button from "../components/Button";
import { useEffect, useState } from "react";

interface BlogCardData {
    id: number;
    image: string;
    title: string;
    description: string;
    writerImage: string;
    writerName: string;
    createdAt: string;
}

const BlogList: FC = () => {
    const [blogCardData, setBlogCardData] = useState<BlogCardData[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/blogs")
            .then(res => {
                if (!res.ok)
                    throw new Error("블로그 데이터를 불러오는 데 실패했어요.");
                return res.json();
            })
            .then(data => {
                setBlogCardData(data);
            })
            .catch(err => {
                console.error("에러 발생:", err);
            });
    }, []);

    return (
        <main id="main-content" className="blog" tabIndex={-1}>
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
                            cardImage={item.image}
                            title={item.title}
                            description={item.description}
                            writerImage={item.writerImage}
                            writerName={item.writerName}
                            createdAt={item.createdAt}
                            id={item.id}
                        />
                    ))}
                </div>
                <Button className="caption next_btn">Next</Button>
            </div>
        </main>
    );
};

export default BlogList;
